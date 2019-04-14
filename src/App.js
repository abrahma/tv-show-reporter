import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import MainContent from './components/MainContent';
import CustomShowsData from './resources/json/customShows.json';
import axios from 'axios';
import './resources/styles/App.css';

class App extends Component {

    constructor(){
        super();
        this.state={"allShows":[],
                    "recentSearch":[],
                    "customShows": []
        };
    }

  updateRecentSearch(data){
    this.setState({...this.state, "recentSearch": data});
  }

  saveCustomShow(data){
    this.setState({...this.state, "customShows" : [data, ...this.state.customShows]})
  }

  updateCustomShow(data){
    let newCustomShowArray = [...this.state.customShows];
    let i = newCustomShowArray.findIndex(show => show.id === data.id);
    newCustomShowArray.splice(i,1,data);
    this.setState({...this.state, "customShows" : newCustomShowArray})
  }

  deleteCustomShow(data){
    let newCustomShow = this.state.customShows.filter(function(show){
        return data.id !== show.id;
    });
    this.setState({...this.state, "customShows" : newCustomShow})
  }

  componentDidMount(){
    axios.get("http://api.tvmaze.com/shows")
         .then(res => {
           this.setState({...this.state, "allShows": res.data})
    });

    this.setState({...this.state, "customShows" : CustomShowsData});
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
            <SearchBox onSearchUpdate={this.updateRecentSearch.bind(this)}/>
        </div>
        <MainContent recentSearch={this.state.recentSearch} allShows={this.state.allShows} customShows={this.state.customShows} saveCustomShowHandler={this.saveCustomShow.bind(this)} deleteCustomShowHandler={this.deleteCustomShow.bind(this)} updateCustomShowHandler={this.updateCustomShow.bind(this)}></MainContent>
      </div>
    );
  }
}

export default App;
