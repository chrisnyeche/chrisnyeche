import { Box, Icon, Text } from "@chakra-ui/react";
import "./Team.css";
import { FaTwitter, FaEnvelope, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Team = () => {
  return (
    <Box>
      <section id="team" className="team-area">
        <Box className="container">
          <Box className="row">
            <Box className="col-md-12">
              <Box className="site-heading text-center">
                <h2>
                  Our <span>Team</span>
                </h2>
                <h4>Meet our awesome and expert team members</h4>
              </Box>
            </Box>
          </Box>
          <Box className="row team-items">
            <Box className="col-md-3 single-item">
              <Box className="item" borderRadius={"30px"}>
                <Box className="thumb">
                  <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team Member" />
                  <Box className="overlay">
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Box className="social">
                      <ul>
                        <li className="twitter">
                          <a href="./">
                            <Icon as={FaTwitter}/>
                          </a>
                        </li>
                        <li className="github">
                          <a href="./">
                            <Icon as={FaGithub}/>
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="./">
                           <Icon as={FaInstagram}/>
                          </a>
                        </li>
                        <li className="whatsapp">
                          <a href="./">
                            <Icon as={FaWhatsapp}/>
                          </a>
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Box>
                <Box className="info">
                  <span className="message">
                    <a href="./">
                      <Icon as={FaEnvelope}/>
                    </a>
                  </span>
                  <Text as={"h4"} colr="black">Lorem Ipsum</Text>
                  <span>Project Manager</span>
                </Box>
              </Box>
            </Box>


          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default Team;
