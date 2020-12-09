import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./../../css/Abilities.css";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "230%",
    padding:"10px",
  },
}));
const arr = [
  {
    id: 0,
    name: "jQuery",
    rate: "4",
  },
  {
    id: 1,
    name: "Backbone.js",
    rate: "3",
  },
  {
    id: 2,
    name: "Rract.js",
    rate: "4.5",
  },
  {
    id: 3,
    name: "HTML",
    rate: "5",
  },
  {
    id: 4,
    name: "CSS",
    rate: "5",
  },
  {
    id: 5,
    name: "Javascript",
    rate: "4",
  },
  {
    id: 6,
    name: "ES5/ES6/ES7",
    rate: "4",
  },
];
const arr2 = [
  {
    id: 7,
    name: "Bootstrap",
    rate: "5",
  },
  {
    id: 8,
    name: "Material-UI",
    rate: "4",
  },
  {
    id: 9,
    name: "Materialize",
    rate: "5",
  },
  {
    id: 10,
    name: "Hooks",
    rate: "5",
  },
  {
    id: 11,
    name: "AJAX",
    rate: "4.5",
  },
  {
    id: 12,
    name: "JSON/API",
    rate: "4.5",
  },
  {
    id: 13,
    name: "SCSS/SASS",
    rate: "4",
  },
];
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
        <Grid item xs={6}>
          <Paper className="AbilitiesItem">
            {arr.map((item) => (
              <div className="rate">
                <Typography component="label" className="item">
                  {item.name}
                </Typography>
                <Box
                  component="fieldset"
                  mb={3}
                  borderColor="transparent"
                  key={item.id}
                  className="box"
                >
                  <Rating
                    className="rate"
                    name="read-only"
                    value={item.rate}
                    readOnly
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
              </div>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="AbilitiesItem">
            {arr2.map((item) => (
              <div className="rate">
                <Typography component="label" className="item">
                  {item.name}
                </Typography>
                <Box
                  component="fieldset"
                  mb={3}
                  borderColor="transparent"
                  key={item.id}
                  className="box"
                >
                  <Rating
                    className="rate"
                    name="read-only"
                    value={item.rate}
                    readOnly
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
              </div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Skills;
