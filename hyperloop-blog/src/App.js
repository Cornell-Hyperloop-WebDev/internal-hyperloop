import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay.jsx';
import './App.css';
import './css/blog.css';
import Firebase from './config.js';
import 'firebase/database';

class App extends Component {
  constructor(props){
    super(props);
     
    this.app = Firebase;
    this.database = this.app.database();
  }
 
  render(){
  return (
    <div className="App">
      <header>
          <h1>Cornell Hyperloop Blog</h1>
      </header>

      
      <ThreadDisplay database={this.app.database} />
      
      
    </div>
  );
  }
}

export default App;
