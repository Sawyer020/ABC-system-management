import { Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import numStatus from "@/store/NumStatus"

const View = () => {
    // Using 'userSelector' to get data
    const dispatch = useDispatch()

    // * Control 'num' and 'sarr' *
    /* when 'state' is called, we have 'combineReduces', 
    so we need to extract the content specifically*/
    const { num, sarr} = useSelector((state: RootState) => ({
        num: state.handleNum.num,
        sarr: state.handleArr.sarr
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


    const changeArr = () => {
        dispatch({ type: "sarrPush", val: 100 })
    }

    return (
        <div className='home'>
            <p>This is page1</p>
            <p>{num}</p>
            <Button type="primary" onClick={changeNum}>Synchrounus Button</Button>
            <Button type="dashed" onClick={changeNum2}>Asynchronous Button</Button>
            <p>{sarr}</p>
            <Button onClick={changeArr}>Button</Button>
        </div>
    )
}

export default View