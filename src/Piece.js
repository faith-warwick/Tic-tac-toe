import React from 'react';
import Glam from 'glamorous';

const PieceTitle = Glam.div ({
    fontSize: '150px',
    border: '2px solid',
    padding: '10px',
    minWidth: '200px',
    minHeight: '200px',
    textAlign: 'center',
    background: '#E8F5E9'
})

export default (props) => (
    <PieceTitle>
        {props.type}
    </PieceTitle>

)

