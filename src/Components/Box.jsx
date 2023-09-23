import React from 'react'

const Box = (prop) => {

  return (
    <>
  <div className={`${prop.position} text-xlg pt-6 flex justify-center align-middle`} style={{border:"2px solid black", height:80,width:80}} onClick={prop.onClick}>{prop.name}</div>

  </>
  )
}
export default Box
