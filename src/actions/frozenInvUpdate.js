// this file is an action creator!
// action creators return actions
// action is an object that has at LEAST a property of type
// this action creator is going to be handed to the dispatch

const frozenInvUpdate =  (operation, index)=>{
    console.log(operation, index);
    return {
        type: 'updateFrozen',
        payload: {
            operation,
            index
        }
    }
}
export default frozenInvUpdate