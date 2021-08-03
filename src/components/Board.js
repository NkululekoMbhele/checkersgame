import React, { useState } from 'react';
import './Board.css';

import blackPiece from '../assets/black_piece.svg'
import whitePiece from '../assets/white_piece.svg'


let gameStateStartPiece = [
    {
        squares: [
            [1, 0],
            [3, 0],
            [5, 0],
            [7, 0],
            [0, 1],
            [2, 1],
            [4, 1],
            [6, 1],
            [1, 2],
            [3, 2],
            [5, 2],
            [7, 2],
        ]
    },
    {
        squares: [
            [0, 5],
            [2, 5],
            [4, 5],
            [6, 5],
            [1, 6],
            [3, 6],
            [5, 6],
            [7, 6],
            [0, 7],
            [2, 7],
            [4, 7],
            [6, 7],
        ]
    },

];



let initialState = [
    [1, 0, false], [3, 0, false], [5, 0, false], [7, 0, false],
    [0, 1, false], [2, 1, false], [4, 1, false], [6, 1, false],
    [1, 2, false], [3, 2, false], [5, 2, false], [7, 2, false],
    [0, 3, false], [2, 3, false], [4, 3, false], [6, 3, false],
    [1, 4, false], [3, 4, false], [5, 4, false], [7, 4, false],
    [0, 5, false], [2, 5, false], [4, 5, false], [6, 5, false],
    [1, 6, false], [3, 6, false], [5, 6, false], [7, 6, false],
    [0, 7, false], [2, 7, false], [4, 7, false], [6, 7, false],
]



const ranks = [
    {
        files: [
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
        ]
    },
    {
        files: [

            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
        ]
    },
    {
        files: [

            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
        ]
    },
    {
        files: [

            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
        ]
    },
    {
        files: [

            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
        ]
    },
    {
        files: [

            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
        ]
    },
    {
        files: [

            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
        ]
    },
    {
        files: [

            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
            {
                name: "a1",
                color: "white-square"
            },
            {
                name: "a1",
                color: "black-square"
            },
        ]
    },

]


function Board() {

    const [gameState, setGameState] = useState(initialState);

    function startGame() {
        for (let i = 0; i < initialState.length; i++) {
            for (let j = 0; j < gameStateStartPiece[0].squares.length; j++) {
                if (initialState[i][0] === gameStateStartPiece[0].squares[j][0] &&
                    initialState[i][1] === gameStateStartPiece[0].squares[j][1]
                ) {
                    initialState[i][2] = true
                }
            }
            for (let j = 0; j < gameStateStartPiece[0].squares.length; j++) {
                if (initialState[i][0] === gameStateStartPiece[1].squares[j][0] &&
                    initialState[i][1] === gameStateStartPiece[1].squares[j][1]
                ) {
                    initialState[i][2] = true
                }
            }

            console.log(initialState);


        }
    }

    return (
        <>
            <div className="game">
                <h1>Checkers Game</h1>

                <div className="board-box">
                    <div className="ranks-a">
                        {ranks.map((rank, i) => (
                            <div className="files-a" key={i}>
                                {rank.files.map((square, j) => (

                                    <div key={j} id="square" className={square.color}>
                                        {
                                            gameState.map((box, k) => (
                                                (box[0] === i && box[1] === j) &&
                                                <span key={k}>{`${i}${j} ${box[2]}`}</span>
                                            ))

                                        }

                                    </div>
                                )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={startGame}>Start Game</button>
            </div>
        </>
    );
}

export default Board;
