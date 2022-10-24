import { Box, Flex, Center, useColorMode, Button, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Nopage from "../plugins/404.json";

// Icons
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Page Graphics
import AnimateCursor from "../plugins/AnimateCursor";
import Particle from "../plugins/Particle";

function NoPage() {
  // Color mode
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
      <Player autoplay loop src={Nopage} />

      {/* Sun & Moon */}
      <Center my={2} className="fixed-top">
        <Button onClick={toggleColorMode} className={"floating"} rounded="full">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Center>

      {/* Wrong Planet */}
      <Box position={"absolute"} bottom={"0"} right={"5%"}>
        <Text as={"h2"} color="#7E42FF" className="font-cyberpunk" fontSize={{ base: "3xl", lg: "5xl" }}>
          Wrong Planet!
        </Text>
      </Box>
      <AnimateCursor />
      {/* Particle */}
      <Box position={"absolute"} zIndex={"-1"}>
        <Particle />
      </Box>
    </Flex>
  );
}
export default NoPage;
