import React from 'react';
import {
  makeStyles,
  Theme,
  withStyles,
  useTheme,
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';
import clsx from 'clsx';
import uniqid from 'uniqid';

function useUpMd() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints?.up('md'));
  const [upMd, setUpMd] = React.useState(false);
  React.useEffect(() => {
    if (isUpMd !== upMd) setUpMd(isUpMd);
  }, [isUpMd, upMd]);
  return upMd;
}
const Tab = withStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(0),
    fontWeight: 'bold',
    borderTop: '2px solid #DADADA',
    borderRadius: '15px 15px 0px 0px',
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(0),
    },
  },
}))(MuiTab);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  resizeDesktop?: boolean;
  className?: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, resizeDesktop, className, ...other } = props;
  const upMd = useUpMd();

  const hidden = upMd && resizeDesktop ? false : value !== index;
  return (
    <div
      role="tabpanel"
      hidden={hidden}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <div
        style={{
          display: hidden ? 'none' : 'block',
        }}
      >
        <>{children}</>
      </div>
    </div>
  );
}

export const TabPanelWrapper: React.FC<{
  label: string;
  children: React.ReactNode | React.ReactNode[];
  className?: any;
  id: string;
}> = ({ children, className = {} }) => (
  <div className={className}>{children}</div>
);

function a11yPropsKey(id: any) {
  return {
    key: `tab-body-${id}`,
  };
}

function a11yProps(index: any) {
  return {
    key: uniqid(),
    // id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
  },
  contained: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
    borderTop: '2px solid #DADADA',
    borderRadius: '15px 15px 0px 0px',
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(0),
    },
  },
  indicator: ({ hidden = false }: { hidden?: boolean }) => ({
    ...(hidden ? { visibility: 'hidden' } : {}),
  }),
}));

const SimpleTabs: React.FC<{
  children: JSX.Element[];
  contained?: boolean;
  resizeDesktop?: boolean;
  className?: any;
}> = ({ children, contained, resizeDesktop = false, className }) => {
  const upMd = useUpMd();
  const classes = useStyles({ hidden: upMd && resizeDesktop });

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor={contained ? 'secondary' : 'primary'}
        TabIndicatorProps={{ className: classes.indicator }}
        variant="fullWidth"
        aria-label="simple tabs example"
        centered
      >
        {children.map((child, index) => (
          <Tab
            {...(contained ? { className: clsx(classes.contained) } : {})}
            disabled={upMd && resizeDesktop}
            disableRipple
            disableFocusRipple
            label={child?.props?.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <Grid container justify="center" style={{ height: '100%' }}>
        {children.map((child, index) => {
          const hidden = upMd && resizeDesktop ? false : value !== index;
          return (
            <Grid
              {...a11yPropsKey(child?.props?.id)}
              item
              xs={12}
              {...(className ? { className } : {})}
              className={className}
              style={{
                display: hidden ? 'none' : '',
              }}
              {...(resizeDesktop ? { md: 4 } : {})}
            >
              <TabPanel
                resizeDesktop={resizeDesktop}
                value={value}
                index={index}
              >
                {child}
              </TabPanel>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default SimpleTabs;
