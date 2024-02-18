import React from 'react'
import Layout from './Index'
import real from '../../images/real.jpg';

const Home = () => {
  return (
    <div>
      <Layout>Home page
      <h1> Home Sale and Purchase Services in Ottawa </h1>
      <img src={real} alt="Home" className='home-banner'/>
      </Layout>
    
    </div>
  )
}

export default Home

