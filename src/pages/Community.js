import { useState } from "react";
import { Box, Center, Text, Flex, useColorMode, Button, Avatar } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

// Icons
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Images
import ArtGal from "../images/artgal.jpg";

// Page Graphics
import AnimateCursor from "../plugins/AnimateCursor";
import Particle from "../plugins/Particle";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

// Components
import TutorCard from "../components/TutorCard";

import CryptoCity from "../plugins/cyrpto-city.json";

const Community = () => {
  // Color mode
  const { colorMode, toggleColorMode } = useColorMode();
  // Loader state
  const [loader, setLoader] = useState(false);

  const AvatarCard = [
    // Black Man
    {
      src: "https://mir-s3-cdn-cf.behance.net/projects/404/f15908140414401.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpg",
      alt: "purple",
      firstposition: "10%",
      secondposition: "30%",
    },
    // Red Barbie
    {
      src: "https://snobette.com/wp-content/uploads/2021/12/nike-rtfkt-2-1024x819.jpg",
      alt: "purple",
      firstposition: "75%",
      secondposition: "88%",
    },
    // Art Dark Gal
    {
      src: ArtGal,
      alt: "purple",
      firstposition: "15%",
      secondposition: "10%",
    },
    // Dark Boy Grin
    {
      src: "https://images1.the-dots.com/4855060/file.jpg?p=projectImageFullJpg",
      alt: "purple",
      firstposition: "20%",
      secondposition: "90%",
    },
    // Lion Man
    {
      src: "https://i.pinimg.com/originals/79/6c/29/796c2975ae64e163566bade45f579e9c.jpg",
      alt: "purple",
      firstposition: "10%",
      secondposition: "75%",
    },
    // Purple Submarine
    {
      src: "https://joesdaily.com/wp-content/uploads/2022/01/women-rise-nft-project-960x960.jpg",
      alt: "purple",
      firstposition: "40%",
      secondposition: "23%",
    },
    // Gangsta Girl Hat
    {
      src: "https://i1.sndcdn.com/artworks-7yeVuV7KzpfTMZbF-0NDE9w-t500x500.jpg",
      alt: "purple",
      firstposition: "50%",
      secondposition: "75%",
    },
    // Fresh LightSkin Boy
    {
      src: "https://mir-s3-cdn-cf.behance.net/projects/404/7927d8140413249.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpg",
      alt: "purple",
      firstposition: "70%",
      secondposition: "10%",
    },
  ];
  setTimeout(() => {
    setLoader(true);
  }, 3000);
  return (
    <Box>
      {!loader ? (
        <PageLoader />
      ) : (
        <Box>
          {/* Tech Stack */}
          <Flex justifyContent={"center"} mx="auto" my={"20px"} textAlign="center" position={"relative"}>
            <Text as={"h2"} className="font-cyberpunk" w={"100%"} fontSize={{ base: "5xl", lg: "8xl" }}>
              WEB COMMUNITY
            </Text>
          </Flex>

          <Box position={"relative"}>
            {/* Web 3.0 Crypto City Animation */}
            <Center w={{ base: "100%", lg: "50%" }} mx="auto">
              <Player autoplay loop src={CryptoCity} />
            </Center>

            {/* Avatars */}
            {AvatarCard.map((avatar) => {
              return (
                <Box position={"absolute"} top={avatar.firstposition} left={avatar.secondposition} className={"floating"} display={{ base: "none", lg: "block" }}>
                  <Avatar
                    size={"xl"}
                    src={avatar.src}
                    alt={avatar.alt}
                    css={{
                      border: "2px solid white",
                    }}
                  />
                </Box>
              );
            })}
          </Box>

          {/* Tutor Card */}
          <Box my={9}>
            <TutorCard />
          </Box>

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
