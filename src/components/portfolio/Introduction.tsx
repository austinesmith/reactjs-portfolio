import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/bestfriend.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 0,
            paddingBottom: 0
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
        pic: {
            align: 'right',
        }
    }),
);

export default function Introduction() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <Grid container spacing={2} justify="space-between">
                <Grid item xs={7}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>

                            <Typography component="h5" variant="h5">
                                Austin Smith
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Cloud Engineer in Omaha, NE
                            </Typography>
                            <Typography>
                                <ul>
                                    <li>Bachelor's of Science in Cybersecurity</li>
                                    <li>AWS Certified Solutions Architect - Associate</li>
                                    <li>AWS Certified Cloud Practitioner</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </div>
                </Grid>
                <Grid item alignContent="flex-end">
                    <Paper elevation={0} style={{ height: 190, width: '100%', paddingRight: 20, paddingLeft: 0, marginLeft: 0, paddingTop: 20, paddingBottom: 20 }} >
                        <img src={img} height="150px" className={classes.pic} />
                    </Paper>
                </Grid>
            </Grid>
        </Card>
    );
}