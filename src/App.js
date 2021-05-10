import './App.css';
import MovieList from './Components/MovieList';
import Header from './Components/Header';
import React, { Component } from 'react'
import axios from 'axios';
import MovieDetails from './Components/MovieDetails';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {


  constructor(props) {
    super(props)

    console.log(this.props.match);
  
    this.state = {
       Movies : [],
       Search : "Shivam",
       Details : []
    }
  }



  changeHandler = (e) => {
    if(e.target.name) {
        this.setState({
           Search : e.target.value
       });
    }        
}


FormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.ShowList();

    //alert(this.state.Search);
}


  ShowList = () =>{
    axios.get(`https://www.omdbapi.com?apikey=ea49aac1&s=${this.state.Search}`)
        .then(response =>{
            let Movies = response.data;
            console.log(Movies);
            this.setState({
                Movies
            });
        })
  }


  

  render() {
    return (<>

      

      <Router>

      <Header changeHandler={this.changeHandler} FormSubmit={this.FormSubmit} Search={this.state.Search}/>
        
      <Switch>

      
        <Route path="/MovieDetail/:imdbID" component={MovieDetails} />
          
    
      <Route path="/" exact>

        <MovieList Movies={this.state.Movies} ShowList={this.ShowList}/>
        {/* <MovieDetails Details={this.state.Details} MovieDetails={this.MovieDetails}/> */}

      </Route>

      
      </Switch>

      </Router>

      </>
    );
  }

}
