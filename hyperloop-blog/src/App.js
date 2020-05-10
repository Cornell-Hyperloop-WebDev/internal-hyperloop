import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay.jsx';
import './App.css';
import './css/blog.css';
import firebase from 'firebase';
import Firebase from './config.js';
import 'firebase/database';
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class App extends Component {
  constructor(props){
    super(props);
     
    this.app = Firebase;
    this.database = this.app.database();
  }
  state={isSignedIn: false}
  uiConfig = {
    signInFlow: "redirect",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: true})
    })
  }
 
  render(){
  return (
    <div className="App">
      <header>
          <h1>Cornell Hyperloop Blog</h1>
          {this.state.isSignedIn ?  (
            <div id="signInContainer">
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={Firebase.auth()}
            />
            </div>
          ) : (
            <button id="logOutButton" onclick={()=>firebase.auth().signOut()}>Log Out</button>
          )
        
        
          }
      </header>

      
      <ThreadDisplay database={this.app.database} />
      
      
    </div>
  );
  }
}

export default App;
