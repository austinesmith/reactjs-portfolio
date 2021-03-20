import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import degree from '../../assets/degree.jpg';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        root: {
            width: '100%',
        },
        media: {
            height: 0,
            //paddingTop: '56.25%', // 16:9
            paddingTop: '85%',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
            color: '#000000',
            fontSize: '15px',
            fontWeight: 'bold'
        },
    }),
);

export default function Education() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}><b>EDUCATION</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>

                    {/* <!-- card --> */}
                    <Grid
                        container
                        spacing={0}
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12}>

                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            UNO
          </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title="Bachelor's of Science in Cybersecurity"
                                    subheader="December 12, 2018"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={degree}
                                    title="degree"
                                />

                                <CardActions disableSpacing>
                                    <IconButton >
                                        VIEW DEGREE
                            </IconButton>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            The Cybersecurity programs at IS&T give students exposure to a broad range of issues related to information and network security. The courses that constitute this major will provide the students with the necessary skills to conduct a risk assessment, develop information security policies, identify critical issues for electronic commerce, resolve critical issues for various operating systems, and apply this knowledge to intrusion events.
                                </Typography>
                                        <Typography paragraph>
                                            The University of Nebraska at Omaha has been named a Center of Academic Excellence in Information Assurance Education by the National Security Agency (NSA).
                                </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>

                        </Grid>
                    </Grid>


                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}