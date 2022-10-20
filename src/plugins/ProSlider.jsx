import React, { Component } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "./ProSlider.css"


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
        slidesToShow: 3,
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
      <Box>
        <Box overflow={"hidden"}>
        <Slider ref={c => (this.slider = c)} {...settings} gap={3}>
          {/* Wordpress */}
          <Box key={1} px={{base: "30px", lg:"0px"}}>
              <figure class="effect-julia">
                <img src={"https://www.nftsstreet.com/wp-content/uploads/2022/01/Webp.net-gifmaker.gif"} alt="img22" />
                <figcaption>
                  <h2>
                    Passionate <span>Julia</span>
                  </h2>
                  <div>
                    <p>Julia dances in the deep dark</p>
                    <p>She loves the smell of the ocean</p>
                    <p>And dives into the morning light</p>
                  </div>
                  <a href="./">View more</a>
                </figcaption>
              </figure>
          </Box>
          {/* React */}
          <Box key={2} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-goliath">
            <img src={"https://nftartwork.co.uk/wp-content/uploads/2021/08/Mike-Tyson.gif"} alt="img23" />
            <figcaption>
              <h2>
                Thoughtful <span>Goliath</span>
              </h2>
              <p>When Goliath comes out, you should run.</p>
              <a href="./">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Next Js */}
          <Box key={3} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-apollo">
            <img src={"https://dls.so/mint/img/avatar.gif"} alt="img18" />
            <figcaption>
              <h2>
                Strong <span>Apollo</span>
              </h2>
              <p>Apollo's last game of pool was so strange.</p>
              <a href="./">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Javascript */}
          <Box key={4} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-duke">
            <img src="https://cdn.dribbble.com/users/1382369/screenshots/17876859/media/f3686481b564dd299418692bc8384caf.gif" alt="img03" />
            <figcaption>
              <h2>
                Plain <span>Phoebe</span>
              </h2>
              <p>
                <a href="./">
                  <i class="fa fa-fw fa-user"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-heart"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-cog"></i>
                </a>
              </p>
            </figcaption>
          </figure>
          </Box>
          {/* Chakra */}
          <Box key={5} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-terry">
            <img src="https://airnfts.s3.amazonaws.com/profile-images/20220221/0xbbC213d442cDe37138b4383565D44dB3F4F79aff_1645477060045.gif" alt="img16" />
            <figcaption>
              <h2>
                Noisy <span>Terry</span>
              </h2>
              <p>
                <a href="./">
                  <i class="fa fa-fw fa-download"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-heart"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-share"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-tags"></i>
                </a>
              </p>
            </figcaption>
          </figure>
          </Box>
          {/* Bootstrap */}
          <Box key={6} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-kira">
            <img src="https://cdn.shopify.com/s/files/1/0605/4998/8564/products/4_b3eb1e16-871c-4475-b702-93de6ae23e28_2048x2048.jpg?v=1647414907" alt="img17" />
            <figcaption>
              <h2>
                Dark <span>Kira</span>
              </h2>
              <p>
                <a href="./">
                  <i class="fa fa-fw fa-home"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-download"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-heart"></i>
                </a>
                <a href="./">
                  <i class="fa fa-fw fa-share"></i>
                </a>
              </p>
            </figcaption>
          </figure>
          </Box>
          {/* CSS */}
          <Box key={7} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-steve">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/71a67a134500327.61d6d49b57b8f.gif" alt="img29" />
            <figcaption>
              <h2>
                Lonely <span>Steve</span>
              </h2>
              <p>Steve was afraid of the Boogieman.</p>
              <a href="./">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Html */}
          <Box key={8} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-moses">
            <img src="https://nftcalendar.io/storage/uploads/events/2022/3/cEk4iKfB2JVEj2OfwwPMBD8vuwYbcBdzwOduZXtU.gif" alt="img24" />
            <figcaption>
              <h2>
                Cute <span>Moses</span>
              </h2>
              <p>Moses loves to run after butterflies.</p>
              <a href="./">View more</a>
            </figcaption>
          </figure>
          </Box>
          {/* Figma */}
          <Box key={9} px={{base: "40px", lg:"0px"}}>
          <figure class="effect-jazz">
            <img src="https://rndmcharacters-s3.s3.amazonaws.com/InvisibleFriends-roadmap/KITH_web.gif" alt="img25" />
            <figcaption>
              <h2>
                Dynamic <span>Jazz</span>
              </h2>
              <p>When Jazz starts to chase cars, the whole world stands still.</p>
              <a href="./">View more</a>
            </figcaption>
          </figure>
          </Box>
        </Slider>
        </Box>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </Box>
    );
    }} 