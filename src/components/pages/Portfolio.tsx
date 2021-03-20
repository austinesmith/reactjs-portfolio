import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import {
    Introduction,
    AboutMe,
    Projects,
    Education,
    Certifications,
    Skills
} from '../portfolio';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(2)
        },
        containers: {
            marginTop: theme.spacing(2)
        }
    }),
);

export default function Portfolio() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md" className={classes.containers}>

                <Introduction />

            </Container>
            <Container maxWidth="md" className={classes.containers}>

                <AboutMe />
                <Projects />
                <Education />
                <Certifications />
                <Skills />

            </Container>
        </div>
    );
}