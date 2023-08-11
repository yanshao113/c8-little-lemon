import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShopware} from "@fortawesome/free-brands-svg-icons";




const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="20"
    >
      <Image src={imageSrc} alt={title} borderRadius="20" />
      <VStack spacing={4} alignItems="flex-start" p={2}>
        <Heading as="h4" size="md">{title}</Heading>
        <Text color="#grey" fontSize="lg">{description}</Text>
        <HStack fontWeight="bold">
          <p>Order now</p>
          <FontAwesomeIcon icon={faShopware} size="lg"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
