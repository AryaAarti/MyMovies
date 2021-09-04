export const ADD_MOVIES='ADD_MOVIES'
export const ADD_TO_FAV='ADD_TO_FAV'
export const REM_FROM_FAV='REM_FROM_FAV'
export const SET_FAV ="SET_FAV"
export function addMovies(movies){
   return{
    type: ADD_MOVIES,
    movies
   }
}
export function addFav(movie){
    return{
        type:ADD_TO_FAV,
        movie
    }
}
export function remFav(movie){
    return{
        type: REM_FROM_FAV,
        movie
    }
}
export function setFav(val){
    return{
        type: SET_FAV,
        val
    }
}


