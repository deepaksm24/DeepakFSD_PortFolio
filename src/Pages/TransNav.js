import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import ScrollIntoView from "react-scroll-into-view";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { pink } from '@mui/material/colors';

export default function TransNav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar
      expand="sm"
      sticky
      transparent
      light
      bgColor="dark"
      className="bg-opacity-75 shadow-lg navbarmain"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <AcUnitIcon
            sx={{ color: pink[500], fontSize: 50 }}
           id="iconrotatenav"
          />

        </MDBNavbarBrand>
        <span className="logodeepak mt-2 h4" >Deepak</span>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}
       
        >
          <MDBNavbarNav  className="d-flex justify-content-end">
            {/* <ScrollIntoView selector="#about" smooth>
              <MDBNavbarItem className="navhead h4 m-3">About</MDBNavbarItem>
            </ScrollIntoView> */}

            <ScrollIntoView selector="#skills" smooth>
              <MDBNavbarItem className="navhead h4 m-3">Skills</MDBNavbarItem>{" "}
            </ScrollIntoView>
            <ScrollIntoView selector="#projects" smooth>
              <MDBNavbarItem className="navhead h4 m-3">Projects</MDBNavbarItem>{" "}
            </ScrollIntoView>
            <ScrollIntoView selector="#contact" smooth>
              <MDBNavbarItem className="navhead h4 m-3">Contact</MDBNavbarItem>{" "}
            </ScrollIntoView>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
