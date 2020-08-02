import React, { useEffect, useState, useRef } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Paper, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, ButtonBase } from '@material-ui/core';


export const Billing: React.FC<RouteComponentProps> = () => {
  const [amount, setAmount] = useState(10);

  const handlePay = () => {
    paypal.Buttons({
      createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        console.log('about to pay:', amount)
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button');
  };

  const handleSelectSubscription = (event) => {
    setAmount(parseInt(event.target.value));
  }

  return (<main>
    <Box
      display="flex"
      justifyContent="space-around"
      marginTop={3}
    >
      <Paper elevation={3}>
        <Box 
      padding={5}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Subscripción</FormLabel>
          <RadioGroup aria-label="subscription" name="subscription" value={amount} onChange={handleSelectSubscription}>
            <FormControlLabel value={10} control={<Radio />} label="1 Semana" />
            <FormControlLabel value={30} control={<Radio />} label="1 Mes" />
            <FormControlLabel value={200} control={<Radio />} label="1 Año" />
          </RadioGroup>
        </FormControl>
        <div>Usted paga: u$d{amount}</div>
        <div id="paypal-button"></div>
        </Box>
      </Paper>
    </Box>
  </main>)
}