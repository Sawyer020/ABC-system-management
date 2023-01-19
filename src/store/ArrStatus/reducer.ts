import handleArr from "./index"

// manage data

//Expressions - Destructuring assignment(avoid excessive assignements)
//...handleNum.state,

//Call dispatch to run the function 
let reducer = (state = { ...handleArr.state }, action: { type: string, val: number }) => {
    console.log('run reducer')
    let newState = JSON.parse(JSON.stringify(state))

    //Idea: compare 'action.type' with every case, just like traverse
    // switch (action.type) {
    //     case handleArr.sarrPush:
    //         handleArr.actions[handleArr.sarrPush](newState, action)
    //         break;
    //     default:
    //         break;
    // }

    //[Optimize]: create an object to contain all case, called 'actionNames'
    for (let key in handleArr.actionNames) {
        //Using '===' to check both value and type
        if (action.type === handleArr.actionNames[key]) {
            handleArr.actions[handleArr.actionNames[key]](newState, action);
            break;
        }
    }
    

    return newState
}

export default reducer