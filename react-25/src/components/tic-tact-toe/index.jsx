// 0 1 2
// 3 4 5
// 6 7 8

import { useEffect,useState } from "react";

import "./styles.css";

function Squre({value,onClick}){
    return(
        <button onClick={onClick} className="squre">
            {value}
        </button>
    );
}

export default function TicTacToe(){
    const [squres,setSqures] = useState(Array(9).fill(""));
    const [isXturn,setISXTurn] = useState(true);
    const [status,setstatus] = useState("");


function getWinner(squares){
    const winningPatters = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
    ];

    for(let i=0; i<winningPatters.length;i++){
       const [x,y,z] = winningPatters[i];
       
       if(
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
       ){
        return squares[x];
       }
    }

    return null;
}

function handleClick(getCurrentSqure){
    let cpySqures = [...squres];
    if (getWinner(cpySqures)|| cpySqures[getCurrentSqure]) return;
    cpySqures[getCurrentSqure] = isXturn ? "X" : "O";
    setISXTurn(!isXturn);
    setSqures(cpySqures);
    
}

function handleRestart(){
    setISXTurn(true);
    setSqures(Array(9).fill(""));
}

useEffect(() =>{
    if(!getWinner(squres) && squres.every((item)=>item !== "")){
        setstatus(`This is a draw ! please restart`);
    }else if(getWinner(squres)){
        setstatus(`Winner is ${getWinner(squres)}.please restart`);
    }else{
        setstatus(`next player is ${isXturn ? "X" : "O"}`);
    }
},[squres,isXturn]);

console.log(squres);

return(
    <div className="tic-tac-toe-container">
        <div className="row">
            <Squre value={squres[0]} onClick={()=>handleClick(0)} />
            <Squre value={squres[1]} onClick={()=>handleClick(1)} />
            <Squre value={squres[2]} onClick={()=>handleClick(2)} />
        </div>
        <div className="row">
            <Squre value={squres[3]} onClick={()=>handleClick(3)} />
            <Squre value={squres[4]} onClick={()=>handleClick(4)} />
            <Squre value={squres[5]} onClick={()=>handleClick(5)} />
        </div>
        <div className="row">
            <Squre value={squres[6]} onClick={()=>handleClick(6)} />
            <Squre value={squres[7]} onClick={()=>handleClick(7)} />
            <Squre value={squres[8]} onClick={()=>handleClick(8)} />
        </div>
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart!</button>
    </div>
);
}

