import handleArr from "./index"

// manage data

//Expressions - Destructuring assignment(avoid excessive assignements)
//...handleNum.state,

//Call dispatch to run the function
let reducer = (state = { ...handleArr.state }, action: { type: string, val: number }) => {
    console.log('run reducer')
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case handleArr.sarrPush:
            handleArr.actions[handleArr.sarrPush](newState, action)
            break;
        default:
            break;
    }
    return newState
}

export default reducer