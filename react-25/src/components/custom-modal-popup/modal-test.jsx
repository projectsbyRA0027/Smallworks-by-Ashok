import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest(){
    const [showModalPopup,setShowModalPopUp] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopUp(!showModalPopup);
    }

    function onClose(){
        setShowModalPopUp(false);
    }

    return(
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {showModalPopup && (
                <Modal
                id={"custom-id"}
                header={<h1>Customized Header</h1>}
                footer={<h1>Customized Footer</h1>}
                onClose={onClose}
                body={<div>Customized body</div>}
                />
            )}
        </div>
    );
}