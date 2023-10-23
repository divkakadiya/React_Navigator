import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <>
      <div className='card' style={{ margin: "1vw auto 0" }}>
        <h2>Your Identity</h2>
        <h6>userId : {data[id]?.id}</h6>
        <h6>userEmail : {data[id]?.email}</h6>
      </div>
    </>
  )
}

export default Details