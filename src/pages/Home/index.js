import React from "react";
import { StatusBar } from "react-native";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";

import { Container, Poster, Gradient } from "./styles";

import poster from "../../assets/poster.jpg";

import movie1 from "../../assets/movie1.jpg";
import movie2 from "../../assets/movie2.jpg";
import movie3 from "../../assets/movie3.jpg";
import movie4 from "../../assets/movie4.jpg";

export default function Home() {
  const movies = [movie1, movie2, movie3, movie4];

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Container>
        <Poster source={poster}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              "rgba(0,0,0,0.5)",
              "rgba(0,0,0,0.0)",
              "rgba(0,0,0,0.0)",
              "rgba(0,0,0,1)"
            ]}
          >
            <Header />
            <Hero />
          </Gradient>
        </Poster>

        <Movies label="Recomendados" item={movies} />
        <Movies label="Top 10" item={movies} />
      </Container>
    </>
  );
}
