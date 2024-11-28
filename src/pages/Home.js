import {
  Box,
  Center,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import AnimateCursor from "../plugins/AnimateCursor";
import EyesFollow from "../plugins/MightyMouse";
import Particle from "../plugins/Particle";
import Type from "../plugins/Type";
import Astronaut from "../images/astronaut.png";
import Create from "./Create";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [emojiText, setEmojiText] = useState("View Portfolio");

  const isNameEmpty = name.trim() === "";

  const handleChange = (e) => setName(e.target.value);

  const handleEnter = (e) => e.key === "Enter" && handleClick();

  const handleClick = () => {
    if (isNameEmpty) return;

    setEmojiText("Loading... 😀");
    setTimeout(() => setLoader(true), 3000);
  };

  useEffect(() => {
    if (!isNameEmpty) {
      window.localStorage.setItem("visitors_name", name);
    }
  },);

  return (
    <Box as="main">
      {!loader ? (
        <Flex
          h="100vh"
          justify="center"
          align="center"
          direction="column"
          position="relative"
        >
          <Center position="absolute" top="10px" display={{ base: "none", md: "block" }}>
            <EyesFollow />
          </Center>
          <Box mx="auto" px={3}>
            <Type />
          </Box>
          <Box mx="auto" my={8} w={{ base: "100%", lg: "40%" }} px={3}>
            <FormControl isInvalid={isNameEmpty}>
              <FormLabel>What is your name?</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
                onKeyUp={handleEnter}
              />
              {!isNameEmpty ? (
                <FormHelperText>
                  Thanks,{" "}
                  <Text as="span" color="#FFC233">
                    {name}
                  </Text>
                  . You can now continue.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <Button onClick={handleClick} my={2}>
              {emojiText}
            </Button>
          </Box>
          <AnimateCursor />
          <Box
            position="absolute"
            left="10px"
            top="20px"
            w="40"
            display={{ base: "none", md: "block" }}
          >
            <Player autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_pvghcvuc.json" />
          </Box>
          <Box
            position="absolute"
            left="10px"
            bottom="20px"
            w="40"
            display={{ base: "none", md: "block" }}
          >
            <Player autoplay loop src="https://assets5.lottiefiles.com/packages/lf20_dwmb4mrt.json" />
          </Box>
          <Box
            position="absolute"
            left={{ base: "10px", md: "50%" }}
            bottom="20px"
            display={{ base: "none", md: "block" }}
          >
            <Image src={Astronaut} alt="Astronaut" w={{ base: 20, md: 40 }} />
          </Box>
          <Box
            position="absolute"
            right="40px"
            top="20px"
            w="40"
            display={{ base: "none", lg: "block" }}
          >
            <Player autoplay loop src="https://assets10.lottiefiles.com/packages/lf20_l4ny0jjm.json" />
          </Box>
          <Box zIndex="-1" position="absolute">
            <Particle />
          </Box>
        </Flex>
      ) : (
        <Create value={name} />
      )}
    </Box>
  );
};

export default Home;
