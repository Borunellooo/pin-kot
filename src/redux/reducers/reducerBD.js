const initialDayState = {
  loading: false,
  error: false,
  after: '',
  favoritesId: [],
  post: [],
};

const reducerPost = (state = initialDayState, action) => {
  switch (action.type) {
    case 'LOAD_POST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'REQUESTED_SUCCEEDED':
      return {
        ...state,
        loading: false,
        error: false,
        after: action.data.after,
        post: [ ...state.post, ...action.data.list ],
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

export { reducerPost }
