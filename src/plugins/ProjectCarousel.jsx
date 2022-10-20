import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import image16 from "../images/16.jpg";
import "./Hover.css";

const ProCarousel = () => {
  const settings1 = {
    infinite: true,
    // rtl: true,
    // autoplay: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // ProCarousel settings

  return (
    <Box>
      {/* ProCarousel */}
      <Box overflow={"hidden"}>
        <Slider {...settings1}>
          {/* React */}
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-goliath">
            <img src={image16} alt="img23" />
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
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-apollo">
            <img src={image16} alt="img18" />
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
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-phoebe">
            <img src={image16} alt="img03" />
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
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-terry">
            <img src={image16} alt="img16" />
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
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-kira">
            <img src={image16} alt="img17" />
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
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-steve">
            <img src={image16} alt="img29" />
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
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-moses">
            <img src={image16} alt="img24" />
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
          <Box h="300px"  w="300px" bg="transparent">
          <figure class="effect-jazz">
            <img src={image16} alt="img25" />
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
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default ProCarousel;
