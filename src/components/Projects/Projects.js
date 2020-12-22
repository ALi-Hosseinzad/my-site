import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import "./../../css/Project.css";
import { ProjectsArray } from "./ProjectsArray";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: "550%",
    padding: 20,
  },
  boot: {
    maxWidth: "100%",
    backgroundColor: "transparent",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className="AbilitiesName">
            <Typography variant="h4" gutterBottom className="AbilitiesTitle">
              Tools
            </Typography>
          </Paper>
        </Grid>
        {ProjectsArray.map((item, i) => {
          return (
            <Grid item xs={6} key={i}>
              <Card className={classes.boot}>
                <CardHeader
                  title={item.haeder}
                  subheader={item.date}
                  className="project-header"
                />
                <CardMedia
                  className={classes.media}
                  image={item.url}
                  title={item.haeder}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and
                      cook, stirring occasionally until lightly browned, 6 to 8
                      minutes. Transfer shrimp to a large plate and set aside,
                      leaving chicken and chorizo in the pan. Add pimentón, bay
                      leaves, garlic, tomatoes, onion, salt and pepper, and
                      cook, stirring often until thickened and fragrant, about
                      10 minutes. Add saffron broth and remaining 4 1/2 cups
                      chicken broth; bring to a boil.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
