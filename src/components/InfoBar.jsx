import React from 'react';

const InfoBar = (props) => {
    let InfoItems = props.items.map((item) => {
        return (
        <div className= "bg-light">
             <li>{item.value}</li>
        
        </div>
           
        )
    });

    return (
        <div>
            <ul>{InfoItems}</ul> 
        </div>
       
    );
        
    
}

export default InfoBar;