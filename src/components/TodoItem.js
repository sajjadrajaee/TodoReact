import React from "react";
import styles from "./TodoItem.module.scss"

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEdit = () => {
    this.setState({
      editing:true,
    })
  }

  handleKey = (e) => {
    if(e.key==="Enter"){
      this.setState({
        editing:false
      })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    
    const {id, title, completed}= this.props.todo;

    let viewMode= {};
    let editMode = {};

    if(this.state.editing){
      viewMode.display="none";
    }
    else{
      editMode.display="none";
    }

    return (
      <div>
        <li className={styles.item}>
          <div onDoubleClick={this.handleEdit} style={viewMode}>
            <input type="checkbox" className={styles.checkbox} checked={completed}
              onChange={() => this.props.handleChangeProps(id)} />
            <span style={completed ? completedStyle : null}> {title} </span>
            <button onClick={() => this.props.deleteTodoProps(id)} className={styles.button}>Delete</button>
          </div>
          <input className={styles.textInput} type="text" style={editMode} value={title} 
          onChange={(e)=>this.props.setUpdate(e.target.value,id)}
          onKeyDown={this.handleKey}
          />
        </li>
      </div>
    );
  }
}

export default TodoItem