import React from "react";
import {MockListItem} from "./MockListItem";

const MOCK_LIST = [
    {
        'name': 'pleuvoir',
        'age': 18
    }, {
        'name': '67',
        'age': 18
    }
]


export const MockList: React.FC = () => {
    return (
        <div>
            {MOCK_LIST.map((item, index) => {
                return <MockListItem index={index + 1} name={item.name} age={item.age}/>
            })}
        </div>
    )
}