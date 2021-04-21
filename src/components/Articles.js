import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Article from "./Article";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  media: {
    height: 300,
  },
});

const Articles = ({ loading, articles }) => {
  const classes = useStyles();
  return (
    <>
      {!loading ? (
        articles?.length <= 0 ? (
          <Typography component="h4" variant="h4" style={{ marginTop: "16px" }}>
            {" "}
            No Article Found{" "}
          </Typography>
        ) : null
      ) : null}
      {loading ? (
        "Loading..."
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {articles.map((article) => (
              <Grid item xs={12} sm={4} key={article._id}>
                <Article article={article} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};
Articles.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};
export default Articles;
