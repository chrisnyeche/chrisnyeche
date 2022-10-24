import { useState } from "react";
import { Box, Center, Text, useColorMode, Button } from "@chakra-ui/react";

// Icons
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Page Graphics
import AnimateCursor from "../plugins/AnimateCursor";
import Particle from "../plugins/Particle";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

// Components
import TutorCard from "../components/TutorCard";

const Community = () => {
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
        <Box>
          <TutorCard/>

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

export default Community;
