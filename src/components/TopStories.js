import React, { useEffect, useState } from "react";
import TopStory from "./TopStory";
import Spinner from "./layouts/Spinner";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import axios from "axios";

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

function TopStories() {
  const classes = useStyles();
  const [value, setValue] = useState("world");
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getTopArticles = async (section) => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
      );
      setTopStories(res.data.results);
      setLoading(false);
    };
    getTopArticles(value);
  }, [value]);

  return (
    <>
      {loading ? (
        <Spinner /> // or instead just type "Loading"
      ) : (
        <>
          <div className={classes.buttons}>
            <Button
              onClick={() => {
                setValue("world");
              }}
              variant="outlined"
              color="primary"
            >
              World News
            </Button>
            <Button
              onClick={() => {
                setValue("politics");
              }}
              variant="outlined"
              color="primary"
            >
              Politics
            </Button>

            <Button
              onClick={() => {
                setValue("technology");
              }}
              variant="outlined"
              color="secondary"
            >
              Technology
            </Button>
            <Button
              onClick={() => {
                setValue("us");
              }}
              variant="outlined"
              color="default"
            >
              US News
            </Button>
            <Button
              onClick={() => {
                setValue("science");
              }}
              variant="outlined"
              color="secondary"
            >
              Science
            </Button>
            <Button
              onClick={() => {
                setValue("business");
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

export default TopStories;
