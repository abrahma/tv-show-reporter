import React, {Component} from 'react';
import Modal from 'react-modal';
import AddShowForm from './AddShowForm';
import CustomShowsData from '../resources/json/customShows.json';
import  '../resources/styles/AddShowModal.css';

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.75)';

class AddShowModal extends Component{

    constructor(props){
        super(props);
        this.state = props.showInfo ? props.showInfo: {...CustomShowsData[0]}
    }

    nameChangeHandler = (name) => {
        this.setState({...this.state, "name": name});
    }

    languageChangeHandler= (lang) => {
        this.setState({...this.state, "language": lang});
    }

    officialSiteChangeHandler= (officialSite) => {
        this.setState({...this.state, "officialSite": officialSite});
    }

    statusChangeHandler= (status) => {
        this.setState({...this.state, "status": status});
    }

    save = () => {
        var obj = {...this.state};
        if(!this.props.editMode){
            obj.id= this.generateId();
        }
        this.props.saveHandler(obj);
        this.props.closeModal();
    }

    generateId(){
        const min = 1;
        const max = 100;
        return parseInt(min + Math.random() * (max - min));
    }
    render(){

        const {modalIsOpen, afterOpenModal, closeModal} = this.props;

        const handlers = {
            nameChangeHandler: this.nameChangeHandler.bind(this),
            languageChangeHandler: this.languageChangeHandler.bind(this),
            officialSiteChangeHandler: this.officialSiteChangeHandler.bind(this),
            statusChangeHandler: this.statusChangeHandler.bind(this)
        }

        return (
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Add Show">

              <h4>{this.props.editMode ? "Edit Show": "Add Show"}</h4>

              <AddShowForm handlers={handlers} showInfo={this.state}></AddShowForm>

              <div className="Footer">
                <button onClick={this.save.bind(this)} className="CancelButton btn btn-primary">Save</button>
                <button onClick={closeModal} className="CancelButton">Cancel</button>
              </div>
            </Modal>
        );
    }

}

export default AddShowModal;