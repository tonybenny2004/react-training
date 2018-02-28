const initialState = {
  movies: [],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const movie = action.movie;
      return { ...state, movies: [ ...state.movies, movie] };
    default:
      return state;
  }
};

export default MovieReducer;
