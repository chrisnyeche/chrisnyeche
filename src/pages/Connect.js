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

  const Biography = [
    {
      tag: "Name:",
      answer: "Chris Nmasichi F. Nyeche",
    },
    {
      tag: "Location:",
      answer: "Port Harcourt, Nigeria",
    },
    {
      tag: "Style Of Work:",
      answer: "Remote/Freelance/Hybrid",
    },
    {
      tag: "Stack:",
      answer: "Web 3.0 Front-End Developer",
    },
    {
      tag: "Code Base:",
      answer: "Web/Mobile.",
    },
    {
      tag: "Professional Skills:",
      answer: " Communication, Public Speaking, Teamwork, Time Management, Leadership",
    },
  ];
  return (
    <Box>
      {!loader ? (
        <PageLoader />
      ) : (
        <Box as="main">
          {/* Tech Stack */}
          <Flex justifyContent={"center"} mx="auto" my={"20px"} textAlign="center" position={"relative"}>
            <Text as={"h2"} className="flick font-cyberpunk" data-heading="MY TECH STACK" w={"100%"} fontSize={{ base: "5xl", lg: "7xl" }}></Text>
          </Flex>

          {/* Vr animation */}
          <Center w={{ base: "100%", lg: "60%" }} mx="auto">
            <Player autoplay loop src={"https://assets6.lottiefiles.com/packages/lf20_p8xzlbof.json"} />
          </Center>

          {/* Stacks */}
          <Box mt="10px">
            <Carousel />
          </Box>

          {/* About Me */}
          <Box as={"section"} display={"flex"} h="50vh" flexDirection={{ base: "column", lg: "row-reverse" }} padding={{ base: 3, md: 5 }} justifyContent={"space-between"} mt={5} gap={5} alignItems={"center"} backgroundColor={{ base: "transparent", lg: "rgba(112, 71, 235, .15)" }} backdropFilter={"blur(5px)"} boxShadow={{ base: "none", lg: "10px 20px rgba(112, 71, 235, .5)" }} borderRadius={"20px"} m={{ base: "1", md: "10" }}>
            {/* Biography */}
            <Box w={{ base: "100%", lg: "60%" }}>
              <Text as={"h2"} fontSize={"40px"} className={"font-cyberpunk"}>
                ABOUT ME
              </Text>
              {Biography.map((bio) => {
                return (
                  <Text fontSize={"20px"} className={"font-recoleta"}>
                    {bio.tag} <Text as="span"> {bio.answer} </Text>
                  </Text>
                );
              })}
            </Box>

            {/* Tech Laptop */}
          <Box w={{ base: "100%", lg: "40%" }} display={{base: "none", lg: "block"}}>
              <Box w={"100%"}>
                <Player autoplay loop src={"https://assets8.lottiefiles.com/packages/lf20_lqbx9x0z.json"} />
              </Box>
            </Box>
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
