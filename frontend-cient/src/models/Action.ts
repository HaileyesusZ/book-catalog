import { ACTIONS } from "../store/ACTIONS";

interface Action {
    type: ACTIONS
    payload?: unknown
}

export default Action