import {useState} from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator(){
    const [qrCode,setQrCode] = useState("");
    const [input,setInput] = useState("");

    function handleGenerateQrCode(){
        setQrCode(input);
        setInput('')
    }

    return(
        <div>
         <h1>QR code Generator</h1>
         <div>
            <input type="text"
            onChange={(e)=>setInput(e.target.value)}
            name="qr-code"
            value={input}
            placeholder="Enter your value" />
            <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQrCode}
            >
                Generate
            </button>    
         </div>
         <div>
            <QRCode id="qr-code-value" value={qrCode} size={500} bgColor="#fff"/>
         </div>
        </div>
    );
}