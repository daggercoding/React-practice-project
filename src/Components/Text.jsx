import React from 'react'

const Text = (prop) => {
  return (
    <>
    <div className={prop.position} style={{height:`${prop.height}`,width:`${prop.width}`,border:"2px solid black"}}>{prop.children}</div>
    </>
  )
}

export default Text
