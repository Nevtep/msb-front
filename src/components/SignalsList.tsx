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
import { Box, Typography } from '@material-ui/core';

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
            <ListItemText
              disableTypography
              primary={(
                <Box display="flex" justifyContent="space-around">
                  <Typography variant='h6'>{`${signal.pair.slice(0,3)} / ${signal.pair.slice(3)}`}</Typography>
                  <Typography variant='h6'>{new Intl.DateTimeFormat('es-AR', { timeStyle: 'short' }).format(new Date(signal.time))}</Typography>
                </Box>
              )}
            />
          </ListItem>
        ))}
    </List>
  );
}
