import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./../../css/Profile.css";
import imgSrc from "./../../img/me/me.jpeg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "80%",
  },
}));

function ProfileBody() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container justify="center" spacing={1}>
          <Grid item xs>
            <Paper className="profileItem">
              <Typography variant="h4" gutterBottom className="profileHeader">
                About Me
              </Typography>
              <Typography variant="body1" gutterBottom className="profileText">
                I am an allround web developer. I am a senior programmer with
                good knowledge of front-end techniques. I love structure and
                order and I also stand for quality. I love spending time on
                fixing little details and optimizing web apps. Also I like
                working in a team, I'll learn faster and much more
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className="profileImg">
              <img src={imgSrc} alt="Ali Hossein zad" />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className="profileItem">
              <Typography variant="h4" gutterBottom className="profileHeader">
                Details
              </Typography>
              <Typography variant="h6" gutterBottom className="profileTitle">
                Name:
              </Typography>
              <Typography variant="body1" gutterBottom className="profileText">
                Ali Hossein zad
              </Typography>
              <Typography variant="h6" gutterBottom className="profileTitle">
                Age:
              </Typography>
              <Typography variant="body1" gutterBottom className="profileText">
                28
              </Typography>
              <Typography variant="h6" gutterBottom className="profileTitle">
                Location:
              </Typography>
              <Typography variant="body1" gutterBottom className="profileText">
                Tehran,Iran
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
}
export default ProfileBody;
