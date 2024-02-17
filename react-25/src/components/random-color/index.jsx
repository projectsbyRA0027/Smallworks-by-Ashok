import {useEffect,useState} from "react";

export default function RandomColor(){
    const [typeOfColor,setTypeOfColor] = useState("hex");
    const [color,setColor] = useState("#000000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    function handleCreateRandomHexColor(){
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexcolor = "#";

        for(let i=0 ;i<6;i++ ){
            hexcolor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexcolor);
    }

    function handleCreateRandomRgbColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g}),${b}`);
    }

    useEffect(()=>{
        if(typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor])

    return(
        <div
        style={{width:"100vw",
                height:"100vh",
                background:color,
            }}
        >
          <button onClick={()=>setTypeOfColor("hex")}>Create Hex Color</button>
          <button onClick={()=>setTypeOfColor()}>Create RGB </button>
          <button onClick={
                typeOfColor == "hex"
                ?handleCreateRandomRgbColor
                :handleCreateRandomRgbColor
          }
          >Generate</button>
        <div
        style={{
            display:"flex",
            justifyContent:"Center",
            color:"#fff",
            fontSize:"60px",
            marginTop:"50px",
            flexDirection:"column",
            gap : '20px'
        }}>
         <h3>{typeOfColor === "rgb" ? "RGB Color":"HEX Color"}</h3>
         <h1>{color}</h1>    
        </div>  
        </div>
    );
}