import { useSelector, useDispatch } from "react-redux"

const View = () => {

    // * Control 'num' *
    // Using 'userSelector' to get data
    const { num } = useSelector((state: RootState) => ({
        num:state.handleNum.num
    }))

    const dispatch = useDispatch()

    // Using 'useDispatch' to modify data
    const changeNum = () => {
        //{type:"string(⬅It's_a_mark)", val:3(⬅increment)}
        //type is fix, val is custom
        //dispatch({type:""})
        dispatch({ type: "add2", val: 100 })
    }

    // * Control 'sarr' *
    const { sarr } = useSelector((state: RootState) => ({
        sarr:state.handleArr.sarr
    }))

    const changeArr = () => {
        dispatch({ type: "sarrPush", val: 100 })
    }

    return (
        <div className='home'>
            <p>This is page1</p>
            <p>{num}</p>
            <button onClick={changeNum}>Button</button>
            <p>{sarr}</p>
            <button onClick={changeArr}>Button</button>
        </div>
    )
}

export default View