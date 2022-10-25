import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import Loading from "../plugins/Loading";

const Footer = () => {
  const FooterLinks = [
    {path: "/create", button: "Create" },
    {path: "/connect", button: "Connect"},
    {path: "/community", button: "Community"},
  ];

  return (
    <Box bg={"transparent"} className="fixed-bottom" mb={3} >
      <Stack direction={"row"} spacing={6} bg={"ActiveCaption"} zIndex={"-1"} borderRadius={"20px"} py={5} w={{ base: "93%", lg: "40%" }} display={"flex"} justifyContent="center" mx="auto" className="font-pilotcommand" fontSize={{ base: "13px", md: "xl", lg: "2xl" }} color={"#7047EB"}>
        {FooterLinks.map((links) => {
          return (
            <Link to={links.path}>
              <Text bg={"transparent"} _hover={{ color: "#FFC233", bgGradient: "linear(to-l, #7928CA, #FF0080)", px: "2", borderRadius: "10px" }} _focus={{ color: "#FFC233", bgGradient: "linear(to-l, #7928CA, #FF0080)", px: "2", borderRadius: "10px" }} >
                {links.button}
              </Text>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Footer;
