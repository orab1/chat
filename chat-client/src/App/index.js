import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container } from '../Layout/Container'

export const App = () => {
    const classes = useStyles();

    return (
        <Container className={classes.backgroundContainer}>

        </Container>
    )
}

const useStyles = makeStyles(({}) => ({
    backgroundContainer: {
        background: 
    }
}))