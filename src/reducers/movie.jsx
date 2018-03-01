const initialState = {
  movies: [],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const movie = action.movie;
      if (state.movies.findIndex(item => item.id === movie.id) === -1) {
        return { ...state, movies: [ ...state.movies, movie] };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default MovieReducer;
