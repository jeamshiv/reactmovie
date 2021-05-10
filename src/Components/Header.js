import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component{





    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand" to="/">Movie List</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <form onSubmit={this.props.FormSubmit} className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" name="Search" placeholder="Search"
                value={this.props.Search} aria-label="Search" onChange={(e) =>this.props.changeHandler(e)}/>
                <Link to="/">
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </Link>
                
                </form>
            </div>
            </nav>
        )
    }
}
