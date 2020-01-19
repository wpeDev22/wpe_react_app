import React, { Component } from 'react'
import '../App.css';
class FormSubmit extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "React CRUD Application",
            action: 0,
            index: '',
            datas:[]
        }
    }
    componentDidMount(){
        this.refs.name.focus();
    }
    fSubmit =(e)=>{
        e.preventDefault();
        let datas=this.state.datas;
        let name=this.refs.name.value;
        let address= this.refs.address.value;
      
        let data={
            name,address
        }
        datas.push(data);
        this.setState({
            datas: datas,           
        });          

        this.refs.name.focus();  

    }  
    
    render(){
        let datas=this.state.datas;
        return(
            <div className="App">                
               <h3> {this.state.title}</h3>
               <form rel='myForm1' className='myForm'>
                   <input type='text' ref='name' placeholder='your name' className='formField'/><br/>
                   <input type='text' ref='address' placeholder='your address' className='formField'/>
                   <br/>
                   <button onClick={this.fSubmit} className='myButton' > Submit</button>                
               </form>
               <pre>
                   {datas.map((data,i)=>
                   <li key={i} className='myList'>
                       {i+1}Name:{data.name}    Address: {data.address}                      
                </li>
                   )
                   }
               </pre>
            </div>
        )
    }
}
export default FormSubmit
