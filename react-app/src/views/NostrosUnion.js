import SegundoComponent from 'layouts/authentication/components/CoverLayout/SegundoComponent'
import Footer from 'layouts/authentication/components/Footer'
import NostrosOne from 'layouts/authentication/sign-in/NostrosOne'
import React from 'react'

function NostrosUnion() {
  return (
    <div>
        <NostrosOne/>
        <SegundoComponent/>
        <Footer/>
    </div>
  )
}

export default NostrosUnion