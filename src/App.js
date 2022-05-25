import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={id:'',users:null}  
  }
  
  submitClick=(e)=>{
    e.preventDefault();
   /*fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.id}`)
    .then(
      (res)=>{res.json().then((res)=>{
        this.setState({users:res})
      })}
    )*/

    axios.get(`https://jsonplaceholder.typicode.com/todos/${this.state.id}`)
    .then(res=>{
      console.log(res);
      this.setState({users:res.data})
    })
  }

  handleId =(e)=>{
    this.setState({id:e.target.value})
    try{
      if(e.target.value==='') throw "is empty";
      else if(e.target.value>200 || e.target.value<1) throw "should be between 1 to 200";
      else document.getElementById("msg").innerHTML="";
    }
    catch(err){
      document.getElementById("msg").innerHTML="Id"+err;
    }
    /*if(e.target.value===""){
      document.getElementById("msg").innerHTML="Id is empty";
      }
    else if(e.target.value>200 || e.target.value<1){
      document.getElementById("msg").innerHTML="Id should be between 1 to 200";
    }
    else{
    document.getElementById("msg").innerHTML="";
    }*/

    
  }
 componentDidUpdate(){
    if(this.state.users!=null){
    document.getElementById("mydiv").innerHTML=
    "userId:"+this.state.users.userId+"<br/>"+
    "id:"+this.state.users.id+"<br/>"+
    "title:"+this.state.users.title+"<br/>"+
    "completed:"+this.state.users.completed;
  }}

  render() {
    return( 
      <div className="App">
        <h1>
          API data
        </h1>
        <form onSubmit={this.submitClick}>
          <input type="number" onChange={this.handleId}/>
          <input type="submit"/>
        </form> 
        <div id="mydiv"></div>
        <div id="msg">Id is empty</div>
      </div>

    )

  }
    

  }


export default App;
