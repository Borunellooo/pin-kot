export const LOAD_POST = 'LOAD_POST'
export const REQUESTED_SUCCEEDED = 'REQUESTED_SUCCEEDED'
export const LOAD_NEXT_PAGE = 'LOAD_NEXT_PAGE'
export const FLAG_FAVORITES = 'FLAG_FAVORITES'
export const REQUEST_ERROR = 'REQUEST_ERROR'

export const LoadPost = () => ({ type: LOAD_POST })
export const requestSuccess = data => ({ type: REQUESTED_SUCCEEDED, data })
export const LoadNextPage = () => ({ type: LOAD_NEXT_PAGE })
export const FlagFavourites = favourites => ({ type: FLAG_FAVORITES, favourites })
export const requestError = () => ({ type: REQUEST_ERROR })
