import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => setData(res))
    .catch(err => console.log(err));
  },[])
  return (
    <div className='d-flex  flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             data.data.map((d, i) => (
                <tr key={i}>
                 <td>{d.id}</td>
                 <td>{d.name}</td>
                 <td>{d.email}</td>
                 <td>{d.phone}</td>
                 <td>
                   <button className='btn btn-sm btn-info me-2'>Read</button>
                  <button className='btn btn-sm btn-primary me-2'>Edit</button>
                  <button className='btn btn-sm btn-danger'>Delete</button>
                 </td>

              </tr>
              ))
            }
          </tbody>
        </table>

      </div>
      
    </div>
  )
}

export default Home
