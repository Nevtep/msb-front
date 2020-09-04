import React, { useEffect } from 'react';
import { Paper, Typography, Radio, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type OrderCheckoutProps = {
    amount: number
    referenceId: string
    onTransactionCompleted: (details: any) => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexBasis: '15%',
        minHeight: '15rem',
        marginRight: '6rem',
        marginLeft: '3rem'
    }
}))

export const OrderCheckout: React.FC<OrderCheckoutProps> = ({
    amount,
    referenceId,
    onTransactionCompleted
}) => {
    useEffect(() => {
        paypal.Buttons({
            createOrder: function(data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                console.log('about to pay:', amount)
                return actions.order.create({
                purchase_units: [{
                    amount: {
                    value: amount
                    },
                    reference_id: referenceId
                }]
                });
            },
            onApprove: function(data, actions) {
                // This function captures the funds from the transaction.
                return actions.order.capture().then(function(details) {
                    onTransactionCompleted(details)
                });
            }
        }).render('#paypal-buttons');
    }, [])
    const classes = useStyles();
    return (
        <Paper classes={classes}>
            <Box 
                padding={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                height="100%"
                textAlign="center"
            >
                <div id="paypal-buttons" />
            </Box>
        </Paper>
    )
}