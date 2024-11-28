import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Particle from "../plugins/Particle";
import AnimateCursor from "../plugins/AnimateCursor";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { useEffect } from "react";

const LoadingMessages = [
  "Preparing for Liftoff...",
  "Launching Into the Cosmos...",
  "Warp Drive Engaged...",
  "Navigating the Stars...",
  "Charting the Galaxy...",
  "Mission Control: Standby...",
  "Entering Orbit...",
  "Scanning for Lifeforms...",
  "Fueling the Rocket...",
  "Activating Thrusters...",
  "Checking Navigation Systems...",
  "Engaging Hyperdrive...",
  "Tuning Into the Nebula...",
  "Hyperjumping to Lightspeed...",
  "Synchronizing Satellites...",
  "Approaching the Event Horizon...",
  "Mapping the Universe...",
  "Entering the Asteroid Belt...",
  "Aligning the Telescopes...",
  "Ready for Stardust Collection...",
  "Awaiting the Green Light from Mission Control...",
  "Plotting the Course...",
  "Checking Spacecraft Systems...",
  "Initializing Space Teleportation...",
  "Collecting Cosmic Data...",
  "Entering the Void...",
  "Fuel Cells Charging...",
  "Preparing Solar Sail...",
  "Entering Warp Zone...",
  "Docking with the Space Station..."
];

const PageLoader = () => {
  const [loadingMessage, setLoadingMessage] = useState("");
  useEffect(() => {
    // Randomly pick a message on page load
    const randomMessage = LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)];
    setLoadingMessage(randomMessage);
  }, []);
  return (
    <Flex
      h="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={{ base: "column" }}
      position={"relative"}
    >
      <Player autoplay loop src={"https://assets9.lottiefiles.com/temp/lf20_XyXrJ3.json"} />
      <AnimateCursor />

      {/* Loading Text */}
      <Center position={"absolute"} bottom={"10px"}>
        <Text
          as="h2"
          color="#7E42FF"
          className="font-spaceranger"
          fontSize={{ base: "3xl", lg: "5xl" }}
        >
          {loadingMessage}
        </Text>
      </Center>

      {/* Particle Effect */}
      <Box zIndex={"-1"} position="absolute">
        <Particle />
      </Box>
    </Flex>
  );
};

export default PageLoader;
