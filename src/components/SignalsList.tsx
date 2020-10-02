import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    green: {
        color: theme.palette.text.white,
        backgroundColor: 'green'
    },
    red: {
        color: theme.palette.text.white,
        backgroundColor: 'red'
    }
  }),
);

export default function SignalsList({ signals }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {signals.map(signal => (
          <ListItem key={signal.id}>
            <ListItemAvatar>
              <Avatar className={classNames({
                  [classes.green]: signal.op === 'CALL',
                  [classes.red]: signal.op === 'PUT'
                })}
              >
                {signal.op === 'CALL' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${signal.pair} ${new Date(signal.time)}`}  />
          </ListItem>
        ))}
    </List>
  );
}
