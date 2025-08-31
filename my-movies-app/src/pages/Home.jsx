import MovieList from "../components/MovieList";
import { movies } from "../movies";

function Home() {
  return <MovieList movies={movies} />;
}

export default Home;
