import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/Navegacion'
import Formtarea from './componentes/Formtarea'
import {tareas} from './tareas.json'
class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas
    };
    this.handleAddTareas=this.handleAddTareas.bind(this);

  }

  handleAddTareas(todo){
  this.setState({
    tareas:[...this.state.tareas,todo]
  })
  }
  removerTarea(index){
    if(window.confirm('Estas seguro de que quieres eliminarlo')){
      this.setState({
        tareas:this.state.tareas.filter((e,i)=>{
          return i!== index
        })
      })
    }
    
  }
  render() {
    const tareas = this.state.tareas.map((tareas,i)=>{
      return(
        <div className="col-md-4">
          <div clasName="card mt-4">
            <div className="card-header">
              <h3>{tareas.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
              {tareas.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{tareas.description}</p>
              <p><mark>{tareas.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removerTarea.bind(this,i)}>
                Borrar
              </button>
              
            </div>
          </div>
          
        </div>
      )
    })
    console.log(this.state.tareas);
    return (
      <div className="App">
        <Navegacion titulo="Tareas" cuenta={this.state.tareas.length}/>
        <div className="container">
          <div className="row mt-4">
          <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <Formtarea onAddTareas={this.handleAddTareas}/>
            </div>

          <div className="col-md-8">
              <div className="row">
              {tareas}
              </div>
            </div>

          </div>
        </div>

    
      </div>
    );
  }
}

export default App;
