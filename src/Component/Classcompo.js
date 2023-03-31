import React, { Component } from 'react'

 class Classcompo extends Component {
   state={
    name:" ",
    dept:" ",
    Rating: "",
    
    data:[]
   }
   handlechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    // this.setState({[e.target.dept]:e.target.value})
   }
   handlesubmit=(e)=>{
    e.preventDefault();
    const objdata={
      name:this.state.name,
      dept:this.state.dept,
      Rating:this.state.Rating
    }
    const arr =this.state.data;
    arr.push(objdata);
    this.setState({[this.state.data]:arr})
    // console.log(this.state.name);
    // console.log(this.state.data)
   }
  render() {
    return (
      <>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form>
        <label htmlFor='name' className='labelforinput'>name:</label>
        <input type="text" name="name" id="" value={this.state.name} className="inputforstyles" onChange={this.handlechange}></input> <br></br>
        <label  htmlFor='department' className='labelforinput'>department:</label>
        <input type="text"  name="dept"id="" value={this.state.dept} className="inputforstyles" onChange={this.handlechange}></input> <br></br>
        <label  htmlFor='Rating' className='labelforinput'>Rating:</label>
        <input type="number" name="Rating"  id="" value={this.state.Rating}className="inputforstyles" onChange={this.handlechange} ></input> <br></br>
        <button className='submittagstyles' onClick={this.handlesubmit}>submit</button>
      </form>
       <div className='box'>
        {
          this.state.data.map((item,index)=>{
            return(
              <div className='innerelements'><h2 key={index}><span>name:{item.name}| department:{item.dept}|Rating:{item.Rating}</span></h2></div>
            )
          })
        }

       </div>
      </>
    )

    
      
  }
}
     
  

export default Classcompo;