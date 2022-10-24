import { useState } from "react";
import { Box, Center, Text, useColorMode, Button, Flex } from "@chakra-ui/react";
import Carousel from "../plugins/Carousel";
import Contact from "../components/Contact";

// Icons
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Page Graphics
import AnimateCursor from "../plugins/AnimateCursor";
import Particle from "../plugins/Particle";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { Player } from "@lottiefiles/react-lottie-player";

const Connect = () => {
  // Color mode
  const { colorMode, toggleColorMode } = useColorMode();
  // Loader state
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 3000);
  return (
    <Box>
      {!loader ? (
        <PageLoader />
      ) : (
        <Box as="main">
          {/* Tech Stack */}
          <Flex justifyContent={"center"} mx="auto" position={"relative"} my={"20px"} textAlign="center">
            <Text as={"h2"} className="flick font-cyberpunk" data-heading="MY TECH STACK" w={"100%"} fontSize={{ base: "5xl", lg: "7xl" }}></Text>
          </Flex>

            {/* Vr animation */}
            <Center w={{ base: "100%", lg: "60%" }} mx="auto">
              <Player autoplay loop src={"https://assets6.lottiefiles.com/packages/lf20_p8xzlbof.json"} />
            </Center>

          {/* Stacks */}
          <Box as="se" mt="10px">
            <Carousel />
          </Box>


          <Contact />

         {/* Sun & Moon */}
         <Center my={2} className="fixed-top">
            <Button onClick={toggleColorMode} className={"floating"} rounded="full">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Center>
          <Footer />
          <AnimateCursor />
          {/* Particle */}
          <Box position={"absolute"} zIndex={"-1"}>
            <Particle />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Connect;
