// Inpute Box Data 




const input = {
    state: {
        LableValue:'',
        LableName:'',
        AddList:'',
        AddListOfList:'',

    },

    reducers: {
        SetLableValue: (state, payload) => ({
            ...state,
            LableValue: payload
        }),
        SetLableName:(state,payload)=>({
            ...state,
            LableName:payload
        }),
        SetAddList:(state,payload)=>({
            ...state,
            AddList:payload
        }),
        SetAddListOfList:(state,payload)=>({
            ...state,
            AddListOfList:payload
        })
        


    

    }
}

export default input;