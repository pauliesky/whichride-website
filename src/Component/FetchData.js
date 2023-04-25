import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './FetchData.css'
import { Link } from 'react-router-dom'


export const baseURL = 'https://wp.newborntoolkit.org/wp-json/nest360/v1/news'
// const bodyURL = 'https://wp.newborntoolkit.org/wp-json/nest360/v1/news'
function FetchData() {

  const [posts, setPosts] = useState([])
  const [display, setDisplay] = useState()
  // const [body, setBody] = useState({})



  useEffect(() => {
    axios.get(baseURL).then(res => {
      console.log(res.data.data.posts)
      setPosts(res.data.data.posts)
    })
  }, [])

  console.log(posts)

  // function getBodydata(slug) {
  //   console.log(slug)
  //   axios.get(bodyURL + slug).then(res => {
  //   })
  // }
  // function showBodyHandler(slug) {
  //   setDisplay(!display)

  // }

  return (
    <>
      {posts.map((post, index) => {
        return (
          <Link key={index} to={`blog/${post.slug}`} className='main'>
            <div className='header'>{post.title}</div>
            <img alt='image' src={post.image} ></img>
            {/* <div className='body'>{post.slug}</div> */}
          </Link>
        )
      })}
    </>
  )
}

export default FetchData