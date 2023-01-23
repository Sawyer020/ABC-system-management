
const store = {
    state: {
        num: 30
    },
    actions: {
        // Synchronous functions
        add1(newState: { num: number }, action: { type: string }) {    
                newState.num++
        },
        add2(newState: { num: number }, action: { val: number }) {
            newState.num += action.val
        },
        add3(newState: { num: number }, action: { val: number }) {
            newState.num += action.val
        },
    },
    // Optimize redux-thunk asychronous function
    asynActions:{
        asyncAdd1(aDis : Function){
            setTimeout(() => {
               aDis({ type: "add1" })
            }, 1000)
        }
    },
    
    //Naming Unified
    // actionNames: {
    //     add1: "add1",
    //     add2: "add2",
    // }
    actionNames:{},

}   /* Auto-generated for action */
    // Define a global 'actionNames'
    let actionNames = {}
    // The amount of 'actionNames' depends on how many functions within action
    // So, we need to traverse 'store.actions' to add keys into 'actionNames'
    for(let key in store.actions){
        actionNames[key] = key
    }
    // Then, push actionNames in store
    store.actionNames=actionNames;


export default store