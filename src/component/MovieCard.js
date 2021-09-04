import React from 'react';
import { addFav, remFav } from '../action';

class MovieCard extends React.Component{
    handleFav = ()=>{
        const{movie}=this.props;
        this.props.dispatch(
            addFav(movie))
    }
    handleunFav=()=>{
        const{movie}=this.props;
        this.props.dispatch(
            remFav(movie))
    }
  
    render(){
        const{movie,isfav}=this.props;
       
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}></img>
                </div>
                <div className="right">
                    <div className="title">
                        {movie.Title}
                    </div>
                    <div className="plot">
                        {movie.Plot}
                    </div>
                    <div className="footer">
                        <div className="rating">
                            {movie.imdbRating}
                        </div>
                        { isfav ?  <button onClick={this.handleunFav} className="unfavourite-btn">Unfavourite</button>:<button onClick={this.handleFav} className="favourite-btn">Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
