import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Particle from '../plugins/Particle'
import AnimateCursor from '../plugins/AnimateCursor'
import { Player } from "@lottiefiles/react-lottie-player";


const PageLoader = () => {
  return (
    <Flex h="100vh" justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column" }} position={"relative"}>
    <Player autoplay loop src={"https://assets9.lottiefiles.com/temp/lf20_XyXrJ3.json"} />
    <AnimateCursor />
    
      {/* Wrong Planet */}
      <Center position={"absolute"} bottom={"10px"}>
        <Text as={"h2"} color="#7E42FF" className="font-spaceranger" fontSize={{ base: "3xl", lg: "5xl" }}>
          Time Travelling...
        </Text>
      </Center>
    
    {/* Particle Effect */}
    <Box zIndex={"-1"} position="absolute">
      <Particle />
    </Box>
  </Flex>
  )
}

export default PageLoader;