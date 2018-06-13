import React from 'react';
import Avatar from './Avatar'

const PokemonInfo = (props) => {
    return (
        <div className="PokemonInfo">
            < Avatar
                user={props.user}
            />
            <div className=" PokemonInfo-name text-light">
                {props.user.name}
            </div>
        </div>
    );

} // REMEMBER TO **RETURN** SO IT WILL BE IN HTML//

export default PokemonInfo;