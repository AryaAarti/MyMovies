import React from "react";
import {data} from '../data';
import MovieCard  from "./MovieCard";
import Navbar from './Navbar';
import { addMovies,setFav } from "../action";
class App extends React.Component{
  componentDidMount(){
    this.props.store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();
    })
    this.props.store.dispatch(
     addMovies(data)
    );
    console.log("state",this.props.store.getState())
  
  }
  isMovieFav= (movie)=>{
    const{fav}=this.props.store.getState()
    const index=fav.indexOf(movie)
    if(index!==-1){
      return true
    }
    return false
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(
        setFav(val)
    )
}
  render(){
    const {list,fav,showFav}= this.props.store.getState();
    console.log("LIST",fav)
    const displaylist=showFav ? fav:list
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
      <div className="tabs">
        <div className={`tab ${showFav? '': 'action-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
        <div className={`tab ${showFav? 'action-tab':''}`} onClick={()=>this.onChangeTab(true)}>Favourite</div>
      </div>
      <div className="list">
        {displaylist.map((movie,index)=>(
          <MovieCard movie={movie} key={index} dispatch={this.props.store.dispatch} isfav={this.isMovieFav(movie)}/>
        ))}
      </div>
      {displaylist.length===0 ? <div className="no-movies">No Movies to display</div>:null}
    </div>
  
    </div>
  );
  }
}

export default App;
