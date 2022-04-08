
import { listStreams } from "../actions";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container, Header, List } from "semantic-ui-react";

const StreamList = () =>{
  const userId = useSelector((state) => state.auth.userId);
  const streams = useSelector((state) => state.data.streams);
  const stream = useSelector((state) => state.data.stream);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(listStreams());
}, [stream, dispatch]);



    return(
      <Container className="list-container" style={{height: "100%", width:"100%"}}>
        <Header as = "h1" content="Streams" style={{marginTop:"10px"}} className="green"/>
        {
            userId !== null &&(
              <button className="create-btn">
                <NavLink to="/stream/create" className="link">
                   Create New Stream
                </NavLink>
              </button>
  )
}
        <List divided verticalAlign="middle">
          {streams.map((stream) =>(
            <List.Item key = {stream.id}>
              <List.Content floated="left"  style ={{marginTop:"20px",marginLeft:"3%", padding:"5px"}}>
              <NavLink to ={`/streams/show/${stream.id}`}>
                  <button className = "title-btn" style={{width:"600px", height:"65px", textOverflow:"inherit", fontFamily:"cursive", color:"blue" }}><p>{stream.title}</p><p>{stream.description}</p></button>
                  </NavLink>
              {userId!== null && userId === stream.userId && (
              <Link to={`/streams/edit/${stream.id}`} className="ui primary button">
                  Edit
              </Link> 
              )}
               {userId!== null && userId === stream.userId && (
               <Link to={`/streams/delete/${stream.id}`} className="ui primary button">
               Delete
              </Link> 
               )}
              </List.Content>
            </List.Item>
          ))}
        </List>
       
      </Container>
        
    )
}

export default StreamList;