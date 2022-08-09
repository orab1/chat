import React from 'react'
import { makeStyles } from "@mui/styles";
import { Row } from './Row'
import clsx from 'clsx';

const useStyles = makeStyles({
    fullRow: {
        width: '100%'
    }
})

export const FullRow = ({className, ...props}) => {
    const classes = useStyles();

    return (
        <Row className={clsx(className, classes.fullRow)} {...props} />
    )
}
