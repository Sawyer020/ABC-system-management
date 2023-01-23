const store = {
    state:{
        sarr:[12,20,30]
    },
    actions:{
        // Synchronous functions
        sarrPush(newState:{sarr:number[]}, action:{type:string,val:number}){
            newState.sarr.push(action.val)
        }
    },
    
    // Naming Unified
    //{sarrPush:"sarrPush"}
    actionNames:{}
}

let actionNames = {} 
    for(let key in store.actions){
        actionNames[key] = key
    }
    store.actionNames=actionNames;


export default store