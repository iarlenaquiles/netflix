import React from "react";

import { Feather, Ionicons } from "@expo/vector-icons";

import {
  Container,
  Banner,
  Tags,
  MenuTag,
  Separator,
  MenuHero,
  Button,
  TextButton,
  Play,
  TextButtonPlay
} from "./styles";

import banner from "../../assets/banner.png";

export default function Hero() {
  return (
    <Container>
      <Banner resizeMode="contain" source={banner} />
      <Tags>
        <MenuTag>Envolvente</MenuTag>
        <Separator />
        <MenuTag>Empolgantes</MenuTag>
      </Tags>

      <MenuHero>
        <Button>
          <Feather name="plus" size={26} color="#fff" />
          <TextButton>Minha Lista</TextButton>
        </Button>
        <Play>
          <Ionicons name="ios-play" size={26} />
          <TextButtonPlay>Assistir</TextButtonPlay>
        </Play>
        <Button>
          <Feather name="info" size={26} color="#fff" />
          <TextButton>Saiba mais</TextButton>
        </Button>
      </MenuHero>
    </Container>
  );
}
