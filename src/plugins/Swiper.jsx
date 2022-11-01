import { Box, Text, Flex, Image, Link } from '@chakra-ui/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import required modules
import { EffectCards } from "swiper";

// Images
import Victor from "../images/Victor.jpg";
import Miebaka from "../images/Miebaka.jpg";
import Enojo from "../images/Enojo.jpg";
import Hanniel from "../images/Hanniel.jpg";
import Favour from "../images/Favour.jpg";
import Rejoice from "../images/Rejoice.jpg";
import Fidelis from "../images/Fidelis.jpg";
import Samuel from "../images/Samuel.jpg";
import Belema from "../images/Belema.jpg";

import "./Swiper.css"



const TeamMembers = [
    {
      image: Victor,
      name: "Victor Ejiogu",
      position: "Wordpress Engineer",
      email: "victor.ejiogu@ust.edu.ng",
      stack: "Php, Laravel, JavaScript.",
    },
    {
      image: Miebaka,
      name: "Miebaka LongJohn",
      position: "Frontend Developer",
      email: "miebakalongjohn@gmail.com",
      stack: "Html, Css, Bootstrap, JavaScript,",
    },
    {
      image: Enojo,
      name: "Enojo Godwin",
      position: "Tech Expert",
      email: "enojogodwin@gmail.com",
      stack: "Figma, Css Animation, Bootstrap, JavaScript,",
    },
    {
      image: Hanniel,
      name: "Hanniel Daniel",
      position: "Backend Developer",
      email: "dhanniel21@gmail.com",
      stack: "Node, React, Express, MongoDB.",
    },
    {
      image: Favour,
      name: "Favour Ekeleme",
      position: "Frontend Developer",
      email: "favourekeleme58@gamil.com",
      stack: "Html, Css, JavaScript, React.",
    },
    {
      image: Rejoice,
      name: "Rejoice Ebenezer",
      position: "Game Developer",
      email: "rejoiceuchechukwu@gmail.com",
      stack: "Html, Css, JavaScript, C#, Unity",
    },
    {
      image: Fidelis,
      name: "Fidelis Oji",
      position: "UI/UX Designer",
      email: "fidelisoji7@gmail.com",
      stack: "Figma, Trello, MilaNote, Jira.",
    },
    {
      image: Samuel,
      name: "Samuel Ayotunde",
      position: "Product Designer",
      email: "samuelayotunde1234@gmail.com",
      stack: "Figma, Behance, Framer.",
    },
    {
      image: Belema,
      name: "Belema Achego",
      position: "Mobile Developer",
      email: "tamunobelemaachego@gmail.com",
      stack: "Python, Java, Flutter, React, Next",
    },
  ]

const TeamCard = () => {
  return (
    <Box overflow={"hidden"} mb={{base: "80px", md: 0}}>
     <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {TeamMembers.map((Team) =>{
            return(
                <SwiperSlide>
                <Flex flexDirection={{base: "column", md: "column"}} alignItems={"center"} justifyContent={"center"} textAlign={"center"} overflow={'hidden'}  py={5}>
                    <Image mx={4} src={Team.image} w={40} rounded={"full"} loading="lazy"/>
                    <Box h="150px" pt={3} w="25rem" className={"font-nebula"} fontSize={{base: "14px", md: "20px"}} lineHeight={"9"} dispaly={"none"}>
                        <Text>Name: <span className='font-bosch'>{Team.name}</span> </Text>
                        <Text>Position: <span className='font-bosch'>{Team.position}</span> </Text>
                        <Text display={{base: "none", md: "block"}}>Stack: <span className='font-bosch'>{Team.stack}</span> </Text>
                        <Link href={`mailto:${Team.email}`} bg={"purple.500"} mt={5} p={3} w={"100px"} borderRadius={"19px"}>Connect </Link>
                    </Box>
                </Flex>
            </SwiperSlide>
            )

        })}
      </Swiper>
    </Box>
  )
}

export default TeamCard;

