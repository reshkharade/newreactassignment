import React from 'react';


const withClass = (props) => {  //functional based components
    
        return (
            <div className={props.classes}>
                {props.children}
            </div>

        );
    




}

export default withClass;