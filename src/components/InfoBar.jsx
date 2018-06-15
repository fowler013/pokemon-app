import React from 'react';

const InfoBar = (props) => {
    let InfoItems = props.items.map((item, index) => {

        return (
        <div key={index} className= "bg-light">
             {`${item.name1} ${item.name2}`}
        </div>
           
        );
    });

    return (
        <div>
            <div>{InfoItems}</div> 
        </div>
       
    );
        
    
}

export default InfoBar;