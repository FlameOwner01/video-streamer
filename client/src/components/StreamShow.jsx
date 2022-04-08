import { ReactFlvPlayer } from 'react-flv-player'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStream } from '../services/apiService';
import { useParams } from 'react-router-dom';
import { Container } from 'semantic-ui-react';


const StreamShow = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const url = `http://localhost:8000/live/${id}.flv`;
    const stream = useSelector((state) => state.data.stream)

   useEffect(()=>{
      dispatch(getStream(id));
   }, [id, dispatch]);
   

   

    const title = useSelector(state => state.data.title);
    const description = useSelector(state => state.data.description);

    return (
        <Container className='container-2 player'>
            <div className='player'> 
            <div className="video-player">
            <ReactFlvPlayer
            
            type="flv"
            url={url}
            heigh="100%"
            width="80%"
           
        />
            </div>
                <h2 style={{marginTop:"-7px",marginLeft:"33%", color:"yellowgreen"}}>{stream.title}</h2>
                <h4 style={{ color:"yellowgreen", marginLeft:"28%"}}>{stream.description}</h4>
            </div>  
        </Container>
    );
};
export default StreamShow;