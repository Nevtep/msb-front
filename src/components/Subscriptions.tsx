import React, { useEffect, useState, useRef } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Paper, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, ButtonBase, Typography, Button } from '@material-ui/core';
import { PlanCard } from './Subscriptions/PlanCard';
import { GET_PLANS } from '../queries/getPlans';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BackspaceIcon from '@material-ui/icons/Backspace';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { HorizontalLinearStepper } from './Subscriptions/Stepper';
import { OrderCheckout } from './Subscriptions/OrderCheckout';
import { CURRENT_USER_QUERY } from '../queries/currentUser';
import { CurrentUserQuery_currentUser as User } from '../queries/__generated__/CurrentUserQuery';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CONFIRM_SUBSCRIPTION } from '../mutations/confirmSubscription';
import { ConfirmSubscription, ConfirmSubscriptionVariables } from '../mutations/__generated__/ConfirmSubscription';
import CircularProgress from '@material-ui/core/CircularProgress';
import { navigate } from 'gatsby';

interface BillingProps extends RouteComponentProps {
  user: User
}

export const Billing: React.FC<BillingProps> = ({ user }) => {
  const { data = { plans: [] }, loading, error } = useQuery(
    GET_PLANS,
  );
  const { plans } = data;
  const [selectedPlan, setSelectedPlan] = useState({});
  useEffect(() => {
    setSelectedPlan(plans[0] || {});
  }, [loading]);

  const [activeStep, setActiveStep] = useState(0);

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

  const goToPanel = () => {
    navigate('/app/vip/signals')
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
            { loading && <CircularProgress />}
            {plans.map((plan, index) => <PlanCard key={index} plan={plan} selected={selectedPlan.amount === plan.amount} onSelect={handleSelectSubscription} />)}
          </Box>
        )
      case 1:
        return (
          <OrderCheckout amount={selectedPlan.amount} referenceId={user.id} onTransactionCompleted={handleTransaction}/>
        )
      case 2:
        return (
          <Typography variant="h2" align="center">Confirmado!</Typography>
        )
    }
  }

  return (<main><section id="subscription" className="main subscription">
    <Box
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h3">
      Subscripción
      </Typography>
      <Box
        marginY={1}
        textAlign="center"
      >
        <p>
          EL PACK DE SEÑALES CUENTA: <br />
          
          15 A 20 SEÑALES AL DIA (SIN MARTINGALA) EN EL HORARIO DE 10 AM A 12 AM. <br />
          
          -LAS SEÑALES LAS OPERAMOS CON VELAS DE 5 MINUTOS. <br />
          
          -LA EXPIRACION DE LAS SEÑALES SON A 5 MINUTOS. <br />
          
          -EL HORARIO QUE MANEJAMOS LAS SEÑALES SON SIEMPRE HORA ARGENTINA (BUENOS AIRES UTC-3) <br />

          -PUEDES OPERAR CON IQOPTION DENTRO DE NUESTRA PLATAFORMA <br />

         ⏰HORA ARGENTINA <br />
          ⏰VELAS DE 5 MINUTOS <br />
          ⏰EXPIRACION 5 MINUTOS <br />
          METODOS DE PAGO:
-SKRILL
-NETELLER
-UALA
-PESOS ARGENTINOS
-PAYPAL
-TARJETA DE CREDITO-DEBITO <br />
        </p>
        <p>
          Podés pagar con PayPal o tarjetas de Crédito/Débito eligiendo uno de estos planes y cliqueando confirmar
        </p>
      </Box>
      <Box
        marginY={3}
        textAlign="center"
      >
        <HorizontalLinearStepper activeStep={activeStep} steps={['Seleccione un plan', 'Verifique y pague', 'Confirmación de pago']} />
      </Box>
      {getStepContent(activeStep)}
      <Box marginTop={3} textAlign="center">
        {activeStep === 0 && (<>
          <Button
            variant="contained"
            color="primary"
            endIcon={(<VerifiedUserIcon />)}
            onClick={handleNext}
          >
            Confirmar
          </Button>
          <Box marginTop="2rem">
            <p>
              Si querés pagar por Skrill, Neteller, UALA, o Pesos Argentinos, comunicate con nosotros.
            </p>
            <ul className="actions">
                <li><a href="https://t.me/SOPORTE_MSB" target="_blank" className="button">Contáctanos</a></li>
            </ul>
          </Box>
        </>)}
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
        {activeStep === 2 && (
          <Button
            variant="contained"
            color="primary"
            startIcon={(<TrendingUpIcon />)}
            onClick={goToPanel}
          >
            Ir al Panel VIP
          </Button>
        )}
      </Box>
    </Box>
    </section>
  </main>)
}