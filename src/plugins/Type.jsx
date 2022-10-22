import { Box, Text } from "@chakra-ui/react";
import{ useState, useEffect } from "react"

const Type = () => {
  const [text, setText] = useState("");
  const [fullText] = useState("I am Chris Nmasichi Favour Nyeche.");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [fullText, index, text]);

  return (
    <Box>
      <Text as={"h1"} fontWeight="500" fontSize={{base: "40px", md:"50px"}} className="font-pilotcommand">{text}</Text>
    </Box>
  );
};

export default Type;
