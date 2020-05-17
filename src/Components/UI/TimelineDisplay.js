import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TimelineEvent from '../Timeline'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  card: {
    margin: '30px auto',
    // backgroundColor: 'black',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    width: '450px',
    height: 'auto',
    borderRadius: '40px',
    boxShadow: '5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)',
    cursor: 'pointer',
    transition: '0.4s',
    '&:hover': {
    transform: 'scale(0.9, 0.9)',
    boxShadow: '5px 5px 30px 15px rgba(0,0,0,0.25), -5px -5px 30px 15px rgba(0,0,0,0.22)'
  },
}
});
const events = [
  { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
  { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
  { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
  { ts: "2017-09-16T12:22:46.587Z", text: "Registered" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" }
];
export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
      <TimelineEvent events={events}/>
      </CardContent>
    </Card>
  );
}