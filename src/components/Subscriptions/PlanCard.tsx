import React from 'react';
import { Paper, Typography, Radio, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { GetPlans_plans } from '../../queries/__generated__/GetPlans';

type PlanCardProps = {
    plan: GetPlans_plans
    selected: boolean
    onSelect: (plan: GetPlans_plans) => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexBasis: '15%',maxHeight: '8rem'
    }
}))

export const PlanCard: React.FC<PlanCardProps> = ({
    plan,
    selected,
    onSelect
}) => {
    const classes = useStyles();
    return (
        <Paper elevation={selected ? 5 : 1} onClick={() => onSelect(plan)} classes={classes}>
            <Box 
                padding={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                height="100%"
                textAlign="center"
            >
                <Typography variant="h5">{plan.label}</Typography>
                <Typography variant="h4">${plan.amount}.00</Typography>
                <Radio disableRipple checked={selected} />
            </Box>
        </Paper>
    )
}