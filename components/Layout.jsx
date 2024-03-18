
import  Nav  from './Nav'
import React from 'react'

export default function Layout(props) {
  return (
    <div>

    <Nav/>

    <div className=' mx-20 my-2'>
        {props.children}
    </div>

    </div>
  )
}
