import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import TagViewer from './TagViewer';
import ShowDetailsModal from './ShowDetails';
import AddShowModal from './AddShowModal';
import ErrorImage from '../resources/images/ErrorImage.jpg';

class ShowInfoCard extends Component{

    constructor(props){
        super();
        this.state={detailsModalVisible:false, editShowModalVisible: false}
    }

    openEditShowModal = (showInfo)=>{
        this.props.eventHandlers.openEditCustomShowModalHandler(showInfo);
    }

    showDetailsModal = (showInfo) => {
        this.props.eventHandlers.openDetailsModalHandler(showInfo);
    };

    addDefaultImage(event){
        event.target.src = ErrorImage;
    }

    render(){

        const {readOnly, showInfo, deleteCustomShowHandler, updateCustomShowHandler} = this.props;

        return(
            <div className="showInfoCard">

               <div className="ImageContainer">
               {!readOnly && <div className="CustomShowButtonPanel">
                               <button className="btn" onClick={this.openEditShowModal.bind(this, showInfo)}>
                                   <span className="glyphicon glyphicon-pencil"></span>
                               </button>
                               <button className="btn" onClick={() => deleteCustomShowHandler(showInfo)}>
                                    <span className="glyphicon glyphicon-remove"></span>
                               </button>
                              </div>}
                <img className="CardImage" src={showInfo.image ? showInfo.image.medium : ErrorImage} alt={showInfo.name} onError={this.addDefaultImage}/>
               </div>
               <a href="#" onClick={this.showDetailsModal.bind(this,showInfo)}>{showInfo.name}</a>
               <StarRatings
                         rating={parseInt(showInfo.rating ? showInfo.rating.average : 0) > 0 ? showInfo.rating.average/2 : 0}
                         starRatedColor="blue"
                         starDimension="20px"
                         starSpacing="5px"
                         numberOfStars={5}
                         name='showRating'
               />
               <TagViewer values={showInfo.genres}></TagViewer>
           </div>
       );
    }


}


export default ShowInfoCard;