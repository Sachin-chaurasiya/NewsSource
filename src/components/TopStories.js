import React, { useEffect } from "react";
import TopStory from "./TopStory";
import Spinner from "./layouts/Spinner";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function TopStories({ loading, topStories, getTopArticles }) {
  const classes = useStyles();
  useEffect(() => {
    getTopArticles("world");
  }, []);

  return (
    <>
      {loading ? (
        <Spinner /> // or instead just type "Loading"
      ) : (
        <>
          <div className={classes.buttons}>
            <Button
              onClick={() => {
                getTopArticles("world");
              }}
              variant="outlined"
              color="primary"
            >
              World News
            </Button>
            <Button
              onClick={() => {
                getTopArticles("politics");
              }}
              variant="outlined"
              color="primary"
            >
              Politics
            </Button>

            <Button
              onClick={() => {
                getTopArticles("technology");
              }}
              variant="outlined"
              color="secondary"
            >
              Technology
            </Button>
            <Button
              onClick={() => {
                getTopArticles("us");
              }}
              variant="outlined"
              color="default"
            >
              US News
            </Button>
            <Button
              onClick={() => {
                getTopArticles("science");
              }}
              variant="outlined"
              color="secondary"
            >
              Science
            </Button>
            <Button
              onClick={() => {
                getTopArticles("business");
              }}
              variant="outlined"
              color="default"
            >
              Business
            </Button>
          </div>

          <NavLink to="/">
            <Link component="button" variant="body2">
              Go Back
            </Link>
          </NavLink>

          <div className={classes.root}>
            <Grid container spacing={3}>
              {topStories.map((topstory) => (
                <Grid item xs={12} sm={4} key={topstory.url}>
                  <TopStory topstory={topstory} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </>
  );
}

TopStories.propTypes = {
  loading: PropTypes.bool.isRequired,
  topStories: PropTypes.array.isRequired,
};

export default TopStories;
