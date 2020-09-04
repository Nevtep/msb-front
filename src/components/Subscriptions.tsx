import React, { useEffect, useState, useRef } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Paper, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, ButtonBase, Typography, Button } from '@material-ui/core';
import { PlanCard } from './Subscriptions/PlanCard';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BackspaceIcon from '@material-ui/icons/Backspace';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { HorizontalLinearStepper } from './Subscriptions/Stepper';
import { OrderCheckout } from './Subscriptions/OrderCheckout';

const plans = [
  {
    label: '1 Semana',
    value: 11
  },
  {
    label: '1 Mes',
    value: 31
  },
  {
    label: '1 Año',
    value: 200
  },
]

export const Billing: React.FC<RouteComponentProps> = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleTransaction = (details: any) => {
    console.log(details);
    // TODO: Call mutation
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
          <OrderCheckout amount={selectedPlan.value} label={selectedPlan.label} onTransactionCompleted={handleTransaction}/>
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