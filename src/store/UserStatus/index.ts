const store = {
    state: {
        // Data
    },
    actions: {
        // Synchronous functions

    },
    // Optimize redux-thunk asychronous function
    asynActions: {
        asyncAdd1(aDis: Function) {
            setTimeout(() => {
                aDis({ type: "add1" })
            }, 1000)
        }
    },

    actionNames: {},

}

/* Auto-generated for action */
// Define a global 'actionNames'
let actionNames = {}
// The amount of 'actionNames' depends on how many functions within action
// So, we need to traverse 'store.actions' to add keys into 'actionNames'
for (let key in store.actions) {
    actionNames[key] = key
}
// Then, push actionNames in store
store.actionNames = actionNames;


export default store