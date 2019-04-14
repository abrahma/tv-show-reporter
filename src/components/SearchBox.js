import React from 'react';
import axios from 'axios';


function SearchBox(props){

    const {onSearchUpdate} = props;

    const search = (event) => {
        if(event.keyCode === 13){
            axios.get("http://api.tvmaze.com/search/shows?q="+event.target.value)
                 .then(res => {
                        let searchResult = res.data.map((data) => {return data.show});
                        onSearchUpdate(searchResult);
            });
        }
    }

    return(
        <div>
            <span>Search:</span>
            <input type="text" className="SearchInput" onKeyUp={search}/>
        </div>
    );
}

export default SearchBox;