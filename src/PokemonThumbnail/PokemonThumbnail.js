import React from 'react';
import styled from "styled-components";

const PokemonThumbnail = ( {id, name, image, type} ) => {

    const Thumb = styled.div
    `
        width: 10rem;
        background: #DCF5E1;
        padding: 1rem;
        margin: 1rem;
        border-radius: 5px;
        box-shadow: 10px 7px 5px #0003;
        text-align: center;
        font-weight: bold;
        color: #444;

        
        img {
            width: 100%;
            margin-top: 0.85rem;
        }
    `;
    const Infos = styled.div
    `
        width: 10rem;
        background: #DCF5E1;
        text-align: center;
        
    `;

    return (
        <Thumb>
            <small>#0{id}</small>
            <img src={image} alt={name} />
            <hr />
            <Infos className="number">
                <h3>{name}</h3>
            </Infos>
        </Thumb>
    )
}

export default PokemonThumbnail