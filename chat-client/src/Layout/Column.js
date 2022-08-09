import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';

export const Column = (className, ...props) => {
    const classes = useStyles();

    return (
        <Box className={clsx(className, classes.column)} {...props} />
    )
}

const useStyles = makeStyles({
    column: {
        display: 'flex',
        flexDirection: 'column'
    }
})