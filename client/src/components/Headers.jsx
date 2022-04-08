import React from 'react';
import GoogleAuth from "./GoogleAuth";
import { Link } from 'react-router-dom';


const style = {
    listStyleType: 'none',
}

const Headers = () => {

    return(
      <div className='container'>
        <nav className='navigation'>
          <ul className='list'>
            <li style={style}>
              <Link to="/"  className="li-elem">Stream List</Link>
            </li>
            
            </ul>
            <h2 className='streamer'>Streamer</h2>
            <GoogleAuth></GoogleAuth>
        </nav> 
        
      </div>
    )
}


export default Headers;