import React from 'react'
import Layout from './Index'
import c from '../../images/c.png';

const Courses = () => {
  return (
    <div>
      <Layout>Courses
      <h1> Welcome to Knowledge Portal Site </h1>
      <h3>Enroll into your desire Course</h3>
      <img src={c} alt="Home" className='home-banner'/>
      </Layout>
    </div>
  )
}

export default Courses
