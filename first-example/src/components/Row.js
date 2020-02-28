import React, { Component } from 'react'
import { store } from '../store/index'

class Row extends Component {

    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }
    
    

    render() {
        console.log('++++++++++++++++++++++++',store.getState()[0])
        return (
            <div>
                {store.getState()[0].map(item => {
                    return(
                        <div>
                            {item.id}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Row
