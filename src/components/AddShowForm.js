import React from 'react';
import Options from '../resources/js/Options';

function AddShowForm(props){

    const showInfo = props.showInfo || {};

    const onNameChange = (event) => {
        props.handlers.nameChangeHandler(event.target.value);
    }

    const onLanguageChange = (event) => {
        props.handlers.languageChangeHandler(event.target.value);
    }

    const onOfficialSiteChange = (event) => {
        props.handlers.officialSiteChangeHandler(event.target.value);
    }

    const onStatusChange = (event) => {
        props.handlers.statusChangeHandler(event.target.value);
    }

    return(
        <div>
            <form>
            <div className="form-group">
                <label htmlFor="showName">Name</label>
                <input type="text" className="form-control" id="showName" onChange={onNameChange} placeholder="Name of the show" value={showInfo.name}/>
              </div>
              <div className="form-group">
                <label htmlFor="officialSite">Official Site</label>
                <input type="text" className="form-control" id="officialSite" onChange={onOfficialSiteChange} value={showInfo.officialSite} placeholder="http://www.cbs.com/shows/under-the-dome/"/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="language">Language</label>
                  <input type="email" className="form-control" id="language" onChange={onLanguageChange} value={showInfo.language} placeholder="Language"/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="status">Status</label>
                  <select id="status" className="form-control" onChange={onStatusChange} >
                    {Options.availableStatus.map((status) =>
                        <option key={status.statusKey}>{status.statusValue}</option>
                    )}
                  </select>
                </div>
              </div>
            </form>
        </div>
    );

}

export default AddShowForm;