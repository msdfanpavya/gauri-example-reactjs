import React, { Component, Fragment } from 'react'
import Child from './Child'

class Second extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: []
        }
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( async (res) => {
            let data = await res.json()
            console.log('=======================',data)
            this.setState({
               message: data
           },()=>{
            console.log('-------callback----------',this.state.message)
           })
       })
       .catch((err) => {
           this.setState({
               message: err
           })
       })   
     }
    
    componentWillMount() {
        console.log('Component WILL MOUNT!');
        // this.pavya = "qwertyuiop"
     }

     componentDidMount() {
        console.log('Component DID MOUNT!')
        this.getData()
     }
     componentWillReceiveProps() {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate() {
        return true;
     }
     componentWillUpdate() {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate() {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
     render() {
         let data = this.state.message
         console.log('<<<<<<<<<<<<<<<<<<<<<<<<',data)

        return (
           <div>
              {this.state.message.map((value, i) => {
                  return(
                      <Fragment key = {i}>
                          <Child title = {value.title}></Child>
                      </Fragment>  
                  )
              })}
            </div>
        );
     }
}

export default Second
