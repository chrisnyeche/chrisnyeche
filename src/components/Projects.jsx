import { Box, Flex, Text } from "@chakra-ui/react";
import FlipCard from "../plugins/FlipCard";
import Carousel from "../plugins/Carousel";
import ProSlider from "../plugins/ProSlider";
import TutorCard from "./TutorCard";
import { Player } from "@lottiefiles/react-lottie-player";

const Projects = () => {
  return (
    <Box as={"section"} mt={{base: "50px", md:"150px"}}>
      {/* Tech Stack */}
      <Flex justifyContent={"center"} mx="auto" position={"relative"} my={"20px"} textAlign="center">
        <Text as={"h2"} className="flick font-cyberpunk" data-heading="MY TECH STACK" w={"100%"} fontSize={{ base: "5xl", lg: "7xl" }}></Text>
      </Flex>

      {/* React Game */}
      <Flex justifyContent={"center"} alignItems={"center"} mx="auto" textAlign="center" flexDirection={{base: "column", md: "row"}}>
        {/* Vr animation */}
        <Box w={{base: "100%", md: "50%"}} display={{base: "none", lg: "block"}}>
        <Player autoplay loop src={"https://assets6.lottiefiles.com/packages/lf20_p8xzlbof.json"} />     
        </Box>
        {/* Flipcard */}
        <Box w={{base: "100%", lg: "50%"}}>
          <FlipCard />
        </Box>
      </Flex>

      {/* Stacks */}
      <Box mt="140px">
      <Carousel />
      </Box>

      {/* Project Slider */}
      <ProSlider />
      <TutorCard />
    </Box>
  );
};

export default Projects;
