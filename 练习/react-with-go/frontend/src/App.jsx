import {useState, useEffect} from "react";
import io from "socket.io-client";

export default function App() {

    const sio = io("ws://localhost:8000", {
        transports: ["websocket"],
        reconnect: true,
    });

    const [currentTime, setCurrentTime] = useState("");
    const [count, setCount] = useState(0);
    const [response, setResponse] = useState("");

    //渲染完成后 会执行这段代码
    useEffect(() => {

        console.log("useEffect");

        console.log("sio", sio);
        sio.on("connect", () => {
            console.log("socketio connect", sio.id);
        });

        sio.on("disconnect", () => {
            console.log("socketio disconnect", sio.id);
        });

        sio.on("push", (message) => {
            console.log("push => ", message);
            if (message.Method === "UpdateTime") {
                setCurrentTime(
                    new Date(message.Data.time / 1000000).toLocaleTimeString()
                );
            } else if (message.Method === "UpdateCount") {
                setCount(message.Data.count);
            }
        })

    } );

    const onClick = () => {
        const response = sio.emit("request", { method: "Hello" }, (response) => {
            console.log(response);
            const res = JSON.parse(response.data);
            setResponse(res.message);
        });
    };

    return (
        <div
            style={{display: "flex", flexDirection: "column", alignItems: "center"}}
        >
            <button
                onClick={onClick}
                style={{fontSize: 50, padding: "20px 50px", margin: "20px"}}
            >
                调用go
            </button>
            <div style={{fontSize: 50}}>{response}</div>
            <div style={{fontSize: 50}}>{currentTime}</div>
            <div style={{fontSize: 50}}>{count}</div>
        </div>
    )
}