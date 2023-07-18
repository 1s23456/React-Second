import React from 'react';
import { Component } from 'react';


class FormClass extends Component{
              state = {
                            Name : ' ',
                            Dept : ' ',
                            Rating : ' ',
                            EmpData : []
              }
     changeHandle = (e)=>{
              this.setState({[e.target.name]:e.target.value})
              console.log(this.state.Name);
              console.log(this.state.Dept);
              console.log(this.state.Rating);
     }

     clickHandle = (e)=>{
              e.preventDefault()
              let newObj={
                            name : this.state.Name,
                            dept : this.state.Dept,
                            rating : this.state.Rating
              }
              this.state.EmpData.push(newObj);
              this.setState({EmpData : this.state.EmpData})
              console.log(this.state.EmpData);
     }
render(){
              return(
                            <>
                            <h1>Employee Feedback Form</h1>
                            <form>
                            <label htmlFor='name'>Name :  </label>
                            <input id='name'type='text' placeholder='Enter name' name='Name' value={this.state.Name} onChange={this.changeHandle} required/>
                          <br/>  <br/>   <br/>
                            <label htmlFor='dept'>Dept :  </label>
                            <input id='dept'type='text' placeholder='Enter Dept' name='Dept' value={this.state.Dept} onChange={this.changeHandle} required/>
                            <br/>  <br/>  <br/>
                            <label htmlFor='rating'>Rating :  </label>
                            <input id='rating' type='text' placeholder='Enter Rating' name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/>  <br/>  <br/>  <br/>
                            <button onClick={this.clickHandle}>Submit</button>
                            </form>
                            {this.state.EmpData.map((item,index) =>  {
                                          return(
                                                        <span className='main'>
                                                        <span>Name : {item.name} || Dept: {item.dept} || Rating: {item.rating}</span>
                                                        </span>
                                          )
                            })}
                            
                            </>
              )
}
}

export default FormClass;