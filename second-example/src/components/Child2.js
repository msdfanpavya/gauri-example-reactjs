import React, { Component, Fragment } from 'react'

class Child2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: [],
            parentData: []
        }
    }
    
    componentDidMount() {
        console.log('Component DID MOUNT!')
        this.getData()
     }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( async (res) => {
            let data = await res.json()
            console.log('=======================',data)
            this.setState({
               message: data
           },
           ()=>{
            console.log('-------callback----------',this.state.message)
            setInterval(() => {
                this.props.callbackFromParent(this.state.message)
            }, 5000);
           })
       })
       .catch((err) => {
           this.setState({
               message: err
           })
       })   
     }
   


     render() {
        return (
           <div>
              {this.state.message.map((value, i) => {
                  return(
                    <Fragment>
                      <Fragment key = {i}>
                          {value.title}
                      </Fragment> 

                     </Fragment>
                  )
              })}
              <Fragment>
                  {}
              </Fragment>
            </div>
        );
     }

}

export default Child2
