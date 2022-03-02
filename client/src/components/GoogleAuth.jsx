import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as AuthorizationAction from '../redux/module/Authorization.jsx';

const GoogleAuth = ({ dispatch, isSignedIn, userId }) => {
  
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState("");
    

    useEffect(() =>{
        const params = { 
            clientId: "211423637800-fv03d541uap1hqpggjkf65co4u5kmp3o.apps.googleusercontent.com",
            scope: "email",
        };
        

       function loading(){
        window.gapi.load("client:auth2", ()=>{
            window.gapi.client.init(params).then(()=>{
                setAuth(window.gapi.auth2.getAuthInstance());
                onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
            });
        });
        
       }
       loading();
    }, []);

    

    const onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            
            dispatch(
                AuthorizationAction.signIn(                    
                    window.gapi.auth2.getAuthInstance().currentUser.get().getId()),
                   setUser(window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName())
            );
        }else{
            dispatch(AuthorizationAction.signOut());
        }
    };


    const onSignInClick = () =>{
        auth.signIn();
    }

    const onSignOutClick = () => {
        auth.signOut();
    }

    const renderAuthButton = () =>{
        if(isSignedIn === null){
            return null;
        }else if (isSignedIn ){
            return(
                <div>
                    <span className="streamer-1">{user}</span>
                    <button className="sign-in" onClick={onSignOutClick}>Sign out</button>
                </div>
            );
        }else {
            return <button className="sign-in" onClick={onSignInClick}>Sign in</button>;
        }
    };

    return <div>{renderAuthButton()}</div>
}

const mapStateToProps = (state) =>{
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId};
}; 

export default connect(mapStateToProps)(GoogleAuth);