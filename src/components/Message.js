import React,{ Component } from 'react'

class Message extends Component{

    constructor() {  {/*for creating state*/}
        super();
        this.state={
            message:'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({message:'Thank You for subscribing'})
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button> {/*change message when button is clicked*/}
            </div>
        )
    }
}
export default Message