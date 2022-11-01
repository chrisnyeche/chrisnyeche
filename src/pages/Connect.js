import { useState } from "react";
import { Box, Center, Text, useColorMode, Button, Flex, Link } from "@chakra-ui/react";
import Contact from "../components/Contact";
import Carousel from "../plugins/Carousel";

// Icons
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Page Graphics
import AnimateCursor from "../plugins/AnimateCursor";
import Particle from "../plugins/Particle";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { Player } from "@lottiefiles/react-lottie-player";

// Resume
import Resume from "../Resume.pdf"

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
      tag: "Code Base:",
      answer: "Web/Mobile.",
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
      tag: "Personal Skills:",
      answer: " Communication, Public Speaking, Teamwork, Time Management, Leadership",
    },
    {
      tag: "Career Skills:",
      answer: "Front-End Programming: HTML5, CSS3, AJAX, Wordpress Engineering, Verbal and Written Communication, Web Components Development, Bug Resolution, Project Scoping and Production Worm, Website Maintenance, End user training, User Research and Analysis.",
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
          <Box as={"section"} display={"flex"} h="65vh" flexDirection={{ base: "column", lg: "row-reverse" }} padding={{ base: 3, md: 5 }} justifyContent={"space-between"} mt={5} gap={5} alignItems={"center"} backgroundColor={{ base: "transparent", lg: "rgba(112, 71, 235, .15)" }} backdropFilter={"blur(5px)"} boxShadow={{ base: "none", lg: "10px 20px rgba(112, 71, 235, .5)" }} borderRadius={"20px"} m={{ base: "1", md: "10" }}>
            {/* Biography */}
            <Box w={{ base: "100%", lg: "60%" }}>
              <Text as={"h2"} fontSize={"40px"} className={"font-cyberpunk"}>
                ABOUT ME
              </Text>
              {Biography.map((bio) => {
                return (
                  <Text fontSize={{base: "16px", md: "18px", lg: "20px"}} className={"font-recoleta"}>
                    {bio.tag} <Text as="span"> {bio.answer} </Text>
                  </Text>
                );
              })}
              <Box my={3}>
              <Link  href={Resume} color="white" download bg={"black"} p={2} borderRadius={"10px"} _hover={{textDecoration: "none", color: "white", bg: "purple.700"}}> Download Resume</Link>
              </Box>
            </Box>

            {/* Tech Laptop */}
          <Box w={{ base: "100%", lg: "40%" }} display={{base: "none", lg: "block"}}>
              <Box w={"100%"}>
                <Player autoplay loop src={"https://assets8.lottiefiles.com/packages/lf20_lqbx9x0z.json"} />
              </Box>
            </Box>
          </Box>

            <Contact />

            
          {/* ========= Components ============= */}
          {/* Light & Dark Mode */}
          <Center my={2} className="fixed-top">
            <Button onClick={toggleColorMode} className={"floating"} rounded="full">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Center>
          <AnimateCursor />
          {/* Particle */}
          <Box position={"absolute"} zIndex={"-1"}>
            <Particle />
          </Box>
          {/* Footer */}
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default Connect;
