import React, { Component } from 'react'
import Child2 from './Child2'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data: []
        }
    }

    callback = (dataFromChild) => {
        console.log('................................',dataFromChild)
        
    }
    
    sendData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(async (response) => {
              let res = await response.json();
              console.log('Responseeeeeeeeeeeeeee',res)
          })
    }

    render() {
        return (
            <div>
                Data From Parent
                <Child2 callbackFromParent = {this.callback} data = "{this.state.data}">{this.state.data}</Child2>
                <button onClick = {this.sendData}></button>
            </div>
        )
    }
}

export default Parent
