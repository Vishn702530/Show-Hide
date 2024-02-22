import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
 
function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.dribbble.com/users/141880/screenshots/2112209/eyeball-menu.gif'
              height='30'
              alt=''
              loading='lazy' 
            />
            SHOW-TASK
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
    </div>
    
  )
}

export default Header