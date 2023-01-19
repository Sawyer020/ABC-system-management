export default {
    state: {
        num: 30
    },
    actions: {
        add1(newState: { num: number }, action: { type: string }) {
            newState.num++
        },
        add2(newState: { num: number }, action: { val: number }) {
            newState.num += action.val
        },
    },

    //Naming Unified
    actionNames: {
        add1: "add1",
        add2: "add2"
    }
}