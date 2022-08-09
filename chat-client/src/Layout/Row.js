import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';

const useStyles = makeStyles({
    row: {
        display: 'flex'
    }
})

export const Row = ({className, ...props}) => {
    const classes = useStyles();

    return (
        <Box className={clsx(className, classes.row)} {...props} />
    )
}
