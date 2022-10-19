import { Box, Button, Text, HStack, Center } from "@chakra-ui/react";
import {} from "bootstrap";
import { Component } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Flipcard.css";
import hello from "../plugins/welcome.json"

class FlipCard extends Component {
  render() {
    return (
      <Box as={"section"}>
        <BlogCard />
      </Box>
    );
  }
}
export default FlipCard;


const MainArea = () => {
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();
    const styles = {
      fontSize: 35,
    };

    if (hours < 12) {
      timeOfDay = "Morning ☀️";
      styles.color = "#D90000";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon 🔆";
      styles.color = "#04733F";
    } else {
      timeOfDay = "Night 🌃";
      styles.color = "#04756F";
    }
    return (
      <Box className="main-area">
        <Box className="blog-post">
          <Text as="h2" className={"font-recoleta"} fontWeight="extrabold" lineHeight={"10"} fontSize={{base: "28px", md: "34px"}} textAlign={"center"}>
            Good {timeOfDay}
          </Text>
          <Text as="h3" className={"font-recoleta"} fontWeight="extrabold" lineHeight={"10"} fontSize={{ base: "16px", md: "20px" }} my={3}>
            Which of the following is not a default REACT hook?
          </Text>
        </Box>
      </Box>
    );
  }

class BlogCard extends Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };
  render() {
    const frontButtons = ["DeferredValue", "InsertionEffect", "SyncExternalStore"];
    const backButtons = ["Height", "Water", "Shadow"];
    return (
      <Box className={"card-container" + (this.state.flipped ? " flipped" : "")} zIndex={2} w={{ base: "100%", lg: "100%" }} h={"600px"} padding={"10px"}>
        {/* Front Flipcard */}
        <Box className="front" textAlign={{ base: "start", md: "center" }}>
          <Box w={{ base: "100%", md: "50%" }} mx="auto">
            <Player autoplay loop src={hello} />
          </Box>
          <MainArea />
          {/* Front Buttons */}
          <Center>
            <HStack flexDirection={{ base: "column", md: "row" }} gap={2} mx="auto">
              {frontButtons.map((btn) => {
                return (
                  <Button key={btn} className="shake" bg="rgba(112, 71, 235, 0.15)" _hover={{ bg: "red" }} w="140px" h="40px">
                    {btn}
                  </Button>
                );
              })}
              <Button className="shake" bg="rgba(112, 71, 235, 0.15)" _hover={{ bg: "green" }} onClick={this.flip} w="140px" h="40px">
                FlipMode
              </Button>
            </HStack>
          </Center>
        </Box>

        {/* Back Flipcard */}
        <Box className="back">
          <Box w={{ base: "100%", lg: "70%" }} mx="auto">
            <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json" />
          </Box>
          <Text as="h2" className={"font-recoleta"} fontWeight="extrabold" lineHeight={"10"} fontSize={"34px"} textAlign={"center"}>
            RIDDLE
          </Text>
          <Text as="h3" className={"font-recoleta"} fontWeight="extrabold" lineHeight={"10"} fontSize={{ base: "16px", md: "20px" }} my={3}>
            I am something people love or hate. I change people’s appearances and thoughts. Some people might want to try and hide me, but I will show. No matter how hard people try, I will never go down. What am I?
          </Text>
          <Center>
            <HStack flexDirection={{ base: "column", md: "row" }} gap={2}>
              <Button onClick={this.flip} _focus={{ bg: "green" }} w="140px" h="40px">
                Age
              </Button>
              {backButtons.map((btn) => {
                return (
                  <Button _focus={{ bg: "red" }} w="140px" h="40px" key={btn}>
                    {btn}
                  </Button>
                );
              })}
            </HStack>
          </Center>
        </Box>
      </Box>
    );
  }
}
