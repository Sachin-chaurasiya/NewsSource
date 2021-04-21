import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import axios from "axios";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import { Articles, TopStories, Search } from "./components";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
      );
      console.log(res.data.response.docs);
      setArticles(res.data.response.docs);
      setLoading(false);
    };
    getArticles();
  }, []);

  const searchArticles = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    );
    setArticles(res.data.response.docs);
    setLoading(false);
  };

  const getTopArticles = async (section) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    );
    setTopStories(res.data.results);
    setLoading(false);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Search searchArticles={searchArticles} />
                  {!loading ? (
                    <NavLink to="/topstories">
                      <Link component="button" variant="body2">
                        Go to top stories in World, Tech and U.S
                      </Link>
                    </NavLink>
                  ) : null}

                  <Articles loading={loading} articles={articles} />
                </>
              )}
            />

            <Route
              exact
              path="/topstories"
              render={() => (
                <>
                  <TopStories
                    loading={loading}
                    topStories={topStories}
                    getTopArticles={getTopArticles}
                  />
                </>
              )}
            />
          </Switch>
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
