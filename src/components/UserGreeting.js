import React,{ Component } from 'react'

class UserGreeting extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:true
        }
    }

    render(){

        return this.state.isLoggedIn && <div>Hello Pooja</div>                      //Short Circuit Operator

        /*return this.state.isLoggedIn ?                                          //Ternary conditional approach
            (<div>Welcome Pooja</div>):
            (<div>Welcome Guest</div>)*/

        /*let message                                                          //element variable approach
        if(this.state.isLoggedIn)
        {
            message=<div>Welcome pooja</div>
        }
        else{
            message=<div>Welcome guest</div>
        }
        return <div>{message}</div>*/

        /*if(this.state.isLoggedIn)                                                       //if else approach
        {
            return(
                <div>
                    Welcome pooja
                </div>
            )
        }
        else{
            return(
                <div>
                    <div>Welcome Guest</div>
                </div>
            )
        }*/

    }
}
export default UserGreeting