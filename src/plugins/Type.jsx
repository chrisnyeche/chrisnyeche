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
      <Text as={"h1"} fontWeight="800" fontSize={"50px"} className="font-bosch">{text}</Text>
    </Box>
  );
};

export default Type;