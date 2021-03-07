import React from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

const Tab = withStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(2),
    borderRadius: '35px',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(0),
    },
  },
  selected: {
    color: theme.palette.secondary.main,
  },
}))(MuiTab);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <div style={{ display: value === index ? 'block' : 'none' }}>
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
    backgroundColor: theme.palette.background.paper,
  },
  bootomPadding: {
    paddingBottom: theme.spacing(1),
  },
}));

function SimpleTabs({ children }) {
  const classes = useStyles();
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
        indicatorColor="primary"
        variant="fullWidth"
        aria-label="simple tabs example"
        centered
        TabIndicatorProps={{ style: { backgroundColor: '#fff' } }}
      >
        {children.map((child, index) => (
          <Tab
            disableRipple
            disableFocusRipple
            label={child.props.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      {children.map((child, index) => (
        <TabPanel value={value} index={index}>
          {child}
        </TabPanel>
      ))}
    </div>
  );
}
export default SimpleTabs;
