import { Heading, Avatar, Box, Image, Flex, Text, Stack, Button, } from "@chakra-ui/react";

export default function TutorCard() {
  const Tutors = [
    {
      CoverImage: "https://media.tenor.com/GVk4jB2u_i8AAAAd/coding.gif",
      avatar: "https://avatars.githubusercontent.com/u/60342841?v=4",
      name: "Golden Azubuike",
      description: "Software Engineer",
      connect: "",
    },
    {
      CoverImage: "https://miro.medium.com/max/1200/1*3uQwzB8W3XWdgW4Mjuc9yg.gif",
      avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQE8HYZHfkKnpw/profile-displayphoto-shrink_800_800/0/1654512714303?e=1671667200&v=beta&t=It8X9_neH2CphR-LGHfPFsNG0NbO5kOaUtP3dpAhYfI",
      name: "Braide Shekinah",
      description: "UI/UX Engineer",
      connect: "",
    },
    {
      CoverImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--NzgxrJEe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mdvk568xm4hmk3bjfsqs.gif",
      avatar: "https://pbs.twimg.com/profile_images/1477312025554419713/YxHvu_SD_400x400.jpg",
      name: "Bob Ziroll",
      description: "Head of Ed. in Scrimba",
      connect: "",
    },
    {
      CoverImage: "https://uploads.sitepoint.com/wp-content/uploads/2017/01/1483422029image03.gif",
      avatar: "https://media-exp1.licdn.com/dms/image/C4E0DAQFf8wG-Ck50DQ/learning-author-crop_200_200/0/1643745358734?e=1666972800&v=beta&t=ZvuJvGLEWvO38-CRV1hcx9aveLrsQBwlzNnWtc4J9LQ",
      name: "Christina Truong",
      description: "Front-End Developer",
      connect: "",
    },
    {
      CoverImage: "https://media3.giphy.com/media/L8K62iTDkzGX6/giphy.gif",
      avatar: "https://media-exp1.licdn.com/dms/image/C560DAQGQQYA5mAktCw/learning-author-crop_200_200/0/1576191276160?e=1666962000&v=beta&t=1fy_3sYnP_I8ntGelmC88BUvjJODZM0KP9hFE3B5jCY",
      name: "M. Rand-Hendriksen",
      description: "Web Designer",
      connect: "",
    },
  ];
  return (
    <Box>
      <Text as={"h2"} className={"font-cyberpunk"} fontSize={"96px"}>TUTORS</Text>
      <Flex p={6} w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={{base: "column", lg: "row"}}>
      {Tutors.map((tutor) => {
        return (
          <Box maxW={{base: "330px", md: "400px", lg: "250px"}} w={"full"}  boxShadow={"2xl"} rounded={"md"} overflow={"hidden"} m={5}>
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
