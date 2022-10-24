import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

const Carousel = () => {
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    rtl: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Carousel settings

  return (
    <Box>
      {/* Carousel */}
      <Box>
        <Slider {...settings1} gap={5}>
          {/* Wordpress */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"}>
              <Player autoplay loop src={"https://assets10.lottiefiles.com/packages/lf20_grhdadig.json"} />
            </Box>
          </Box>
          {/* React */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"}>
              <Player autoplay loop src={"https://assets7.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"} />
            </Box>
          </Box>
          {/* Next Js */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <Image className="animate__animated animate__delay-1s animate__pulse animate__infinite	infinite" src={"https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"} alt={"Next js logo"} w="20" />
            </Box>
          </Box>
          {/* Javascript */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <Image className="animate__animated animate__delay-1s animate__swing animate__infinite	infinite" src={"https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png"} alt={"javascript logo"} w={{base: "16", md: 20}}  />
            </Box>
          </Box>
          {/* Chakra */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <Image className="animate__animated animate__delay-1s animate__bounce animate__infinite	infinite" src={"https://avatars.githubusercontent.com/u/54212428?s=280&v=4"} alt={"Chakra UI logo"} w="20" rounded={"full"} />
            </Box>
          </Box>
          {/* Bootstrap */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <Image className="animate__animated animate__delay-1s animate__rubberBand animate__infinite	infinite" src={"https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"} alt={"Bootstrap logo"} w="50" />
            </Box>
          </Box>
          {/* CSS */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <Image className="animate__animated animate__delay-1s animate__zoomInRight animate__infinite	infinite" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"} alt={"Css logo"} w={{base: "16", md: 20}} />
            </Box>
          </Box>
          {/* Html */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <Image className="animate__animated animate__delay-1s animate__heartBeat animate__infinite	infinite" src={"https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png"} alt={"Css logo"} w="20" />
            </Box>
          </Box>
          {/* Figma */}
          <Box h="170px" w="150px" bg="transparent" p={"3"}>
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w={{base: "100px", md: "150px"}} h={{base: "100px", md: "150px"}}  borderRadius={"50%"} padding={"10px"}>
              <Player autoplay loop src={"https://assets7.lottiefiles.com/packages/lf20_xx5oa49z.json"} />
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default Carousel;
