import React, { Component } from "react";
import { Box, Button, Icon, Link, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "./ProSlider.css"
import {FaPlayCircle} from "react-icons/fa"


export default class ProSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
        infinite: true,
        // rtl: true,
        autoplay: true,
        speed: 500,
        // autoplaySpeed: 1000,
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
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
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
    return (
      <Box mb={"106px"} ms={{lg: 3}}>
        <Text my={"5"} as={"h2"} className="font-cyberpunk" fontSize={{ base: "5xl", lg: "7xl" }}>MY PROJECTS</Text>
        <Box overflow={"hidden"}>
        <Slider ref={c => (this.slider = c)} {...settings} gap={3}>
          {/* Designopers */}
          <Box key={1} px={{base: "30px", lg:"0px"}}>
              <figure class="effect-julia">
                <img src={"https://www.nftsstreet.com/wp-content/uploads/2022/01/Webp.net-gifmaker.gif"} alt="img22" />
                <figcaption>
                  <h2>
                   <span>WE PRINT WALLS</span>
                  </h2>
                  <div>
                    <p>A German Wall printing Company</p>
                  </div>
                  <a target={"blank"} href="https://weprintwalls.de/">View more</a>
                </figcaption>
              </figure>
          </Box>
          {/* Umake */}
          <Box key={2} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-goliath">
            <img src={"https://nftartwork.co.uk/wp-content/uploads/2021/08/Mike-Tyson.gif"} alt="img23" />
            <figcaption>
              <h2>
               <span>DWH</span>
              </h2>
              <p>Booking & Ecommerce.</p>
              <a target={"blank"} href="dwh-warehandel.de">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Splash Music */}
          <Box key={3} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-apollo">
            <img src={"https://dls.so/mint/img/avatar.gif"} alt="img18" />
            <figcaption>
              <h2>
                Splash <span>Music</span>
              </h2>
              <p>The Music Application.</p>
              <a target={"blank"} href="https://splashmusic.netlify.app/">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* GateHouse */}
          <Box key={4} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-duke">
            <img src="https://cdn.dribbble.com/users/1382369/screenshots/17876859/media/f3686481b564dd299418692bc8384caf.gif" alt="img03" />
            <figcaption>
              <h2>
                Gate <span>House</span>
              </h2>
              <p>
                <Link target={"blank"} href="https://gatehouse.idea.cinfores.com/" _hover={{color: "white"}}>
                <Text> A Visitor tracking app</Text>
                </Link>
              </p>
            </figcaption>
          </figure>
          </Box>
          {/* Netflix */}
          <Box key={5} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-terry">
            <img src="https://airnfts.s3.amazonaws.com/profile-images/20220221/0xbbC213d442cDe37138b4383565D44dB3F4F79aff_1645477060045.gif" alt="img16" />
            <figcaption>
              <h2>
                <Text as={"span"} color="red">NETFLIX</Text>
              </h2>
              <p>
                <a href="./">
                  P
                </a>
                <a href="./">
                <Icon as={FaPlayCircle} color={"red"}/>
                </a>
                <a href="./">
                A
                </a>
                <a href="./">
                Y
                </a>
              </p>
            </figcaption>
          </figure>
          </Box>
          {/* Lemon Squeezy */}
          <Box key={6} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-kira">
            <img src="https://media.tenor.com/m_tKM2ApZu0AAAAC/%D0%BA%D0%BB%D0%B0%D1%81%D1%81-avatar.gif" alt="img17" />
            <figcaption>
              <Text as={"h2"} color="black">
                Lemon <span>Squeezy</span>
              </Text>
              <p>
                <a target={"blank"} href="https://lemonsqueezy.netlify.app">
                 Sell Digital products
                </a>
              </p>
            </figcaption>
          </figure>
          </Box>
          {/* Movie Hub */}
          <Box key={7} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-steve">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/71a67a134500327.61d6d49b57b8f.gif" alt="img29" />
            <figcaption>
              <h2>
                Movie <span>Hub</span>
              </h2>
              <p>View your favourite movies.</p>
              <a target={"blank"} href="https://chrisnyeche.github.io/movie_hub/">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Nanosite */}
          <Box key={8} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-moses">
            <img src="https://nftcalendar.io/storage/uploads/events/2022/3/cEk4iKfB2JVEj2OfwwPMBD8vuwYbcBdzwOduZXtU.gif" alt="img24" />
            <figcaption>
              <h2>
                Nano <span>Site</span>
              </h2>
              <p>Bio site for creative minds.</p>
              <a target={"blank"} href="https://nanosite.onrender.com/">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Bluewaether */}
          <Box key={9} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-jazz">
            <img src="https://rndmcharacters-s3.s3.amazonaws.com/InvisibleFriends-roadmap/KITH_web.gif" alt="img25" />
            <figcaption>
              <h2>
                Blue Weather <span>App</span>
              </h2>
              <p>View weather condition</p>
              <a target={"blank"} href="https://blueweather.onrender.com/">View more</a>
            </figcaption>
          </figure>
          </Box>
        </Slider>
        </Box>
        {/* Next & Previous Buttons */}
        <Box textAlign={"center"} mt={7} mb={9}>
          <Button className={"glow-on-hover font-varino"}  onClick={this.previous} mx={4}>
            Previous
          </Button>
          <Button className={"glow-on-hover font-varino"}  onClick={this.next}>
            Next
          </Button>
        </Box>
      </Box>
    );
    }} 
