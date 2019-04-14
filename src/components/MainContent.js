import React, {Component} from 'react';
import ShowPanel from './ShowPanel';
import AddShowModal from './AddShowModal';
import ShowDetailsModal from './ShowDetails';


class MainContent extends Component{

    constructor(){
        super();
        this.state = {
            newShowModalVisible : false,
            detailsModalVisible : false,
            showToView:{},
            editModeForCustomShow: false,
            showToUpdate: {}
        };
    }

    openEditCustomShowModal = (showInfo) => {
        this.setState({...this.state, showToUpdate: showInfo, editModeForCustomShow: true});
    }

    addShowHandler = ()=>{
        this.setState({...this.state, newShowModalVisible: true});
    }

    openModal() {
        this.setState({...this.state, newShowModalVisible: true});
    }


    closeModal() {
        this.setState({...this.state, newShowModalVisible: false});
    }

    closeDetailsModal = () =>{
        this.setState({...this.state, detailsModalVisible:false, showToView:{}});
    }

    openDetailsModal = (showInfo) =>{
        this.setState({...this.state, showToView: showInfo, detailsModalVisible:true});
    }

    closeEditShowModal = () =>{
        this.setState({...this.state, editModeForCustomShow:false, showToUpdate : {}});
    }

    render(){
        const {recentSearch, allShows, customShows, saveCustomShowHandler, deleteCustomShowHandler, updateCustomShowHandler} = this.props;

        const eventHandlers = {
            openDetailsModalHandler : this.openDetailsModal.bind(this),
            openEditCustomShowModalHandler : this.openEditCustomShowModal.bind(this),
        }

        return(
            <div className="MainContent">
                <ShowPanel listHeader="Recent Search" showList={recentSearch} readOnly={true} eventHandlers={eventHandlers}></ShowPanel>
                <ShowPanel listHeader="Custom Shows" showList={customShows} readOnly={false} eventHandlers={eventHandlers} addShowHandler={this.addShowHandler} deleteCustomShowHandler={deleteCustomShowHandler} updateCustomShowHandler={updateCustomShowHandler}></ShowPanel>
                <ShowPanel listHeader="All Shows" showList={allShows} readOnly={true} eventHandlers={eventHandlers} ></ShowPanel>
               {
                !this.state.editModeForCustomShow &&
                <AddShowModal modalIsOpen={this.state.newShowModalVisible} saveHandler={saveCustomShowHandler} closeModal={this.closeModal.bind(this)}/>
               }
               {
                this.state.editModeForCustomShow &&
                <AddShowModal editMode={this.state.editModeForCustomShow} showInfo={this.state.showToUpdate} modalIsOpen={this.state.editModeForCustomShow} saveHandler={updateCustomShowHandler} closeModal={this.closeEditShowModal.bind(this)}/>
               }
               {this.state.detailsModalVisible &&
                <ShowDetailsModal open={this.state.detailsModalVisible} closeModal={this.closeDetailsModal} details={this.state.showToView}></ShowDetailsModal>
               }
            </div>
        );
    }

}

export default MainContent;