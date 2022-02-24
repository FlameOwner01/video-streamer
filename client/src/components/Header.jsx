import React from 'react';
import StreamDelete from './StreamDelete';
import StreamEdit from './StreamEdit';
import StreamShow from './StreamShow';
import StreamCreate from './StreamCreate';
import StreamList from './StreamList';
import GoogleAuth from "./GoogleAuth";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const style = {
    listStyleType: 'none',
}

const Header = () => {

  

    return(
<Router>
      <div className='container'>
        <nav className='navigation'>
          <ul className='list'>
            <li style={style}>
              <Link to="/"  className="li-elem">Stream List</Link>
            </li>
            </ul>
            {/* 
            <li style={style}>
              <Link to="/streams/new">Stream Create</Link>
            </li>
            <li style={style}>
              <Link to="/streams/edit/:id">Stream Edit</Link>
            </li>
            <li style={style}>
              <Link to="/streams/delete/:id">Stream Delete</Link>
            </li>
            <li style={style}>
              <Link to="/streams/:id">Stream Show</Link>
            </li> */}
            <GoogleAuth></GoogleAuth>
            <h2 className='streamer'>Streamer</h2>
          
        </nav>
            
        <Routes>
          <Route exact path ="/" element = {<StreamList/>}/>
          
          <Route exact path ="/streams/new" element = {<StreamCreate/>} />
          
          <Route exact path ="/streams/edit/:id" element = {<StreamEdit/>} />
          
          <Route exact path ="/streams/delete/:id" element = {<StreamDelete/>} />
          
          <Route exact path ="/streams/:id" element = {<StreamShow/>} />
           
        </Routes>
      </div>
    </Router>
    )
}


export default Header;