import handleNum from "./index"

// manage data

//Expressions - Destructuring assignment(avoid excessive assignements)
//...handleNum.state

//Call dispatch to run the function
let reducer = (state = { ...handleNum.state }, action: { type: string, val: number }) => {
    console.log('run reducer')
    let newState = JSON.parse(JSON.stringify(state))

    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState, action)
    //         break;
    //     case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState, action)
    //         break;
    //     default:
    //         break;
    // }

    //[Optimize]: create an object to contain all case, called 'actionNames'
    for (let key in handleNum.actionNames) {
        //Using '===' to check both value and type
        if (action.type === handleNum.actionNames[key]) {
            handleNum.actions[handleNum.actionNames[key]](newState, action);
            break;
        }
    }

    return newState
}

export default reducer