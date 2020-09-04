import React from 'react';
import { Paper, Typography, Radio, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type Plan = {
    label: string
    value: number
}

type PlanCardProps = {
    plan: Plan
    selected: boolean
    onSelect: (plan: Plan) => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexBasis: '15%',
        minHeight: '15rem'
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
                <Typography variant="h4">${plan.value}.00</Typography>
                <Radio disableRipple checked={selected} />
            </Box>
        </Paper>
    )
}