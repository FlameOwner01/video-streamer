import { list, remove, update, insert } from "../services/apiService.jsx";
import { useState, useEffect } from "react";



const StreamList = () =>{

    const [streams, setStreams] = useState([]);

    /* useEffect(() => {
        list("", data =>{
            setStreams([...streams, data]);
        });
        console.log(streams);
    }, []); */
    
    
    


    return(
        <div className="stream-list">
                <span></span>
        </div>
    )
}

export default StreamList;