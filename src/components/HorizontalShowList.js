import React from 'react';
import ShowInfoCard from './ShowInfoCard';


function HorizontalShowList(props){
    const {shows, readOnly, deleteCustomShowHandler, updateCustomShowHandler, eventHandlers} = props;
    return(
            <div className="horizontalList">
                {shows.map((showInfo) =>
                    <ShowInfoCard key={showInfo.id} showInfo={showInfo} readOnly={readOnly} eventHandlers={eventHandlers} deleteCustomShowHandler={deleteCustomShowHandler} updateCustomShowHandler={updateCustomShowHandler}></ShowInfoCard>)
                }
            </div>);
}

export default HorizontalShowList;