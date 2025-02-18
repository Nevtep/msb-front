import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { baseTheme } from '../../assets/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      borderRadius: '8px',
      backgroundColor: `${baseTheme.palette.primary.light}33`,
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    label: {
      color: baseTheme.palette.text.white,
      '&.MuiStepLabel-active': {
        color: baseTheme.palette.text.white,
      }
    }
  }),
);

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export const HorizontalLinearStepper = ({ activeStep, steps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel classes={classes}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label}>
              <StepLabel classes={{alternativeLabel:classes.label}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
