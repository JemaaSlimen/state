//ck state
import React, { Component } from 'react'

export class Social extends Component {
 
constructor(props) {
  super(props)

  this.state = {
    // shows: 'true',
   count :0,
    Person:[],
// Person :[
//        fullName, bio ,imgSrc, profession]
    

    
    
   } 
     
    
} 



  //  Person : { fullName : "will",
    // bio: "go",
    // imgSrc: "bc",
    // profession:"phar"
  // },
    // shows: 'true'  
  //  }

// componentDidMount(){
//   setInterval(() => {
//    this.setState({count:this.state.count+1}); 
//   },2000 );
// }


componentDidMount(){
  setInterval(() => {
   this.setState({count:this.state.count+1}); 
  },2000 );
}

// componentDidUpdate(){

// }
// //WARNING! To be deprecated in React v17. Use componentDidMount instead.
// componentWillMount() {
  
// }

  render() {
    return (
      <div>
       <h1>{this.state.count }</h1> 
       {this.props.chidren} 
       <h1  person={this.state.Person} >
          {this.props.fullName}
       </h1>
      
      
      </div>
    )
  }
}


export default Social


export const Person  = () => {
  return (
    <div>
      
    </div>
  )
}
