import HTTP_METHODS from "../../constants/HTTP_METHODS";

interface HandleAPI {
    url: string,
    method?: HTTP_METHODS,
    payload?: any,
}

export default HandleAPI