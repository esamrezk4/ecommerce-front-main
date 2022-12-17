import { Container, Button } from "react-bootstrap";
import Header from "../components/Header";

import React from "react";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <Container>
      <Header />
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default layout;
