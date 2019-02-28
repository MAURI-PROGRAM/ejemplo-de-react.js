import React, { Component } from 'react';
class Formtarea extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        };
        this.handleImput = this.handleImput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleImput(e){
        const {value,name}=e.target;
        console.log(value,name)
        this.setState({
            [name]:value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        this.props.onAddTareas(this.state);
        console.log('sending the data...');
    }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input type="text" name="title" onChange={this.handleImput} className="form-control" placeholder="Titulo" />
                    </div>
                    <div className="form-group">
                    <input type="text" name="responsible" onChange={this.handleImput} className="form-control" placeholder="Responsable" />
                    </div>
                    <div className="form-group">
                    <input type="text" name="description" onChange={this.handleImput} className="form-control" placeholder="Descripcion" />
                    </div>
                    <div className="form-group">
                    <select name="priority" onChange={this.handleImput} className="form-control" value={this.state.priority} >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}
export default Formtarea;