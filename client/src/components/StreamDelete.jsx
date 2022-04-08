import  Modal  from "./Modal";
import React, { useState, useEffect } from 'react';
import { Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getStream, deleteStream } from  "../services/apiService";

const StreamDelete = () =>{

    const [isOpen, setIsOpen] = useState(true);
    const params = useParams();
    const id = params.id;
    const stream = useSelector((state) => state.data.stream);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getStream(id));
    }, [id, dispatch]);
  
    const deleteThisStream = () =>{
            dispatch(deleteStream(id));     
    }

    return(
        <Container className="container-2">
            <Modal className ="modal" open ={isOpen} onClose = {() => setIsOpen(false)} deleteThisStream = {deleteThisStream}>
            <h2 className="stream-delete" style={{marginTop:"-10px", marginLeft:"20px"}}>Delete Stream</h2>
            <p className="parag-modal" style={{marginTop:"30px", fontSize:"17px"}}>Are you sure that you want to delete the stream with title: {stream.title}</p>
            </Modal>
        </Container>
            
            
    )
}

export default StreamDelete;