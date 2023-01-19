export default {
    state:{
        sarr:[12,20,30]
    },
    actions:{
        sarrPush(newState:{sarr:number[]}, action:{type:string,val:number}){
            newState.sarr.push(action.val)
        }
    },
    
    // Naming Unified
    actionNames:
    {sarrPush:"sarrPush"}

}