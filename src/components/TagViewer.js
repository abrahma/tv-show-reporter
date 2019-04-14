import React from 'react';


function TagViewer(props){
    const {values} = props;
    return(
        <div className="TagViewer">
            {values.length > 0 && values.map(value =>
                <span className="Tag" key={value}>{value}</span>
            )}

        </div>
    );
}

export default TagViewer;