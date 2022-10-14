import { Flex, Text, Box, Image, Button, HStack, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MdStar } from "react-icons/md";
import FlipCard from "../plugins/FlipCard";

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
    <Box as={"section"} display={"flex"} h="fit-content" flexDirection={{ base: "column", lg: "row-reverse" }} padding={5} justifyContent={"space-between"} mt={5} gap={5} alignItems={"center"}>
      {/* Flipcard */}
      <Box as={"section"} w={{ base: "100%", lg: "50%" }}>
        <FlipCard value={props.value} />
      </Box>

      {/* Profile */}
      <Box className="font-bosch" backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} borderRadius={"20px"} padding={"10px"} w={{ base: "100%", md: "90%", lg: "50%" }} h={{ base: "100%" }} mt={{ base: "230px", md: "70px", lg: "0px" }} pt={10}>
        <Flex alignItems={"center"} gap={"10"} flexDirection={{ base: "column", lg: "row" }}>
          {/* Profile picture */}
          <Image src={"https://avatars.githubusercontent.com/u/91467592?v=4"} alt={"Chris Nyeche"} width={40} rounded="full" />

          {/* About */}
          <Box textAlign={"center"}>
            {/* Animated Text */}
            <Text fontSize={{base: "18px", md: "25px"}}>
              <TypeAnimation
                sequence={["I am a Developer", 1000, "I am a Designer", 1000, "A Software Engineer", 1000, "I am a Developer", 1000]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "25px" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </Text>
            {/* Social buttons */}
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
          </Box>
        </Flex>

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
