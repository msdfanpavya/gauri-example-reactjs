import React, { Component } from 'react'

class Child extends Component {

prop = ''
constructor(props) {
    super(props)
    this.prop = this.props.title
    this.state = {
         data: ''
    }
}

componentDidMount() {
    this.setState({
        data: this.prop
    })
}

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default Child
