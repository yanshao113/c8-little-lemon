import React from "react";
import {Box, Flex,HStack, VStack,Heading} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: service@littlelemon.com",
    },
    {
      icon: faFacebook,
      url: "https://facebook.com",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
    },
    {
      icon: faTwitter,
      url: "https://twitter.com",
    },
    {
      icon: faYoutube,
      url: "https://youtube.com",
    },
  ];

  return (
    <Box backgroundColor="#495e57">
      <footer>
        <Flex
          margin="auto"
          px={20}
          color="white"
          justifyContent="center"

          maxWidth="2000px"
          height={20}
        >
          <HStack spacing={300}>
          <a href="#aboutus" style={{fontSize:25,color:"#F4CE14"}}>Home</a>
            <VStack>
              <a href="#aboutus" style={{fontSize:25, color:"#F4CE14", alignItems:"flex-start"}}>Contact us</a>
              <HStack spacing={5}>
              <p>Phone: </p>
              <p> +1 111-111-111</p>
              </HStack>
            </VStack>

          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
              ))}
            </HStack>
          </nav>
          <p style={{fontSize:15, color:"white", alignItems:"right",}}>Little Memon • © 2023</p>
          </HStack>

        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
