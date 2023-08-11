import React, {  useRef } from "react";

import { Box, HStack,Image } from "@chakra-ui/react";
import logo from "../images/logo14.png"

const Header = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const headerRef = useRef(null);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#e8edec"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1800px" margin="auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
        <Image src={logo} style={{alignSelf:"start", height:60,width:300}}/>
        <nav id="header">
          <HStack spacing={8} fontSize="2xl" fontWeight="20" style={{color:"#495e57", fontWeight:"bold",alignItems:"flex-start"}}>
            <a  href="#aboutus" onClick={handleClick("aboutus")} >Home</a>
            <a  href="#menu-section" onClick={handleClick("menu-section")} >Menu</a>
            <a  href="#reserve" onClick={handleClick("reserve")}>Reservation</a>
            <a  href="#reserve" onClick={handleClick("reserve")}>Log in</a>
          </HStack>
        </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
