import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#fafafa",
    minHeight: "400px",
  },
  media: {
    height: 300,
  },
});

const TopStory = ({ topstory }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {topstory && (
        <Card className={classes.card} id={topstory.url}>
          <CardMedia
            className={classes.media}
            component="img"
            src={
              topstory.multimedia?.[0]?.url
                ? `https://nyt.com/${topstory.multimedia[0].url}`
                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            }
            alt="news-img"
          />
          <CardContent>
            <Typography color="primary" variant="h6">
              <a
                href={topstory.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {topstory.title}
              </a>
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              {topstory.byline}
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              {topstory.abstract}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

TopStory.propTypes = {
  topstory: PropTypes.object.isRequired,
};
export default TopStory;
