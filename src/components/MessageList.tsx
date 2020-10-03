import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

export default function MessageList({ messages }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message.user.fullName} secondary={message.text}  />
          </ListItem>
        ))}
    </List>
  );
}
