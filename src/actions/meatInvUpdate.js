const meatInvUpdate =  (qChanage, index)=>{
    return {
        type: 'updateMeat',
        payload: {
            qChanage,
            index
        }
    }
}

export default meatInvUpdate