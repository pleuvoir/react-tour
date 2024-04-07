import { useEffect, useState } from "react";
import { setApp } from "../store/Reducer/AppSlice";
import {useDispatch, useSelector} from "react-redux";

function ReduxBtn() {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const appInfo = useSelector((state) => state.app.app);

    // useEffect(() => {
    //     dispatch(setApp("2.0.0"));
    // }, []); // [] 表示只在组件挂载时调用

    const btnClickHandler = () => {
        setCount(count + 1);
        dispatch(setApp("3.0.0"));
    };

    return (
        <div>
            <button onClick={btnClickHandler}>redux示例按钮 {count} {appInfo.version}</button>
        </div>
    );
}

export default ReduxBtn;