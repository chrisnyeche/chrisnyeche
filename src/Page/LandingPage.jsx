import { Input, Flex, Box, Center, FormControl, FormLabel, FormHelperText, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";
import Particle from "../plugins/Particle";
import Hero from "../components/Hero";
import AnimateCursor from "../plugins/AnimateCursor";
import Type from "../plugins/Type";
import Loading from "../plugins/Loading";
import Projects from "../components/Projects";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
            <Type />
          </Box>
          <Box mx="auto" my={8} w={{base: "100%", lg: "40%"}} px="3">
            <FormControl isInvalid={isError}>
              <FormLabel>Before you access this portfolio. Please What is your Name?</FormLabel>
              <Input type="email" value={value} onChange={handleChange} placeholder="Input your name" />
              {!isError ? <FormHelperText>Thank you {value} for choosing to view my portfolio. Now you can continue</FormHelperText> : <FormErrorMessage>Name is required.</FormErrorMessage>}
            </FormControl>
            <Button onClick={handleClick} my={2}>
              View Portfolio
            </Button>
          </Box>
          {/* Loading Mode */}
          <Box position={"absolute"} right={"1px"} bottom={"1px"} display={display}>
            <Loading />
          </Box>
          <Box zIndex={1} position="absolute">
            <Particle />
          </Box>
        </Flex>
      ) : (
        <Box>
          {/* Sun & Moon */}
          <Center my={2} className="fixed-top">
            <Button onClick={toggleColorMode} className={"floating"} rounded="full">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Center>
          <Hero value={value} />
          <Projects />
          <AnimateCursor />
          <Box zIndex={1} position="absolute">
            <Particle />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
