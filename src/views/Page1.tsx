import { useSelector, useDispatch } from "react-redux"
import numStatus from "@/store/NumStatus"

const View = () => {
    // Using 'userSelector' to get data
    const dispatch = useDispatch()

    // * Control 'num' *
    const { num } = useSelector((state: RootState) => ({
        num: state.handleNum.num
    }))

    // Using 'useDispatch' to modify data
    const changeNum = () => {
        //{type:"string(⬅It's_a_mark)", val:3(⬅increment)}
        //type is fix, val is custom
        //dispatch({type:""})
        dispatch({ type: "add3", val: 200 })
    }

    const changeNum2 = () => {
        // Sychronous: dispatch({type:"add1"})
        /* Asychronous - using 'redux-thunk'
           Format: dispatch((whatever : Function))
          'whatever:Function': call 'dispatch' by 'redux-thunk'
        */
        dispatch(numStatus.asynActions.asyncAdd1)
    }

    // * Control 'sarr' *
    const { sarr } = useSelector((state: RootState) => ({
        sarr: state.handleArr.sarr
    }))

    const changeArr = () => {
        dispatch({ type: "sarrPush", val: 100 })
    }

    return (
        <div className='home'>
            <p>This is page1</p>
            <p>{num}</p>
            <button onClick={changeNum}>Synchrounus Button</button>
            <button onClick={changeNum2}>Asynchronous Button</button>
            <p>{sarr}</p>
            <button onClick={changeArr}>Button</button>
        </div>
    )
}

export default View