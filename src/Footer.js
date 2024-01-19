import React from 'react'

const Footer = () => {
    let year =new Date();
  return (
    <div>&copy; All rights reserved {year.getFullYear()}</div>
  )
}


export default Footer