import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MovieList extends Component {


    componentDidMount(){
        this.props.ShowList()        
    }



    render() {

            if (this.props.Movies.length=== 0){
                return (
                    <>
                        <div className="text-center mt-5">
                        <h1>No Movies Found Search another keywords!</h1>
                        </div>
                    </>
                )

            } else{
                return (
                  <div className="container-fluid my-4">
                    <div className="row slick">
                        {this.props.Movies.Search.map((Movie,index) =>
                            <div className="col-lg-3 col-md-4 mt-5" key={index}>
                                <div className="well text-center">
                                    <img src={Movie.Poster} alt="Poster" /> 
                                    <p style={{padding: "20px 0px", height: "16px", overflow: "hidden"}}>{Movie.Title}</p>
                                    <NavLink className="btn btn-info" to={`/MovieDetail/${Movie.imdbID}`}>Read More</NavLink>
                                </div>
                            </div>
                            )}
                    </div>
                    
                  </div>  
                )
            }
    }
}
