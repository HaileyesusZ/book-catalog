import { Dispatch } from "react"
import END_POINTS from "../../constants/END_POINTS"
import HTTP_METHODS from "../../constants/HTTP_METHODS"
import Action from "../../models/Action"
import { handleAPI } from "../../utils/handleAPI"
import { ACTIONS } from "../ACTIONS"

const deleteBook = (id: string) => async (dispatch: Dispatch<Action>) => {
  try {
    await handleAPI(dispatch, {
      url: `${process.env.REACT_APP_API_URL}${END_POINTS.BOOKS}/${id}`,
      method: HTTP_METHODS.DELETE,
    })
  } catch (error) {
    dispatch({ type: ACTIONS.SET_ERROR, payload: { message: (error as Error).message } })
  }
}

export { deleteBook }
