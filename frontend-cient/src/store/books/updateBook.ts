import { Dispatch } from "react"
import END_POINTS from "../../constants/END_POINTS"
import HTTP_METHODS from "../../constants/HTTP_METHODS"
import Action from "../../models/Action"
import Book from "../../models/Book"
import { handleAPI } from "../../utils/handleAPI"
import { ACTIONS } from "../ACTIONS"

const updateBook = (book: Book) => async (dispatch: Dispatch<Action>) => {
    try {
        await handleAPI(dispatch, {
            url: `${process.env.REACT_APP_API_URL}${END_POINTS.BOOKS}/${book._id}`,
            method: HTTP_METHODS.PATCH,
            payload: book,
        })
    } catch (error) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: { message: (error as Error).message } })
    }
}

export { updateBook }

