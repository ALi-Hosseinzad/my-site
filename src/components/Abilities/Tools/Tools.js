import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../../../css/Abilities.css";
import Filters from '../../Filter/Filter';
import {ToolsArray} from "./ToolsArray";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "350%",
    padding: "10px",
  },
}));

function Tools() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Paper className="AbilitiesName">
            <Typography variant="h4" gutterBottom className="AbilitiesTitle">
              Tools
            </Typography>
          </Paper>
        </Grid>
        <Filters props={ToolsArray}/>
      </Grid>
    </div>
  );
}
export default Tools;
