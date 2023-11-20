import React, { Component } from 'react'

export default class App
 extends Component {
    state ={
        list:['1111','2222','3333']
    }
   

  render() {
    var newList = this.state.list.map(item=><li key={item}>{item}</li>)
    return (
      <div>
          <ul>
              {
                 newList
              }
          </ul>
      </div>
    )
  }
}
