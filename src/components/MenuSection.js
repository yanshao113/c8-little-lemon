import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const dishes = [
  {
    title: "Creamy Tomato Pasta",
    description:
      "It perfectly pairs the sweet and savory of coconut cream, with the rich umami of caramelized tomato paste and the spicy bite of crush red pepper. ",
    getImageSrc: () => require("../images/pasta.png"),
  },
  {
    title: "Greek Salad ",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/salad.png"),
  },
  {
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
    getImageSrc: () => require("../images/dish3.png"),
  },

];

const MenuSection = () => {
  return (
    <FullScreenSection
     justifyContent="center"
      backgroundColor="#495e57"
      isDarkBackground
      p={8}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" id="menu-section" color="black">
        Our Menu
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={12}

      >
        {dishes.map((dish) => (
          <Card
            key={dish.title}
            title={dish.title}
            description={dish.description}
            imageSrc={dish.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default MenuSection;
