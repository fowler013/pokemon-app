import React from 'react';
import PokemonInfo from './PokemonInfo';



const Comment = (props) => {
    return ( // remember you can only create one div as the parent so try to create a fragment//
        <div className="Comment">
          <PokemonInfo 
            user = {props.user}
          />
            <div className="Comment-message text-light">
                {props.message}
            </div>

        </div> // within Pokemon Info and put infor on avatar image and pokemon name and type//
    )
}

export default Comment; // REMEMBERR TO ADD DEFAULT//