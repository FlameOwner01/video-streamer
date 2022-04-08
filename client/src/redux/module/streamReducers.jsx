
const initialState = {
    streams: [],
    stream: {},
};

const data = (state = initialState, action) => {
    switch(action.type){
        case "LIST_STREAMS":
            return{
                ...state,
                streams: action.payload,
            };
        case "READ_STREAM": 
         return{
             ...state,
             stream: action.payload,
         };
         case "INSERT_STREAM":
            return {
                ...state,
                stream: action.payload,
              };
        case "DELETE_STREAM":
            return{
                ...state,
                stream: action.payload,
            };
        case "EDIT_STREAM":
            return{
                ...state,
                stream: action.payload,
            };
        default: return state;
            
    }
}

export default data;