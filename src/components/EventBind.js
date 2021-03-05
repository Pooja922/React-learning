import React,{ Component } from 'react'

class EventBind extends Component{

    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }                                                                                                       //binding in class constructor
    clickHandler(){
        this.setState({message:'GoodBye'})
        console.log(this)
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click Me</button>*/}                {/*using binding*/}
                {/*<button onClick={()=>this.clickHandler()}>Click Me</button>*/}                     {/*using arrow function*/}
                <button onClick={this.clickHandler}>Click Me</button>                               {/* binding in class constructor*/}
            </div>
        )
    }
}

export default EventBind