import React, { Component } from 'react';
import axios from 'axios';
import CastInfoCard from './CastInfoCard';

class HorizontalCastList extends Component{

    constructor(props){
        super();
        this.showId = props.showId;
        this.state = {"castDetails":[]};
    }

    componentDidMount(props){
        axios.get("http://api.tvmaze.com/shows/"+this.showId+"/cast")
             .then(res => {
                   this.setState({"castDetails": res.data})
        });
    }

    render(){
        return(
                <div className="horizontalList">
                    {this.state.castDetails.map((castDetail) =>
                        <CastInfoCard key={castDetail.person.id} itemInfo={castDetail}></CastInfoCard>)
                    }
                </div>
        );
    }

}

export default HorizontalCastList;