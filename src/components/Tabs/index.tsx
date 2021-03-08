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

function useUpMd() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints?.up('md'));
  const [upMd, setUpMd] = React.useState(false);
  React.useEffect(() => {
    if (isUpMd !== upMd) setUpMd(isUpMd);
  }, [isUpMd]);
  return upMd;
}
const Tab = withStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2),
    borderRadius: '35px',
    fontWeight: 'bold',
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
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, resizeDesktop, ...other } = props;
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
          margin: upMd ? 16 : 0,
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
}> = ({ children }) => <React.Fragment>{children}</React.Fragment>;

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary.main,
    margin: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(0),
    },
  },
  contained: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(2),
    borderRadius: '35px',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(0),
    },
  },
  indicator: ({ hidden = false }: { hidden?: boolean }) => ({
    ...(hidden ? { visibility: 'hidden' } : {}),
  }),
  bootomPadding: {
    paddingBottom: theme.spacing(1),
  },
}));

function SimpleTabs({ children, contained, resizeDesktop = false }) {
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
        className={classes.bootomPadding}
        indicatorColor={contained ? 'secondary' : 'primary'}
        TabIndicatorProps={{ className: classes.indicator }}
        variant="fullWidth"
        aria-label="simple tabs example"
        centered
      >
        {children.map((child, index) => (
          <Tab
            {...(contained ? { className: classes.contained } : {})}
            disabled={upMd && resizeDesktop}
            disableRipple
            disableFocusRipple
            label={child.props.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <Grid container justify="center">
        {children.map((child, index) => (
          <Grid item xs={12} {...(resizeDesktop ? { md: 4 } : {})}>
            <TabPanel resizeDesktop={resizeDesktop} value={value} index={index}>
              {child}
            </TabPanel>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default SimpleTabs;
