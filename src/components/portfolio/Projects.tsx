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
import img from '../../assets/bestfriend.jpg';

import Grid from '@material-ui/core/Grid';

import vuejs from '../../assets/vuejsport.jpg';
import reactjs from '../../assets/reactjswebapp.jpg';
import crud from '../../assets/cruddnapp.jpg';
import artifact from '../../assets/artifactmarketplace.jpg'
import pajamas from '../../assets/snowkitty.jpg'

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
            height: 140,
        },
        cbuttons: {

            justifyContent: 'flex-end'
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
                <Typography className={classes.heading}><b>PROJECTS</b></Typography>
            </AccordionSummary>
            <AccordionDetails>

                <Grid spacing={2} container >

                    {/* <!-- Project 1 --> */}
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={reactjs}
                                    title="preview"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>Serverless Portfolio Website Powered by ReactJS + Material-UI and Automatically Deployed with AWS CDK</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This is the website you are currently browsing.  It has been rebuilt from the ground up from the previous portfolio project using a new framework.  The project uses a serverless architecture on AWS with S3 and Cloudfront.  It is automatically deployed using CDK and never requires the use of the AWS console.  The entire project consists of two separate projects managed together with a Yarn monolithic repository.  Both the CDK and ReactJS are developed using Typescript and Github Actions are used for continuous integration.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cbuttons}>
                                <Button href="" size="small" color="primary">
                                    GITHUB REPO
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* <!-- Project 2 --> */}
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={crud}
                                    title="preview"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>C.R.U.D. Database built on Serverless Architecture</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Description: This project creates a web API following the standards of REpresentation State Transfer that enables create, read, update, and delete functions to a NoSQL database. All resources are provisioned on services fully managed by AWS for a completely serverless architecture. The back end uses API Gateway to trigger Lambda functions that perform operations on a DynamoDB table. The front end provides the client implementation of the API using a static Vue.js application hosted on S3. All resources are automatically provisioned using the AWS CDK.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://d1yuvz3b02ioxr.cloudfront.net/" size="small" color="primary">
                                    LIVE DEMO
                        </Button>
                                <Button href="https://github.com/austinesmith/vuejs-in-s3-over-cloudfront" size="small" color="primary">
                                    GITHUB REPO
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* <!-- Project 3 --> */}
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={vuejs}
                                    title="preview"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>Serverless Portfolio Website Powered by Vue.js + Vuetify and Automatically Deployed with AWS CDK</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This is a website similar to the website you're currently browsing except that this one has been created in Vue.js and Vuetify instead of ReastJS and Material-UI.  The project uses a serverless architecture on AWS with S3 and Cloudfront.  It is automatically deployed using CDK and never requires the use of the AWS console.  The entire project consists of two separate projects managed together with a Yarn monolithic repository.  The CDK deployment is developed in CDK and the front-end is developed in Javascript.  Github Actions are used for continuous integration.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://portfolio.austinesmith.com/#/" size="small" color="primary">
                                    LIVE DEMO
                        </Button>
                                <Button href="" size="small" color="primary">
                                    GITHUB REPO
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* <!-- Project 4 --> */}
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={artifact}
                                    title="preview"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>Artifact Marketplace Java Servlet</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This project uses Java EE to create a simple one-page marketplace that allows users to add, remove, and view for sale listings from a database. It accomplished by deploying a *.WAR servlet to an Apache Tomcat webserver. The servlets use JDBC to connect to a MySQL database and persist data.  <b>This is an old project, but I plan on refactoring the code into a Spring application and then containerizing it for a live demo soon.</b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://github.com/austinesmith/artifactmarketplace" size="small" color="primary">
                                    GITHUB REPO
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* <!-- Project 5 --> */}
                    <Grid item md={4} sm={6} xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={pajamas}
                                    title="preview"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>Digital Art</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Creating digital art is a hobby of mine. This is a collection of professional logos and other works I have created for myself and others. These were created in Adobe Photoshop. If you like these designs feel free to contact me.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <Button href="https://github.com/austinesmith/artifactmarketplace" size="small" color="primary">
                                    VIEW ART
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>

            </AccordionDetails>
        </Accordion>
    )
}