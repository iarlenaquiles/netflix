import React from "react";

import { Container, Logo, Menu } from "./styles";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />

      <Menu>Séries</Menu>
      <Menu>Filmes</Menu>
      <Menu>Minha lista</Menu>
    </Container>
  );
}
