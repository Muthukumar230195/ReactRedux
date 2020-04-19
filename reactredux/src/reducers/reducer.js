import {INCREAMENT} from '../types/actiontype'

const InitialState = {
    number:5
}

const reducerFunction = (state=InitialState,action) =>{
    switch(action.type){
        case INCREAMENT:
            return{
            ...state,
                number:state.number+1
            }
        default:
           return state
    }
}

export default reducerFunction;