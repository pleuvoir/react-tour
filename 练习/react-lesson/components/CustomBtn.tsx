import {useEffect, useState} from "react";
import ConfirmModal from "./ConfirmModal";


interface CustomBtnProps {
    name: string
}

function CustomBtn(props: CustomBtnProps) {
    const [count, setCount] = useState(0);
    const [btnName, setBtnName] = useState("default btn name");

    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        setCount(999)
    }, [])

    const btnClickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={btnClickHandler}>{props.name} {count} </button>
            <button onClick={() => setModalShow(true)}>展示模态框</button>
            <button onClick={() => setModalShow(false)}>隐藏模态框</button>
            {/*{modalShow?<ConfirmModal/> :null }*/}
            {modalShow && <ConfirmModal  onCancelFn={()=>setModalShow(false)}
                                         onClickFn={()=>setModalShow(false)}/>}

        </div>
    )
}

export default CustomBtn