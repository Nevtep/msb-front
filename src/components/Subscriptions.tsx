import React, { useEffect, useState, useRef } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Paper, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, ButtonBase, Typography, Button } from '@material-ui/core';
import { PlanCard } from './Subscriptions/PlanCard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BackspaceIcon from '@material-ui/icons/Backspace';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { HorizontalLinearStepper } from './Subscriptions/Stepper';
import { OrderCheckout } from './Subscriptions/OrderCheckout';
import { CURRENT_USER_QUERY } from '../queries/currentUser';
import { CurrentUserQuery_currentUser as User } from '../queries/__generated__/CurrentUserQuery';
import { useMutation } from '@apollo/react-hooks';
import { CONFIRM_SUBSCRIPTION } from '../mutations/confirmSubscription';
import { ConfirmSubscription, ConfirmSubscriptionVariables } from '../mutations/__generated__/ConfirmSubscription';

const plans = [
  {
    label: '15 dias',
    value: 30
  },
  {
    label: '1 Mes',
    value: 50
  },
  {
    label: '1 Año',
    value: 200
  },
]

interface BillingProps extends RouteComponentProps {
  user: User
}

export const Billing: React.FC<BillingProps> = ({ user }) => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [activeStep, setActiveStep] = React.useState(0);

  const [confirmSubscription] = useMutation<ConfirmSubscription, ConfirmSubscriptionVariables>(CONFIRM_SUBSCRIPTION, {
    refetchQueries:[ {
      query: CURRENT_USER_QUERY
    }]
  })
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleTransaction = (details: any) => {
    confirmSubscription({
      variables: {
        purchaseId: details.id
      }
    })
    handleNext();
  }

  const handleSelectSubscription = (plan) => {
    setSelectedPlan(plan);
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0: 
        return (
          <Box
            display="flex"
            justifyContent="space-evenly"
            width="100%"
          >
            {plans.map((plan, index) => <PlanCard key={index} plan={plan} selected={selectedPlan.value === plan.value} onSelect={handleSelectSubscription} />)}
          </Box>
        )
      case 1:
        return (
          <OrderCheckout amount={selectedPlan.value} referenceId={user.id} onTransactionCompleted={handleTransaction}/>
        )
      case 2:
        return (
          <Typography variant="h2" align="center">Confirmado!</Typography>
        )
    }
  }

  return (<main>
    <Box
      display="flex"
      flexDirection="column"
      marginTop={3}
    >
      <Typography variant="h3">
      Subscripción
      </Typography>
      <Box
        marginY={3}
        textAlign="center"
      >
        <HorizontalLinearStepper activeStep={activeStep} steps={['Seleccione un plan', 'Verifique y pague', 'Confirmación de pago']} />
      </Box>
      {getStepContent(activeStep)}
      <Box marginTop={3} textAlign="center">
        {activeStep === 0 && (
          <Button
            variant="contained"
            color="primary"
            endIcon={(<VerifiedUserIcon />)}
            onClick={handleNext}
          >
            Confirmar
          </Button>
        )}
        {activeStep === 1 && (
          <Button
            variant="contained"
            color="primary"
            startIcon={(<BackspaceIcon />)}
            onClick={handleBack}
          >
            Cancelar
          </Button>
        )}
      </Box>
    </Box>
  </main>)
}