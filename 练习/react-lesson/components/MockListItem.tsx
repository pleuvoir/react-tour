import React from "react";
import internal from "stream";
import exp from "constants";


interface Item {
    name: string
    age: number
    index?: number
}

export const MockListItem = (props: Item) => {

    return (<div>
        <h2>列表{props.index}</h2>
        <ul>
            <li>{props.name}</li>
            <li>{props.age + 1}</li>
        </ul>
    </div>)
}
