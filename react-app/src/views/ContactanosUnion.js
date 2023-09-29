import TerceroComponent from 'layouts/authentication/components/CoverLayout/TerceroComponent'
import Footer from 'layouts/authentication/components/Footer'
import ContactoOne from 'layouts/authentication/sign-in/ContactoOne'
import React from 'react'

function ContactanosUnion() {
  return (
    <div>
        <ContactoOne/>
        <TerceroComponent/>
        <Footer/>
    </div>
  )
}

export default ContactanosUnion