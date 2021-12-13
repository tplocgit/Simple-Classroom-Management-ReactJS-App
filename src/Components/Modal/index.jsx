import { React, useState } from 'react'
import axios from 'axios';


export default function Modal({ onClose, onAddSuccess }) {
    const [isAdding, SetIsAdding] = useState(false)

    const addClassroom = () => {
        if(isAdding) return alert("New classroom is adding please wait ...")

        let nameEl = document.getElementById("in_name")
        let topicEl = document.getElementById("in_topic")
        let sectionEl = document.getElementById("in_section")

        let postData = {
            name: nameEl.value,
            theme: topicEl.value,
            part: sectionEl.value
        }
        if(Object.values(postData).some(v => !v)) return alert("Please enter all fields.")

        SetIsAdding(true)
        let postURL = 'https://my-classroom-tploc1305-api.herokuapp.com/classrooms'
        axios.post(postURL, postData)
        .then(response => {
            SetIsAdding(false)
            if(response.status === 200 || response.status === 201) {
                alert("Add new classroom successfully.")
                onClose()
                onAddSuccess()
            }
            else alert(`Error ${response.status}: ${response.statusText}`)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="modal-mask">
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-header">
                        Add new classroom
                    </div>
                    <div className="modal-body">
                        {isAdding && <p className="adding-text">Adding ...</p>}
                        <form className="modal-body__form form">
                            <div className="modal-body__form__form-control">
                                <label className="modal-body__form__form-control__label" htmlFor="in_name">Name:</label>
                                <input className="modal-body__form__form-control__input" type="text" name="in_name" id="in_name" />
                            </div>
                            <div className="modal-body__form__form-control">
                                <label className="modal-body__form__form-control__label" htmlFor="in_topic">Topic:</label>
                                <input className="modal-body__form__form-control__input" type="text" name="in_topic" id="in_topic" />
                            </div>
                            <div className="modal-body__form__form-control">
                                <label className="modal-body__form__form-control__label" htmlFor="in_section">Section:</label>
                                <input className="modal-body__form__form-control__input" type="text" name="in_section" id="in_section" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-default-button modal-default-button--cancel" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="modal-default-button modal-default-button--save" onClick={addClassroom}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}