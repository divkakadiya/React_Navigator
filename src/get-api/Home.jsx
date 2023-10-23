import React from 'react'
import axios from 'axios';
import '../App.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <div className='all'>
      {
        data.map((v, i) =>
          <div className='card' key={i}>
            <p>{v.id}</p>
            <p>{v.email}</p>
            <Link to={`/${i}`}><button className='btn btn-success'>View</button></Link>
          </div>
        )
      }
    </div>
  )
}

export default Home