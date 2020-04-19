import React from 'react'
import {Increment} from '../actions/action'
import { connect } from 'react-redux'


function AppContainer(props) {
    return (
        <div>
            <h1>Count-{props.number}</h1>
            <button onClick={props.Increment}>Increment</button>
            <button>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        number:state.number
    }
}

const mapDispatchToProps = (dispach) => {
    return{
        Increment:() => dispach(Increment())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)
