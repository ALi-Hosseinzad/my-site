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
    top: "400%",
    padding: "10px",
  },
}));
const arr = [
  {
    id: 0,
    name: "Firefox / Chrome (8 years)",
    rate: "5",
  },
  {
    id: 1,
    name: "MS Office (10+ years)",
    rate: "5",
  },
  {
    id: 2,
    name: "Windows (10+ years)",
    rate: "5",
  },
  {
    id: 3,
    name: "Linux (3 years)",
    rate: "4",
  },
  {
    id: 4,
    name: "Git Lab/ Git Hub (2 years)",
    rate: "4",
  },
  {
    id: 5,
    name: "Adobe Dreamwewer (3 years)",
    rate: "4",
  },
];
const arr2 = [
  {
    id: 0,
    name: "Notepad++ (5 years)",
    rate: "5",
  },
  {
    id: 1,
    name: "visual studio code (3 years)",
    rate: "5",
  },
  {
    id: 2,
    name: "plyr.js-react (1 year)",
    rate: "4",
  },
  {
    id: 3,
    name: "Canvas.js react (1 year)",
    rate: "4",
  },
  {
    id: 4,
    name: "react infinite scroll (1 year)",
    rate: "4",
  },
  {
    id: 5,
    name: "Higher-Order Components (1 year)",
    rate: "4",
  },
];

function Languages() {
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
export default Languages;
