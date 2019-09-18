import axios from "axios";

const initialState = {
    characters: []
}

const GET_CHARACTERS = "GET_CHARACTERS";


export function getStarWarsCharacters() {
    return {
        type: GET_CHARACTERS,
        payload: axios.get('https://swapi.co/api/people')
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case `${GET_CHARACTERS}_FULFILLED`:
            return {
                ...state,
                characters: action.payload.results
            }
            default: return state;
    }
}