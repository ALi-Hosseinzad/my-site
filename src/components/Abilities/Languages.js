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
    top: "350%",
    padding: "10px",
  },
}));
const arr = [
  {
    id: 0,
    name: "Azari(Mother tongue)",
    rate: "5",
  },
  {
    id: 1,
    name: "Persian(Daily use)",
    rate: "5",
  },
];
const arr2 = [
  {
    id: 2,
    name: "English(Survivable)",
    rate: "3",
  },
  {
    id: 3,
    name: "Turkish(Survivable)",
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
              Languages
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
