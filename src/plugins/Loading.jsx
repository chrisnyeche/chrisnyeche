import {Flex} from "@chakra-ui/react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} w={"50%"}>
      <ReactLoading type={"spokes"} color={"#FFC233"} height={100} width={100} />;
    </Flex>
  );
};

export default Loading;
