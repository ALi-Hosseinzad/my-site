import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./../../css/Experiences.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "130%",
  },
}));

function Experiences() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Paper className="profileName">
            <Typography variant="h2" gutterBottom className="profileHeader">
              Experiences
            </Typography>
            <hr />
          </Paper>
        </Grid>
        <Grid item  xs={6}>
          <Paper className="profileItem">
            <Typography variant="h4" gutterBottom className="profileHeader">
              Educations
            </Typography>
            <Typography variant="body1" gutterBottom className="profileText">
              2011-2015 <br />
              Computer Engineering Software of َUCNA University of Tabriz
            </Typography>
            <a
              className="profileLink"
              href="http://www.ucna.ac.ir/"
              target="_blank"
            >
              UCNA
            </a>
            <br />
            <br />
            <Typography variant="body1" gutterBottom className="profileText">
              May2014-June2014 <br />
              Android programming course in Tabriz Technical Complex
            </Typography>
            <a
              className="profileLink"
              href="http://www.mftabriz.com/Main.aspx"
              target="_blank"
            >
              mftabriz
            </a>
            <br />
            <br />
            <Typography variant="body1" gutterBottom className="profileText">
              May2012-June2012 <br />
              Network+ course in University of Tabriz
            </Typography>
            <a
              className="profileLink"
              href="https://www.tabrizu.ac.ir/en"
              target="_blank"
            >
              University of Tabriz
            </a>
            <br />
          </Paper>
        </Grid>
        <Grid item  xs={6}>
          <Paper className="profileItem">
            <Typography variant="h4" gutterBottom className="profileHeader">
              Careers
            </Typography>
            <Typography variant="body1" gutterBottom className="profileText">
              May2019 for now
              <br />
              Responsible for supporting Front and Atlas site of Hyper Office
              Company
            </Typography>
            <a
              className="profileLink"
              href="https://www.hyperoffice.com/collaboration-suite/"
              target="_blank"
            >
              hyperoffice
            </a>
            <br /><br />
            <Typography variant="body1" gutterBottom className="profileText">
              April 2019 for now
              <br />
              Programmer Front and Tinab Parto Shargh Company-Tehran
            </Typography>
            <a
              className="profileLink"
              href="https://www.linkedin.com/company/teanab/"
              target="_blank"
            >
              Teanab
            </a>
            <br /><br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Experiences;
