import React from "react";
import { HStack, Heading, VStack,Text,Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import dish1 from "../images/dish1.png"



const historydata={
  title:"Little Lemon",
  subTitle:"Chicago",
  history:
  'Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.',
  history2:'The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.',
}

const AboutSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#e8edec"
    display="flex"
    flexWrap="wrap"
  >
  <HStack spacing={150} width={1500} >
  <VStack spacing={20} alignItems="flex-start" p={2}>
    <VStack spacing={2} alignItems="flex-start">
      <Heading id="aboutus" as="h4" color ="#F4CE14"style={{fontSize:80}}>{historydata.title}</Heading>
      <Heading as="h3" color ="#495e57"style={{fontSize:60}}>{historydata.subTitle}</Heading>
    </VStack>
    <VStack spacing={5}>
      <Text color="black" style={{fontSize:25, fontFamily:"monospace"}}>{historydata.history}</Text>

    </VStack>
  </VStack>
    <Image src={dish1} alt={historydata.title} borderRadius="20" height="700px" />
  </HStack>


  </FullScreenSection>
);

export default AboutSection;
