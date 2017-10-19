import { RECEIVE_DECKS, ADD_DECK } from '../actions'

export default function(state={decks:{}, error:{}}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {decks: action.decks, error:{}}
        
        case ADD_DECK:
            return {decks:{ ...state.decks, ...action.deck}, error: {}}
        default:
            return state
    }
}