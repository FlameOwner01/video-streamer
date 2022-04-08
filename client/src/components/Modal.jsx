import React from 'react'
import { useNavigate } from 'react-router-dom'

const CANCEL_STYLE = {
    float:"right", 
    marginTop:"90px",
    width:"100px", 
    height:"30px",
    border:"1px solid black",
    borderRadius:"10%",
    
}
const DELETE_STYLE = {
    float:"right", 
    marginTop:"90px",
    width:"100px", 
    height:"30px",
    border:"1px solid black",
    borderRadius:"10%",
    backgroundColor:"red",
    padding: "5px",
    marginLeft: "5px",
    color:"white"
}

const MODAL_STYLES = {
    position: "fixed",
    top:"55%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
    width:"80%",
    height:"200px",
    borderRadius:"2%",
    border:"1px solid black"
}

const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

 const Modal = ({open, children, onClose, deleteThisStream }) => {
    const navigate = useNavigate();
    if(!open) return null;
 
    const navigacija = () => {
        onClose(); 
        navigate(-1);
    }
    const navigacija1 = () => {
        deleteThisStream();
        onClose();
        navigate(-1);
    }
    

  return (
      <>
      <div style = {OVERLAY_STYLE} />
      <div className='modal-div' style={MODAL_STYLES}>
        <button className ="delete" style={DELETE_STYLE} onClick= {navigacija1}>Delete</button>
        <button className="cancel" onClick={navigacija} style={CANCEL_STYLE}>Cancel</button>
        {children}
    </div>
      </>
  
  )
}

export default Modal;
