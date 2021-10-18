import Action from "../models/Action"
import Book from "../models/Book"
import Store from "../models/Store"
import { ACTIONS } from "./ACTIONS"

const initialState = {
    fetchingData: false
}

const rootReducer = (state: Store = initialState, action: Action): Store => {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { ...state, fetchingData: true }
        case ACTIONS.END_REQUEST:
            return { ...state, fetchingData: false }
        case ACTIONS.SET_CURRENT_BOOK:
            return { ...state, currentBook: action.payload as Book || {}}
        case ACTIONS.SET_ERROR:
            return { ...state, error: action.payload as Error || {} }
        case ACTIONS.CLEAR_ERROR:
            return { ...state, error: {} }
        default:
            return state

    }

}

export { rootReducer }