import { Flex, Text, Box, Image, Button, HStack, List, ListItem, ListIcon, Center } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MdStar } from "react-icons/md";
import FlipCard from "../plugins/FlipCard";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero = (props) => {
  const socialButtons = [
    {
      name: "Facebook",
      leftIcon: <FaFacebook />,
      href: "https://fb.com/chrisnyeche",
      backgroundColor: "#3b5998",
    },
    {
      name: "Github",
      leftIcon: <FaGithub />,
      href: "https://github.com/chrisnyeche",
      backgroundColor: "black",
    },
    {
      name: "LinkedIn",
      leftIcon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/chris-nyeche/",
      backgroundColor: "blue",
    },
    {
      name: "Whatsapp",
      leftIcon: <FaWhatsapp />,
      href: "https://wa.me/09036640844?text=",
      backgroundColor: "#25D366",
    },
  ];
  const values = ["Creativity", "Humility", "Responsibility", "Innovative", "Simplicity"];

  return (
    <Box as={"section"} display={"flex"} h="fit-content" flexDirection={{ base: "column", lg: "row-reverse" }} padding={5} justifyContent={"space-between"} mt={5} gap={5} alignItems={"center"} backgroundColor={{ base: "transparent", lg: "rgba(112, 71, 235, .15)" }} backdropFilter={"blur(5px)"} boxShadow={{ base: "none", lg: "10px 20px rgba(112, 71, 235, .5)" }} borderRadius={"20px"} m={{ base: "3", md: "10" }}>
      {/* Flipcard */}
      {/* <Box as={"section"} w={{ base: "100%", lg: "50%" }}>
        <FlipCard value={props.value} />
      </Box> */}
      <Player autoplay loop src={"https://assets4.lottiefiles.com/packages/lf20_qez3ogw9.json"} />

      {/* Profile */}
      <Box className="font-bosch" padding={"10px"} w={{ base: "100%", md: "90%", lg: "50%" }} h={{ base: "100%" }} pt={10} backgroundColor={{ lg: "transparent", base: "rgba(112, 71, 235, .15)" }} borderRadius={"20px"}>
        {/* Profile picture */}
        <Image src={"https://avatars.githubusercontent.com/u/91467592?v=4"} alt={"Chris Nyeche"} width={"20rem"} rounded="full" mx="auto" />
        {/* About */}
        <Box textAlign={"center"} mx="auto">
          {/* Animated Text */}
          <Text fontSize={{ base: "18px", md: "25px" }} textAlign="center" my={2}>
            <TypeAnimation
              sequence={["I am a Developer", 1000, "I am a Designer", 1000, "A Software Engineer", 1000, "I am a Developer", 1000]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "25px" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </Text>
          {/* Social buttons */}
          <Center>
            <HStack>
              {socialButtons.map((btn) => {
                return (
                  <Box>
                    {/* Desktop */}
                    <Button key={btn.href} color="white" as={"a"} leftIcon={btn.leftIcon} bg={btn.backgroundColor} size={"md"} href={btn.href} textDecoration={"none"} _hover={{ bg: btn.backgroundColor, color: "white" }} display={{ base: "none", lg: "flex" }}>
                      {btn.name}
                    </Button>
                    {/* Mobile */}
                    <Button key={btn.href} color="white" as={"a"} bg={btn.backgroundColor} href={btn.href} textDecoration={"none"} _hover={{ bg: btn.backgroundColor, color: "white" }} margin={0} display={{ base: "flex", lg: "none" }}>
                      {btn.leftIcon}
                    </Button>
                  </Box>
                );
              })}
            </HStack>
          </Center>
        </Box>

        {/* About Me */}
        <Text as={"h1"} fontWeight="800" fontSize={"40px"} className="font-bosch" mt={5}>
          About Me
        </Text>
        <Text className="font-gordita" lineHeight={"tall"} textAlign={"start"}>
          I am Christopher Nmasichi Favour Nyeche. I base in the city of Port Harcourt, Nigeria. &#128512; I started coding in 2019. I have built different websites, applications and I am currently the CEO of Chris Designx inc.
        </Text>
        <Text as="h3" mt={5} fontSize={"20px"}>
          My Core Values are:
        </Text>
        <List as="ul" display={{ base: "block", md: "flex" }} alignItems={"center"}>
          {values.map((value) => {
            return (
              <ListItem key={value} as="li" mx={{ lg: "2" }}>
                <ListIcon as={MdStar} color="yellow.500" />
                {value}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Hero;
