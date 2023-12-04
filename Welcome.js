import React from 'react'
import { useParams } from 'react-router-dom'

export default function Welcome() {
    const idFromURL = useParams()
    console.log(idFromURL)
  return (
    <div>
        {idFromURL.id}
    </div>
  )
}
