### :man_technologist: PERSONAL PORTFOLIO :

## PAGES
The portfolio is divided into four pages.
1. Home: The Home page is were the loading page exists. This is were the Loader page and the nusers are asked to input thier names before they can be able to access the portfolio. The value of the user is usesd in the Home page and the create page. The Home page consists of the four plugins and four images.

2. Create: The Create page is the first page of the main portfolio view. It contains the hero section, tech heroes and project section.


3. Connect
4. Community










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