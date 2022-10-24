import { useState } from "react";
import { Box, Center, Text, Button, useColorMode } from "@chakra-ui/react";

// Icons
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Components
import Hero from "../components/Hero";
import TecHeroes from "../components/TecHeroes";

// Plugins
import ProSlider from "../plugins/ProSlider";

// Page Graphics
import AnimateCursor from "../plugins/AnimateCursor";
import Particle from "../plugins/Particle";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

const Create = ({ value }) => {
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
        <Box as="main" position={"relative"} textAlign={"center"}>
          <Text className="shimmer font-cyberpunk" fontSize={{ base: "2.5em", md: "4rem" }}>
            WELCOME TO MY WORLD
          </Text>
          <Text className="shimmer font-spaceranger__3d" fontSize={{ base: "1.5em", md: "2rem" }} textTransform={"uppercase"}>
            {value}
          </Text>
          <Hero value={value} />
          <TecHeroes />
          <ProSlider />

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

export default Create;
