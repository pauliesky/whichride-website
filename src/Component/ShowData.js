import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from './FetchData'


function ShowData() {
  const { slug } = useParams()
  console.log(slug)
  const [showSlug, setShowSlug] = useState({})

  const [loading, setLoading] = useState(false)


  const fetchDetails = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${baseURL}/${slug}`)
      // console.log('res',res)
      setShowSlug(res.data.data)
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)

    }
  }


  useEffect(() => {
 

    fetchDetails()

  }, [slug])

  console.log(showSlug)


  return (
    <div>

      {showSlug.slug}

      <div
        dangerouslySetInnerHTML={{ __html: showSlug.content }}
      />



    </div>
  )
}

export default ShowData