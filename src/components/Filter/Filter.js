import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./../../css/Abilities.css";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function Filters(props) {
  return (
    <React.Fragment>
      {props.props.map((item,index) => (
        <Grid item xs={6} key={index}>
          <Paper className="AbilitiesItem">
            <div className="rate"key={item.id}>
              <Typography component="label" className="item">
                {item.name}
              </Typography>
              <Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
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
          </Paper>
        </Grid>
      ))}
    </React.Fragment>
  );
}
