import React,{Component} from "react";

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            userInput:'',
            items:[]
        };
        this.onChange=this.onChange.bind(this);
        this.addTodo=this.addTodo.bind(this);
        this.renderTodos=this.renderTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    addTodo(event){
        event.preventDefault();//evite que la page se reload lorsqu'on appuie sur le bouton "add"
        this.setState({
            userInput:'',//permet que le le champ input se réinitialise
            items:[...this.state.items,this.state.userInput]// on ajoute au tableau item existant, la valeur "userInput"
            });
    }

    deleteTodo(item){ 
         // no event 
        // pass the item to indexOf
        const array = this.state.items;//création d'une nouvelle variable
        const index = array.indexOf(item); //création d'un nouvelle variable
        array.splice(index, 1);//supprimer le tableau la todo 
        this.setState({
            items: array
        });

    }

    renderTodos(){//création d'une liste déroulante
        return this.state.items.map(item => {
            return(
                <div className="list-group-item" key={item}>
                    <button onClick={this.deleteTodo.bind(this, item)}>x</button> | {item} 
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h1 align="center">Todo List Tool</h1>
                <form className="form-hor">
                    <input
                        value={this.state.userInput}
                        type="text"
                        placeholder="New task"
                        onChange={this.onChange}
                        className="form-control nb-2"
                    />
                    <button
                        onClick={this.addTodo}
                        className="btn btn-primary"
                    >
                        Add
                    </button>
                </form>

                <div className="list-group">
                    {this.renderTodos()}
                </div>
               
            </div>
        );
    }

}

export default TodoList;