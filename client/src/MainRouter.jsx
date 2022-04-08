import React from "react";
import { Route, Routes } from 'react-router-dom';
import StreamDelete from './components/StreamDelete';
import StreamEdit from './components/StreamEdit';
import StreamShow from './components/StreamShow';
import StreamCreate from './components/StreamCreate';
import StreamList from './components/StreamList';



const MainRouter = () => {

    return (
        <Routes>
        <Route path= "/" element={<StreamList/>} />
        <Route path="/streams/show/:id" element={<StreamShow/>} />
        <Route exact path="/stream/create" element={<StreamCreate/>} />
        <Route exact path="/streams/edit/:id" element={<StreamEdit/>} />
        <Route exact path="/streams/delete/:id" element={<StreamDelete/>} />
        </Routes>
    );
}

export default MainRouter;