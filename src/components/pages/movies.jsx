import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movies/movie-item';

class Movies extends React.Component {
  componentDidMount() {
    this.props.addNewMovie({
      id: 1,
      name: 'Iron Man'
    });
  }

  render() {
    const movies = this.props.movies;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h1>Movies</h1>
        </div>
        <div className="panel-body">
          {
            movies.map((item, index) => (
              <MovieItem key={index} item={item} />
            ))
          }
        </div>
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  addNewMovie: PropTypes.func
};

export default Movies;
