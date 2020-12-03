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
    top: "210%",
  },
}));

function Abilities() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Paper className="profileName">
            <Typography variant="h2" gutterBottom className="profileHeader">
              Abilities
            </Typography>
            <hr />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className="profileItem">
            <Typography variant="h4" gutterBottom className="profileHeader">
              Educations
            </Typography>
            <Typography variant="body1" gutterBottom className="profileText">
              2011-2015 <br />
              Computer Engineering Software of َUCNA University of Tabriz
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Abilities;
