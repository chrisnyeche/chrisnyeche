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
                <img src={"https://cdn.dribbble.com/users/230875/screenshots/15549334/indiadribble.gif"} alt="img22" />
                <figcaption>
                  <h2>
                   <span>NFT Mobile App</span>
                  </h2>
                  <div>
                    <p>NFT Marketplace</p>
                  </div>
                  <a target="_blank" rel="noreferrer" href="https://github.com/chrisnyeche/nft-marketplace/">View more</a>
                </figcaption>
              </figure>
          </Box>
          {/* WarenHandel */}
          <Box key={2} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-goliath">
            <img src={"https://nftartwork.co.uk/wp-content/uploads/2021/08/Mike-Tyson.gif"} alt="img23" />
            <figcaption>
              <h2>
               <span>WarenHandel</span>
              </h2>
              <p>Booking & Ecommerce App</p>
              <a target="_blank" rel="noreferrer" href="https://warenhandel.netlify.app/">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Designopers */}
          <Box key={3} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-apollo">
            <img src={"https://dls.so/mint/img/avatar.gif"} alt="img18" />
            <figcaption>
              <h2>
                Designopers <span>App</span>
              </h2>
              <p>Coming Soon.</p>
              <a target="_blank" rel="noreferrer" href="https://designopers.onrender.com/">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Renaissancee */}
          <Box key={4} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-duke">
            <img src="https://cdn.dribbble.com/users/1382369/screenshots/17876859/media/f3686481b564dd299418692bc8384caf.gif" alt="img03" />
            <figcaption>
              <h2>
              Renaissancee <span>Corp.</span>
              </h2>
              <p>
                <Link href="https://renaissance.onrender.com" _hover={{color: "white"}}>
                <Text> Re-Imagine Africa</Text>
                </Link>
              </p>
            </figcaption>
          </figure>
          </Box>
          {/* Aora */}
          <Box key={5} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-terry">
            <img src="https://airnfts.s3.amazonaws.com/profile-images/20220221/0xbbC213d442cDe37138b4383565D44dB3F4F79aff_1645477060045.gif" alt="img16" />
            <figcaption>
              <h2>
                <Text as={"span"} color="red"><a target="_blank" rel="noreferrer" href="https://github.com/chrisnyeche/aora">AORA <Text as={"span"} color="white">APP</Text></a></Text>
              </h2>
              <p>
                <a target="_blank" rel="noreferrer" href="./">
                  P
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/chrisnyeche/aora">
                <Icon as={FaPlayCircle} color={"red"}/>
                </a>
                <a target="_blank" rel="noreferrer" href="./">
                A
                </a>
                <a target="_blank" rel="noreferrer" href="./">
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
                <a target="_blank" rel="noreferrer" href="https://lemonsqueezy.netlify.app">
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
              <a target="_blank" rel="noreferrer" href="https://chrisnyeche.github.io/movie_hub/">View more</a>
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
              <a target="_blank" rel="noreferrer" href="https://nanosite.onrender.com/">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Home Lesson */}
          <Box key={9} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-jazz">
            <img src="https://cdn.dribbble.com/users/2175374/screenshots/5337709/back-to-school-f.gif" alt="img25" />
            <figcaption>
              <h2>
                Home Lesson <span>App</span>
              </h2>
              <p>Learn From Your Home.</p>
              <a target="_blank" rel="noreferrer" href="https://homelesson.onrender.com">View more</a>
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
