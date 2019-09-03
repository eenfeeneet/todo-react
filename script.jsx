class ToDoItem extends React.Component{

    completeTask(){
        console.log(event.target)
        console.log(this.props.task)

        let task = this.props.task
    }


    render(){
        console.log("TaskItem: Rendering")
        return(
            <li className="list-group-item d-flex justify-content-between align-items-center my-2">
                {this.props.task}

                <button className='btn btn-outline-danger mx-2' onClick={()=>{this.completeTask()}} >Delete</button>
            </li>
        );
    }
}

class TaskList extends React.Component{
    render(){
        console.log("TaskList: rendering")
        let currentList = this.props.list
        console.log(currentList)
        console.log(currentList.length)
        let listItems;
        if(currentList.length === 0){
            console.log("empty list")

            listItems = (<ToDoItem task={"Add a task to your list"}/>)
        } else {
            console.log("list is not empty")
            listItems = currentList.map((task, i) => {

                return(
                    <ToDoItem key={i} task={task} done={this.props.done}/>
                );
            })

        }
        return(
            <ul className="list-group">
                {this.props.type}
                {listItems}
            </ul>
        );
    }
}

class TodoForm extends React.Component{
    constructor(){
        super()

    }

    addToDoAndClear(){
        this.props.addToDo();
    }

    render(){

        console.log("ToDoForm: rendering");
        return(
            <div className="col-8 mx-auto">
                <div className="form-inline justify-content-center">
                    <input className='form-control mx-2' onChange={this.props.addInput}/>
                    <button className='btn btn-outline-primary mx-2' onClick={()=>{this.addToDoAndClear()}} >Add</button>
                </div>
            </div>
        );
    }
}

class ToDoApp extends React.Component {
    constructor(){
        super()

        this.state = {
            word:"",
            toDoList : []
        }
    }

    addInput = () => {
        var input = event.target.value;
        this.setState({word: input})
        console.log(this.state.word)
    }

    addToDo = () => {
        // console.log("click")
        // console.log(this.state.word)
        // const newEntry = this.state.word
        // const newState = [
        //     list : this.state
        // ]
        console.log("preparing to add: ",this.state.word)
        this.state.toDoList.push(this.state.word);
        this.setState(this.state.toDoList);
        console.log("Current Task List: ",this.state.toDoList);

    }
    completeToDo = () => {
        console.log(event.target)
        console.log(this.props.task)
    }


    render() {

        console.log("ToDoApp: rendering");
        return (
            <div className="container">
                <div className="row">
                    <TodoForm addToDo={this.addToDo} addInput={this.addInput}/>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5 text-center">
                        <TaskList type={"pending"} list={this.state.toDoList}/>

                    </div>
                    <div className="col-5 text-center">
                        <TaskList type={'completed'} list={this.state.toDoList}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('root')
);