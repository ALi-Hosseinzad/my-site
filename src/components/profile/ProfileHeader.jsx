import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./../../css/Profile.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "30%",
    left:"50%",
  },
}));

function ProfileHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <Paper className="profileName">
            <div className="animated-title">
              <div className="text-top">
                <div>
                  <span>Ali Hossein zad</span>
                </div>
              </div>
              <div className="text-bottom">
                <div style={{fontSize:"6vmin"}}> Interactive resume</div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProfileHeader;
