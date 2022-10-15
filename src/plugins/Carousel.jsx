import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

const Carousel = () => {
    const settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        rtl: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 4,
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
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        rtl : false,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 4,
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
              slidesToShow: 1,
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
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              1
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              2
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              3
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              4
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              5
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              6
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              7
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              8
            </Box>
          </Box>
        </Slider>
        <Slider {...settings2} gap={5}>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              1
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              2
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              3
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              4
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              5
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              6
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              7
            </Box>
          </Box>
          <Box h="250px" w="210px" bg="transparent" p="5">
            <Box backgroundColor={"rgba(112, 71, 235, .15)"} backdropFilter={"blur(5px)"} shadow={"lg"} zIndex={2} w="250px" h="150px" borderRadius={"20px"} padding={"10px"}>
              8
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default Carousel;
