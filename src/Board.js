import React from 'react';
import Piece from './Piece';
import Glam from 'glamorous';

const BoardPieces = Glam.div ({
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    padding:'16px',
    height: '100vh',
})

const Board = [
    'X', 'X', 'X',
    ' ', ' ', ' ',
    '0', '0', '0',
]

export default () => (
    <BoardPieces>
        <div className="Row">
            <Piece type={Board[0]} />
            <Piece type={Board[1]} />
            <Piece type={Board[2]} />
        </div>
        <div className="Row">
            <Piece type={Board[3]} />
            <Piece type={Board[4]} />
            <Piece type={Board[5]} />
        </div>
        <div className="Row">
            <Piece type={Board[6]} />
            <Piece type={Board[7]} />
            <Piece type={Board[8]} />
        </div>
    </BoardPieces>
)



