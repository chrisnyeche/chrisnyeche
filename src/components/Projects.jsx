import { Box, Flex, Text } from "@chakra-ui/react";
import Carousel from "../plugins/Carousel";

const Projects = () => {
  return (
    <Box as={"section"} mt={"70px"}>
      <Flex justifyContent={"center"} mx="auto" position={"relative"} my={"40px"} textAlign="center">
        <Text as={"h2"} className="flick font-bosch"  data-heading="MY TECH STACK" w={"100%"} fontSize={{base: "5xl", lg: "7xl"}}></Text>
      </Flex>
      <Carousel />
    </Box>
  );
};

export default Projects;
