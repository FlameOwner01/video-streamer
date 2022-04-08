import axios from "axios";
const apiUrl = "http://localhost:3001/streams";

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};


export const signIn = (userId) =>{
    return{
        type: "SING_IN",
        payload: userId
    }
} 

export const signOut = () =>{
    return{
        type:"SIGN_OUT"
    }
}

export const insertStream = (values) => async (dispatch) =>{
    try{
        const res = await axios.post(`${apiUrl}`, values, {headers} );
        dispatch({
            type:"INSERT_STREAM",
            payload: res.data
        });
    }catch(err){
        console.log(err);
    }
    
    
};

export const deleteStream = (id) => async (dispatch) =>{
    try{
        const res = await axios.delete(`${apiUrl}/${id}`, {headers});
        dispatch({
            type:"DELETE_STREAM",
            payload: res.data
        })
    }catch(err){
        console.log(err);
    }
};

export const editStream = (id, values) => async (dispatch) =>{
    try{
        const res = await axios.put(`${apiUrl}/${id}`,values, {headers});
        dispatch({
            type:"EDIT_STREAM",
            payload: res.data
        })
    }catch(err){
        console.log(err);
    }   
}

export const getStream = (id) => async (dispatch) =>{
    try{
        const res = await axios.get(`${apiUrl}/${id}`, {headers})
        dispatch({
            type:"GET_STREAM",
            payload: res.data
        })
    }catch(err){
        console.log(err);
    }
};

export const listStreams = () => async (dispatch) =>{
    try{
        const res = await axios.get(`${apiUrl}`, {headers});
        dispatch({
            type:"LIST_STREAMS",
            payload: res.data
        })
    }catch(err){
        console.log(err);
    }
};