import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MovieDetails extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             Details : {

             }
        }
    }
    

      MovieDetails = () =>{
    axios.get(`https://www.omdbapi.com?apikey=ea49aac1&i=${this.props.match.params.imdbID}`)
    .then(response =>{
        let Details = response.data;
        console.log(Details);
        this.setState({
            Details
        });
    })
  }


    componentDidMount(){
        this.MovieDetails();
    }

    render() {
        return (
            <>
                <header className="masthead bg-info" style={{backgroundImage: `url(https://images.pexels.com/photos/255464/pexels-photo-255464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>{this.state.Details.Title}</h1>
                            <span className="subheading">{this.state.Details.Genre}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-4 text-center mb-5">

                            <img src={this.state.Details.Poster} alt="Movie Poster"/>
                            <div className="mt-4">
                            <button className="btn btn-primary">{this.state.Details.imdbRating}</button> &nbsp; &nbsp;
                            <button className="btn btn-info">ImdbVotes {this.state.Details.imdbVotes}</button>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <h2>{this.state.Details.Title} , &nbsp; Released : {this.state.Details.Released}</h2>
                            <h3 className="mt-3">Movie Runtime : {this.state.Details.Runtime}</h3>
                            <h5 className="mt-4">Actors Are :<br/> {this.state.Details.Actors}</h5>
                            <h5 className="mt-4">Director : <br /> {this.state.Details.Director}</h5>
                            <h5 className="mt-4">Writer : <br /> {this.state.Details.Writer}</h5>
                            <p className="mt-4">
                                About the Movie<br />
                                {this.state.Details.Plot}
                            </p>

                            <p className="extnal_value" style={{opacity: "0"}}>
                            https://www.imdb.com/title/{this.state.Details.imdbID}/
                            </p>


                            <div className="text-center">
                                <NavLink to="/"><button className="btn btn-warning">Home Page</button></NavLink> &nbsp;
                                <button  className="btn btn-success" id="external_link" data-toggle="tooltip" data-placement="bottom" title="External Link">View In IMDB Website</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
