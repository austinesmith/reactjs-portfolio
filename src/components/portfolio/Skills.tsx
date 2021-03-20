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

export default function Skills() {
    const classes = useStyles();
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}><b>SKILLS</b></Typography>
            </AccordionSummary>
            <AccordionDetails style={{ paddingTop: 0 }}>
                <Typography>
                    <ul>
                        <div><li>Using <b>Java</b>, <b>Javascript</b>, <b>Typescript</b>, and <b>C</b> for application development</li></div>

                        <div><li>Designing responsive user interfaces with <b>ReactJS</b> + <b>Material-UI</b> and <b>Vue.js</b> + <b>Vuetify</b></li></div>

                        <div><li>Building infrastructure and <b>serverless</b> applications using <b>CDK</b> and <b>CloudFormation</b> in <b>AWS</b></li></div>

                        <div><li>Experience using <b>Bash</b> and <b>Powershell</b> for tools and automation</li></div>

                        <div><li>Software engineering best practices for <b>version control</b>, <b>build automation</b>, and <b>continuous integration</b></li></div>

                        <div><li>Knowledgeable in best practices for confidentiality, integrity, and availability of information systems</li></div>

                        <div><li>Experience managing <b>relational</b> and <b>NoSQL</b> database environments and using <b>SQL</b></li></div>

                        <div><li>Working efficiently on a development team to ensure goals are met efficiently</li></div>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}