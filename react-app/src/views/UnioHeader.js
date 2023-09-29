import PrincipalComponent from 'layouts/authentication/components/CoverLayout/PrincipalComponent'
import Footer from 'layouts/authentication/components/Footer'
import HeaderOne from 'layouts/authentication/sign-in/HeaderOne'
import React from 'react'

function UnioHeader() {
  return (
    <div>
        <HeaderOne/>
        <PrincipalComponent/>
        <Footer></Footer>
    </div>
  )
}

export default UnioHeader