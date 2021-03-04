import React,{ Component } from 'react';
class Counter extends Component {

    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    increment(){
        /*this.setState({                                           //setState to change the value of count in UI. It will re render the component.
            count:this.state.count=this.state.count+1               //setState has 2 parameters state object and callback function
        },
            ()=>{                                                   //if you want to execute statements after the state is changed
            console.log('Callback value',this.state.count)
            })*/
        this.setState(prevState=>({                           //not using current state instead use the previous state
            count:prevState.count+1
        }))
    console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                    <button onClick={()=>this.increment()}>Increment</button>
                </div>
            </div>
        )
    }
}


export default Counter