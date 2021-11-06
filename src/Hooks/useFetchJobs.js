import { useReducer, useEffect } from 'react';
import Axios from 'axios';



const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
    UPDATE_HAS_NEXT_PAGE: "update-has-next-page"

}

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs"


const reducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return{ loading: true, jobs: []};

        case ACTIONS.GET_DATA:
            return{...state, loading: false, jobs: action.payload.jobs };
        
        case ACTIONS.ERROR:
            return{ ...state, loading: false , error: action.payload.error, jobs: []};    
        
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return{...state, hasNextPage:action.payload.hasNextPage}
        default:
            return state;
    }



};

const useFetchJobs = (params, page) => {
    const [state, dispatch] = useReducer(reducer,{ jobs: [] , loading: true })


    useEffect(() => {
        const cancelToken1 = Axios.CancelToken.source()
        const cancelToken2 = Axios.CancelToken.source()
        dispatch({
            type: ACTIONS.MAKE_REQUEST
        })
        Axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: { markdown:true, page: page, ...params }
        })
        .then(res => {
            dispatch({
                type: ACTIONS.GET_DATA,
                payload: {jobs: res.data }
            })
        })
        .catch( e => {
            if(Axios.isCancel(e)) return
            dispatch({
                type: ACTIONS.ERROR,
                payload: { error: e }
            })
        })
       


        Axios.get(BASE_URL, {
            cancelToken: cancelToken2.token,
            params: { markdown:true, page: page +1 , ...params }
        })
        .then(res => {
            dispatch({
                type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
                payload: {hasNextPage: res.data.length !== 0 }
            })
        })
        .catch( e => {
            if(Axios.isCancel(e)) return
            dispatch({
                type: ACTIONS.ERROR,
                payload: { error: e }
            })
        })


        return() => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }

    }, [params, page])

    return state;
    


};


export default useFetchJobs;