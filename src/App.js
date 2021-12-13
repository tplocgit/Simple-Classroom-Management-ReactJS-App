import './App.css';
import Modal from './Components/Modal';
import List from './Components/List';
import { React, useState, useEffect } from 'react'
import axios from 'axios';


export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([])
  
  const fetchData = () => {
    axios.get('https://my-classroom-tploc1305-api.herokuapp.com/classrooms')
    .then(response => { 
      setData(response.data)
    })
    .catch(err => alert(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div id="app" className="container">
      <div className="top-bar">
        <span className="top-bar__title">Classrooms</span>
        <button className="top-bar__button top-bar__button--add" onClick={() => setShowModal(true)}>Add</button>
      </div>
      {showModal && <Modal
        onAddSuccess={fetchData}        
        onClose={() => setShowModal(false)}
      />}
      <List items={data} />
    </div>
  );
}
