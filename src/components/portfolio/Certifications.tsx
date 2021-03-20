import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ccpr from '../../assets/ccpr.jpg';
import saar from '../../assets/saar.jpg';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        root: {
            /* width: '100%', */
            height: '100%',
        },
        media: {
            height: 290,
        },
        cbuttons: {
            verticalAlign: 'bottom',
        },
        caa: {
        }
    }),
);

export default function Projects() {
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-between"
                id="panel1a-header"
            >
                <Typography className={classes.heading}><b>CERTIFICATIONS</b></Typography>
            </AccordionSummary>
            <AccordionDetails>

                <Grid spacing={2} container justify="space-between">

                    {/* <!-- Cert 1 --> */}
                    <Grid item sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={saar}
                                    title="preview"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>AWS Certified Solutions Architect</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        November 2020
                            </Typography>
                                    <Typography variant="body1">
                                        The AWS Certified Solutions Architect – Associate exam validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://d1yuvz3b02ioxr.cloudfront.net/" size="small" color="primary">
                                    VIEW CERT
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* <!-- Cert 2 --> */}
                    <Grid item sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={ccpr}
                                    title="preview"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>AWS Certified Cloud Practitioner</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        September 2020
                                        </Typography>
                                    <Typography variant="body1">
                                        The AWS Certified Cloud Practitioner examination is intended for individuals who have the knowledge and skills necessary to effectively demonstrate an overall understanding of the AWS Cloud

                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cbuttons}>
                                <Button href="" size="small" color="primary">
                                    VIEW CERT
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>




                </Grid>

            </AccordionDetails>
        </Accordion>
    )
}