import { Dispatch, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Action from "../../models/Action"
import { handleAPI } from "../../utils/handleAPI"

const useFetch = <Type>(url: string, forceReload = false) => {
    const [data, setData] = useState<{ data: Type } | undefined>()
    const dispatch = useDispatch<Dispatch<Action>>()

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await handleAPI<Type>(dispatch, { url : `${process.env.REACT_APP_API_URL}${url}` })
            setData(responseData)
        }

        fetchData()
    }, [url, forceReload])

    return data
}


export { useFetch }
