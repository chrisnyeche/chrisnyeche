import { Input, Flex, Box, Center, FormControl, FormLabel, FormHelperText, FormErrorMessage, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import Particle from "../plugins/Particle";
import Hero from "../components/Hero";
import AnimateCursor from "../plugins/AnimateCursor";
import Type from "../plugins/Type";
// import Loading from "../plugins/Loading";
import Projects from "../components/Projects";
import { Player } from "@lottiefiles/react-lottie-player";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import EyesFollow from "../plugins/MightyMouse";
import Astronaut from "../images/astronaut.png";

const LandingPage = () => {
  // Loader state
  const [loader, setLoader] = useState(false);
  // Color mode
  const { colorMode, toggleColorMode } = useColorMode();
  // Question
  const [value, setValue] = useState("");
  // Loading display
  const [display, setDisplay] = useState("none");

  const isError = value === "";

  // handle Change Event
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    value === ""
      ? setLoader(false)
      : setTimeout(() => {
          setDisplay("block");
        }, 500) &&
        setTimeout(() => {
          setLoader(true) && setDisplay("block");
        }, 3000);
  };

  return (
    <Box as={"main"}>
      {!loader ? (
        <Flex h="100vh" justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column" }}>
          <Box mx="auto" px="3">
            <EyesFollow />
            <Type />
          </Box>
          <Box mx="auto" my={8} w={{ base: "100%", lg: "40%" }} px="3">
            {/* Name Form */}
            <FormControl isInvalid={isError}>
              <FormLabel>Before you access this portfolio. Please What is your Name?</FormLabel>
              <Input type="email" value={value} onChange={handleChange} placeholder="Input your name" />
              {!isError ? (
                <FormHelperText>
                  Thank you{" "}
                  <Text as="span" className="font-gordita" color={"#FFC233"}>
                    {value}
                  </Text>{" "}
                  for choosing to view my portfolio. Now you can continue{" "}
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <Button onClick={handleClick} my={2}>
              View Portfolio 😀
            </Button>
          </Box>
          <AnimateCursor />
          {/* Floating Planets */}
          <Box position={"absolute"} left={{ base: "10px" }} top={"20px"} w={"40"} display={{ base: "none", md: "block" }}>
            <Player autoplay loop src={"https://assets2.lottiefiles.com/packages/lf20_pvghcvuc.json"} />
          </Box>
          {/* Floating man */}
          <Box position={"absolute"} left={{ base: "10px" }} bottom={"20px"} w={"40"} display={{ base: "none", md: "block" }}>
            <Player autoplay loop src={"https://assets5.lottiefiles.com/packages/lf20_dwmb4mrt.json"} />
          </Box>
          {/* Astronaut */}
          <Box position={"absolute"} left={{ base: "10px", md: "50%" }} bottom={"20px"}>
            <Image src={Astronaut} className="floating" alt="Falling Astronaut" w={{ base: 20, md: 40 }} />
          </Box>
          {/* Web3 Astronaut */}
          <Box position={"absolute"} right={{ base: "40px" }} top={"20px"} w={"40"} display={{ base: "none", lg: "block" }}>
            <Player autoplay loop src={"https://assets10.lottiefiles.com/packages/lf20_l4ny0jjm.json"} />
          </Box>
          {/* Loading Mode */}
          <Box position={"absolute"} right={"1px"} bottom={"1px"} display={display} w={"40"}>
            <Player autoplay loop src={"https://assets10.lottiefiles.com/packages/lf20_ypej3gd9.json"} />
          </Box>
          {/* Particle Effect */}
          <Box zIndex={1} position="absolute">
            <Particle />
          </Box>
        </Flex>
      ) : (
        <Box position={"relative"} textAlign={"center"}>
          {/* Sun & Moon */}
          <Center my={2} className="fixed-top">
            <Button onClick={toggleColorMode} className={"floating"} rounded="full">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Center>
          <Text className="shimmer font-recoleta" fontSize={{ base: "2.5em", md: "4rem" }}>
            {" "}
            WELCOME TO MY WORLD{" "}
          </Text>
          <Text className="shimmer" fontSize={{ base: "1.5em", md: "2rem" }} textTransform={"uppercase"}>
            {" "}
            {value}{" "}
          </Text>
          <Hero value={value} />
          <Projects />
          <AnimateCursor />
          <Box position={"absolute"} zIndex={1}>
            <Particle />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
