import React, { Component } from 'react';
import ErrorImage from '../resources/images/ErrorImage.jpg';

class CastInfoCard extends Component{

    showDetailsModal = (castInfo) => {
            console.log(castInfo);
    };

    render(){

        const castInfo = this.props.itemInfo.person;
        return(
            <div className="CastInfoCard">
               <img className="CastCardImage" src={castInfo.image ? castInfo.image.medium : ErrorImage} alt={castInfo.name}/>
               <a className="CastCardName" href="#" onClick={this.showDetailsModal.bind(this,castInfo)}>{castInfo.name}</a>
            </div>
       );
    }


}



export default CastInfoCard;