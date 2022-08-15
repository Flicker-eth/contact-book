import React from "react";

class Addcontact extends React.Component{
  state ={
      name:"",
      email:"",
  };
 add = (e) => {
     e.preventDefault(); //prevent it from refreshing
     if(this.state.name === "" || this.state.email === ""){
         alert("all the field are empty");
         return;
     }
     this.props.addcontactHandler(this.state);
     this.setState({name:"",email: ""});
     
 }

 render(){
   return  (<div className="ui main">
       <h2>ADD CONTACT</h2>
       <form className="ui form"    onSubmit={this.add}>
           <div className="field">
               <label>NAME</label>
               <input type="text" name="name" placeholder="Name"  
               
               value={this.state.name}
               onChange={(e) => this.setState({name: e.target.value}) //these are used to send the class state name email Flicker.

               }/>
           </div>
           <div className="field">
               <label>Email</label>
               <input type="text" name="email" placeholder="Email"
              value={this.state.email}
               onChange={(e) => this.setState({email: e.target.value})

               }
                   
               />
           </div>
           <button className="ui button blue"> ADD</button>
       </form>

     </div>)
 };
};

export default Addcontact;