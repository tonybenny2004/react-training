import { connect } from 'react-redux';
import Movies from '../components/pages/movies';
import { addNewMovie } from '../actions/movie';

const mapStateToProps = (state) => {
  return {
    movies: state.MovieReducer.movies,
  };
};

const mapDispatchToProps = {
  addNewMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
