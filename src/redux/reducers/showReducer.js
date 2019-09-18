
const initialState = {
    favChar: ""
}

const UPDATE_CHAR = "UPDATE_CHAR";


 export function updateFavChar(char){
    return{
        type: UPDATE_CHAR, 
        payload: char
    }
}


export default function reducer(state=initialState, action) {
    switch(action.type) {
    case UPDATE_CHAR:
        return {
            ...state,
            favChar: action.payload
        }
    default: return state;
    }
}