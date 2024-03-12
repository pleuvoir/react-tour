


interface ConfirmModalProps {
    onCancelFn: Function
    onClickFn: Function
}

const ConfirmModal = (props:ConfirmModalProps) => {
    return (
        <div>
            <p>确定删除吗</p>
            <button onClick={props.onClickFn}>确定</button>
            <button onClick={props.onCancelFn}>取消</button>
        </div>
    )
}

export default ConfirmModal