const initialDayState = {
  favoritesId: [],
};

const favouritesReducer = (state = initialDayState, action) => {
  switch (action.type) {
    case 'FLAG_FAVORITES':
      if (state.favoritesId.map(o => o.id).includes(action.favourites.id)) {
        console.log('🚀 ~ action.favourites.id', action.favourites.id)
        console.log('🚀 ~ state.favoritesId', state.favoritesId)
        return {
          ...state,
          favoritesId: state.favoritesId.filter(e => e.id !== action.favourites.id),
        }
      }

      return {
        ...state,
        favoritesId: [
          ...state.favoritesId,
          {
            id: action.favourites.id,
            title: action.favourites.title,
            media: {
              photo: action.favourites.photo,
              video: action.favourites.video,
            },
          }],
      };
    default:
      return state;
  }
}

export { favouritesReducer }
