import { METHODS } from "http"
import { Dispatch } from "react"
import HTTP_METHODS from "../constants/HTTP_METHODS"
import Action from "../models/Action"
import HandleAPI from "../models/props/HandleAPI"
import { ACTIONS } from "../store/ACTIONS"

const handleAPI = async <Type>(dispatch: Dispatch<Action>, data: HandleAPI): Promise<{data : Type } | undefined> => {
    try {
        const { url, method, payload } = data
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        const response = await fetch(url, {
            method: method || HTTP_METHODS.GET,
            headers: {
                'Content-Type': 'application/json'
            },
            ...payload && { body: JSON.stringify(payload) }
        })
        const responseData = await response.json()
        if (response.ok) {
            return responseData
        } else {
            dispatch({ type: ACTIONS.SET_ERROR, payload: { message: (responseData as Error).message } })
        }
    } catch (error) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: { message: (error as Error).message } })
    } finally {
        dispatch({ type: ACTIONS.END_REQUEST })
    }
}

export { handleAPI }