import React from 'react';
import HorizontalShowList from './HorizontalShowList';

function ShowPanel(props){

    const {showList, listHeader, readOnly, addShowHandler, deleteCustomShowHandler, updateCustomShowHandler, eventHandlers} = props;

    return(
        <div>
            <div className="ListHeader">
                <h2>{listHeader}</h2>
                {!readOnly &&
                                <div className="ButtonPanel">
                                     <button className="btn-md btn-primary" onClick={addShowHandler}>
                                        <span className="glyphicon glyphicon-plus AddCustomShowBtn"></span>
                                     </button>
                                </div>
                }
            </div>
            {showList.length > 0 &&
                <HorizontalShowList shows={showList} readOnly={readOnly} eventHandlers={eventHandlers} deleteCustomShowHandler={deleteCustomShowHandler} updateCustomShowHandler={updateCustomShowHandler}></HorizontalShowList>
            }
            {
                showList.length === 0 &&
                <div>No items to display</div>
            }
        </div>
    );
}

export default ShowPanel;