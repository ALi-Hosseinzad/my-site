import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import "./../../css/Contact.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "480%",
    left: "25%",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const arr = [
    {
      id: 0,
      icon: "github-alt",
      url: "#",
    },
    {
      id: 1,
      icon: "whatsapp",
      url: "#",
    },
    {
      id: 2,
      icon: "linkedin-in",
      url: "#",
    },
    {
      id: 3,
      icon: "skype",
      url: "#",
    },
    {
      id: 4,
      icon: "telegram-plane",
      url: "#",
    },
    {
      id: 5,
      icon: "twitter",
      url: "#",
    },
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom className="ContantHeader">
            Contact
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            {arr.map((value) => {
              return (
                <ListItem key={value.id}>
                  <a href={value.url} alt={value.icon}>
                    <FontAwesomeIcon
                      icon={['fab', `${value.icon}`]}
                      className="icon"
                    />
                  </a>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
