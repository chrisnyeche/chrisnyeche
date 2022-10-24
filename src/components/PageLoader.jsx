import { Box, Center, Flex } from '@chakra-ui/react'
import Particle from '../plugins/Particle'
import AnimateCursor from '../plugins/AnimateCursor'
import EyesFollow from '../plugins/MightyMouse'

const PageLoader = () => {
  return (
    <Flex h="100vh" justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column" }} position={"relative"}>
    <Center position={"absolute"} top={"10px"}>
      <EyesFollow />
    </Center>

    <AnimateCursor />
 
    {/* Particle Effect */}
    <Box zIndex={"-1"} position="absolute">
      <Particle />
    </Box>
  </Flex>
  )
}

export default PageLoader;