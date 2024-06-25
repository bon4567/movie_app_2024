
import React from "react" ;
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data : {
        data: { movies }
      }
    }  = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
   this.setState({ movies, isLoading: false }); 
   // setState에서 사용하고자 하는 변수(함수)가 선언된 변수와 이름이 
   // await axios.get('https://yts-proxy.now.sh/list_movies.json');
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">'Loading...' </span>
          </div>
          ) :(
            <div class="movies">
              {movies.map((movie) => (
            <Movie
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
            </div>
        )}
      </section>
    );
  }
}
export default Home;