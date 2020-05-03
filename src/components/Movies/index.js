import React from "react";

import {
  Container,
  Label,
  MovieScroll,
  MovieCard,
  MoviePoster
} from "./styles";

export default function Movies({ label, item }) {
  return (
    <Container>
      <Label>{label}</Label>

      <MovieScroll horizontal>
        {item.map((movie, item) => {
          return (
            <MovieCard key={String(item)}>
              <MoviePoster resizeMode="cover" source={movie} />
            </MovieCard>
          );
        })}
      </MovieScroll>
    </Container>
  );
}
