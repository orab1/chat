import React from 'react'
import { makeStyles } from '@mui/styles'
import { FullRow } from './FullRow';
import clsx from 'clsx';

const useStyles = makeStyles({
    container: {
        height: '100%'
    }
})

export const Container = ({className, ...props}) => {
    const classes = useStyles();

    return (
        <FullRow
            className={clsx(className, classes.container)}
            {...props}
        />
    )
}
