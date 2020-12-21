import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faWhatsapp,faLinkedinIn,faSkype,faTelegramPlane,faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./../../css/Contact.css";
import { ContactArray } from './ContactArray';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    backgroundColor: "transparent",
    top: "500%",
    left: "25%",
  },
}));

export default function Contact() {
  library.add(fab,faGithub, faWhatsapp,faLinkedinIn,faSkype,faTelegramPlane,faTwitter );
  const classes = useStyles();
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
            {ContactArray.map((value) => {
              return (
                <ListItem key={value.id}>
                  <a href={value.url} alt={value.icon} target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon
                      icon={["fab", `${value.icon}`]}
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
