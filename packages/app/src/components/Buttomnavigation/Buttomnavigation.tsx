import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import BarChartIcon from '@material-ui/icons/BarChart';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SettingsIcon from '@material-ui/icons/Settings';

import getCurrentDate from '../../utils/Getcurrentdate'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

const styles = makeStyles({
  root: {
    color: "grey",
    "&$selected": {
      color: "red"
    }
  },
  selected: {}
});

const SimpleBottomNavigation:FC = () => {
  const classes = useStyles();
  const maincolor = styles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      classes={classes}
    >
      <BottomNavigationAction classes={maincolor} label={getCurrentDate()} icon={<FormatListBulletedIcon />} />
      <BottomNavigationAction classes={maincolor} label="Stats" icon={<BarChartIcon />} />
      <BottomNavigationAction classes={maincolor} label="Accounts" icon={<CreditCardIcon />} />
      <BottomNavigationAction classes={maincolor} label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation