import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

export default function AboutMe() {
    const classes = useStyles();
    return (  
            <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}><b>ABOUT ME</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Welcome to the developer portfolio page of Austin Smith.  This website is a ReactJS single-page application and is automatically deployed with AWS CDK (Amazon Web Services Cloud Developer Kit).  It is meant to be a living document to showcase my skills and what I've been working on recently.
                            A summary of technologies used for this project, as well as a link to the source code, can be viewed in the footer.
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            I have been a computer enthusiast for most of my life and this has enabled me to develop valuable professional skills in design, development, and security. My current focus is on projects that take advantage of cloud resources.
                            I do development work using AWS in my free time to make sure my skills are constantly improving.  I genuinely enjoy the work.  The arguments behind adopting the cloud are not only compelling, they're interesting.
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            I'm always chasing goals in my life and I'm very driven to accomplish them.  Or I'm taking steps to learn new information and skills and evolve myself as a person.  When I'm not behind a screen I enjoy being productive by doing DIY projects or helping others.  
                            I always make an attempt to fix problems on my own, no matter how challenging.  There is no greater feeling than basking in the glory of your accomplishments!
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography>
                            My favorite way to unwind is to visit the great outdoors with my dog Forest.  He's a golden-retriever/border-collie mix and the best friend I'll ever have.  I also love traveling, cooking great food, graphic design, meeting new people, and riding my motorcycle.
                        </Typography>
                    </AccordionDetails>
            </Accordion>
    )
}