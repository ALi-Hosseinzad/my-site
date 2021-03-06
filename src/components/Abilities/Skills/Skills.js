import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../../../css/Abilities.css";
import Filters from '../../Filter/Filter';
import {SkillsArray} from "./SkillsArray";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "230%",
    padding: "10px",
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Paper className="AbilitiesName">
            <Typography variant="h2" gutterBottom className="AbilitiesHeader">
              Abilities
            </Typography>
            <hr />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="AbilitiesName">
            <Typography variant="h4" gutterBottom className="AbilitiesTitle">
              Skills
            </Typography>
          </Paper>
        </Grid>
        <Filters props={SkillsArray}/>
      </Grid>
    </div>
  );
}
export default Skills;
