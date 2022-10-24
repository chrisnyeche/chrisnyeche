import { Heading, Avatar, Box, Image, Flex, Text, Stack, Button } from "@chakra-ui/react";
import Cristina from "../images/Cristina.png"
import Braide from "../images/Braide.jfif"
import Rand from "../images/Rand.jfif"

export default function TutorCard() {
  const Tutors = [
    {
      CoverImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--NzgxrJEe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mdvk568xm4hmk3bjfsqs.gif",
      avatar: "https://pbs.twimg.com/profile_images/1477312025554419713/YxHvu_SD_400x400.jpg",
      name: "Bob Ziroll",
      description: "Head of Ed. in Scrimba",
      connect: "",
    },
    {
      CoverImage: "https://media.tenor.com/GVk4jB2u_i8AAAAd/coding.gif",
      avatar: "https://avatars.githubusercontent.com/u/60342841?v=4",
      name: "Golden Azubuike",
      description: "Software Engineer",
      connect: "",
    },
    {
      CoverImage: "https://uploads.sitepoint.com/wp-content/uploads/2017/01/1483422029image03.gif",
      avatar: Cristina,
      name: "Christina Truong",
      description: "Front-End Developer",
      connect: "",
    },
    {
      CoverImage: "https://miro.medium.com/max/1200/1*3uQwzB8W3XWdgW4Mjuc9yg.gif",
      avatar: Braide,
      name: "Braide Shekinah",
      description: "UI/UX Engineer",
      connect: "",
    },
    {
      CoverImage: "https://media3.giphy.com/media/L8K62iTDkzGX6/giphy.gif",
      avatar: Rand,
      name: "M. R.-Hendriksen",
      description: "Web Designer",
      connect: "",
    },
  ];
  return (
    <Box>
      <Text as={"h2"} className={"font-cyberpunk"} fontSize={{ base: "5xl", lg: "7xl" }} textAlign={"center"}>
        MY TUTORS
      </Text>
      <Flex p={6} w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column", lg: "row" }}>
        {Tutors.map((tutor) => {
          return (
            <Box maxW={{ base: "330px", md: "400px", lg: "250px" }} w={"full"} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"} m={5}>
              <Image h={"120px"} w={"full"} src={tutor.CoverImage} objectFit={"cover"} />
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  src={tutor.avatar}
                  alt={"Author"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
                    {tutor.name}
                  </Heading>
                  <Text color={"gray.500"}>{tutor.description}</Text>
                </Stack>

                <Button
                  w={"full"}
                  mt={8}
                  bg="#151f21"
                  color={"white"}
                  rounded={"md"}
                  href={tutor.connect}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Connect
                </Button>
              </Box>
            </Box>
          );
        })}
      </Flex>
      <Flex p={6} w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column", lg: "row" }}>
        {Tutors.map((tutor) => {
          return (
            <Box maxW={{ base: "330px", md: "400px", lg: "250px" }} w={"full"} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"} m={5}>
              <Image h={"120px"} w={"full"} src={tutor.CoverImage} objectFit={"cover"} />
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  src={tutor.avatar}
                  alt={"Author"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
                    {tutor.name}
                  </Heading>
                  <Text color={"gray.500"}>{tutor.description}</Text>
                </Stack>

                <Button
                  w={"full"}
                  mt={8}
                  bg="#151f21"
                  color={"white"}
                  rounded={"md"}
                  href={tutor.connect}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Connect
                </Button>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}
