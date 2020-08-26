
import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  constructor(props){
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: " "
    }
  }
  //delete list
  clearList = () => {
    console.log("clearing list!")
    this.setState({
      toDoItemArray: []
    })
  }

  //update new change
  newItemChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }

  //add new items
  addItem = e => {
    console.log("add list")
    console.log("before delete", this.state.newItem)
    e.preventDefault()
    const newArray = this.state.toDoItemArray;
    newArray.push(this.state.newItem);
    this.setState({
      toDoItemArray: newArray,
      newItem: " "
    })
    console.log("after", this.state.newItem)
  }


  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList