import { React } from 'react'


export default function Item({ item }) {
    return (
        <div className="item">
            <p>
            Name: { item.name }
            </p>
            <p>
            Topic: { item.theme }
            </p>
            <p>
            Section: { item.part }
            </p>
        </div>
    )
}