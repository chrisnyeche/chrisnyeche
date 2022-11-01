### :man_technologist: PERSONAL PORTFOLIO :

## PAGES
The portfolio is divided into four pages.
1. Home: The Home page is were the loading page exists. This is were the Loader page and the nusers are asked to input thier names before they can be able to access the portfolio. The value of the user is usesd in the Home page and the create page. The Home page consists of the four plugins and four images.

2. Create: The Create page is the first page of the main portfolio view. It contains the hero section, tech heroes and project section.


3. Connect
4. Community

// Images
import Victor from "../images/Victor.jpg";
import Miebaka from "../images/Miebaka.jpg";
import Hanniel from "../images/Hanniel.jpg";
import Favour from "../images/Favour.jpg";
import Rejoice from "../images/Rejoice.jpg";
import Fidelis from "../images/Fidelis.jpg";
import Samuel from "../images/Samuel.jpg";
import Belema from "../images/Belema.jpg";

const Team = () => {
  const TeamMembers = [
    {
      image: Victor,
      name: "Victor Ejiogu",
      position: "Wordpress Engineer",
      email: "victor.ejiogu@ust.edu.ng",
      stack: "Php, Laravel, JavaScript, React, Elementor, Gutenberg, Blocksy, WP Bakery",
    },
    {
      image: Miebaka,
      name: "Miebaka LongJohn",
      position: "Frontend Developer",
      email: "miebakalongjohn@gmail.com",
      stack: "Html, Css, Bootstrap, JavaScript,",
    },
    {
      image: Hanniel,
      name: "Hanniel Daniel",
      position: "Backend Developer",
      email: "dhanniel21@gmail.com",
      stack: "Node, React, Express, Flutter, MongoDB.",
    },
    {
      image: Favour,
      name: "Favour Ekeleme",
      position: "Frontend Developer",
      email: "favourekeleme58@gamil.com",
      stack: "Html, Css, Bootstrap, JavaScript, React.",
    },
    
  ];

  const TeamMembers2 = [
    {
      image: Rejoice,
      name: "Rejoice Ebenezer",
      position: "Game Developer",
      email: "rejoiceuchechukwu@gmail.com",
      stack: "Html, Css, Bootstrap, JavaScript, React, C#, Unity",
    },
    {
      image: Fidelis,
      name: "Fidelis Oji",
      position: "UI/UX Designer",
      email: "fidelisoji7@gmail.com",
      stack: "Figma, Trello, MilaNote, Jira, Notepad.",
    },
    {
      image: Samuel,
      name: "Samuel Ayotunde",
      position: "Product Designer",
      email: "samuelayotunde1234@gmail.com",
      stack: "Figma, Behance, Trello, Milanote, Framer, MillaNote, Jira, Notepad.",
    },
    {
      image: Belema,
      name: "Belema Achego",
      position: "Mobile Developer",
      email: "tamunobelemaachego@gmail.com",
      stack: "Python, Java, Flutter, React, Next Js.",
    },
  ]








https://openbase.com/categories/js/best-react-scroll-libraries

https://www.cdnfonts.com/

https://mkosir.github.io/react-hook-mighty-mouse/?path=/story/react-mighty-mouse--flashlight

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}

ROUTER DOM
import all your pages to App

      {/* Tech Stack */}
      <Flex justifyContent={"center"} mx="auto" position={"relative"} my={"20px"} textAlign="center">
        <Text as={"h2"} className="flick font-cyberpunk" data-heading="MY TECH STACK" w={"100%"} fontSize={{ base: "5xl", lg: "7xl" }}></Text>
      </Flex>

      {/* React Game */}
      <Flex justifyContent={"center"} alignItems={"center"} mx="auto" textAlign="center" flexDirection={{base: "column", md: "row"}}>
        {/* Vr animation */}
        <Box w={{base: "100%", md: "50%"}} display={{base: "none", lg: "block"}}>
        <Player autoplay loop src={"https://assets6.lottiefiles.com/packages/lf20_p8xzlbof.json"} />     
        </Box>
        {/* Flipcard */}
        <Box w={{base: "100%", lg: "50%"}}>
          <FlipCard />
        </Box>
      </Flex>

      {/* Stacks */}
      <Box mt="140px">
      <Carousel />
      </Box>