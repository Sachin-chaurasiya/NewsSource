import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
const Footer = () => {
  return (
    <Container>
      <Typography
        component="p"
        variant="body2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#21243d",
          fontWeight: "bold",
        }}
      >
        Made with ❤ by{"   "}
        <Link
          href="https://www.linkedin.com/in/sachin-chaurasiya"
          style={{ padding: "10px" }}
          target="_blank"
        >
          Sachin Chaurasiya
        </Link>{" "}
      </Typography>
    </Container>
  );
};

export default Footer;
