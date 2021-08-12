import React, { Component } from 'react'
import Social from './comp1/Social';

export class App extends Component {

  state={
    shows: 'true',
  
    Person : [],

//  { 
//       fullName:"will",
//       bio:"go", 
//       imgSrc : "https://user.oc-static.com/files/6001_7000/6410.jpg",
//       profession:"doc"
//    } 
     


   }
  toggle = () => {
    this.setState({shows :!this.state.shows });
  }

  toggle = () => {
    this.setState({Person :!this.state.Person });
  }
  render() {
  
    return (
      <div>
       <button onClick={this.toggle} >{this.state.shows?"hide":"shows"} </button>
      {this.state.shows?  <Social/>:"show"}
      <hr/>
{/*       
    // fullName="will"
    // bio="go" 
    // imgSrc = "https://user.oc-static.com/files/6001_7000/6410.jpg"
    // profession="doc" 
     */}
    <button onClick={this.toggle} >{this.state.Person?"show":"Person"} </button>
    {this.state.Person?  <Social/>:"Person"} 
      
      </div>
    )
  }
}

export default App
