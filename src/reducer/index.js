import { ADD_MOVIES, ADD_TO_FAV, REM_FROM_FAV,SET_FAV } from "../action"
const intialState={
    list:[],
    fav:[],
    showFav:false
}
export default function movies( state = intialState,action){
//    if(action.type === ADD_MOVIES){
//        return{
//            ...state,
//            list:action.movies
//        }
//    }
//    return state;
   switch(action.type){
       case ADD_MOVIES:
        return{
            ...state,
            list:action.movies
        }
        case ADD_TO_FAV:
        return{
            ...state,
            fav:[action.movie,...state.fav]
        }
        case REM_FROM_FAV:
            const filteredArray= state.fav.filter(
                movie=> movie.title!==action.movie.title
            )
            return{
                ...state,
                fav:filteredArray
            }
        case SET_FAV:
            return{
                ...state,
                showFav:action.val
            }
        default:
            return state
    }
}

