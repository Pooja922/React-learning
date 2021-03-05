import React,{ Component } from 'react';
/*class welcome extends Component{                                                    //using props
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}*/

class welcome extends Component{                                                        //destructuring using props parameters
    render(){
        const {name,heroName}=this.props
        //const {state1,state2}=this.state                                              //destructuring state
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default welcome