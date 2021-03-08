import React, { useEffect, useState } from "react";
import { Box, WrapItem } from "@chakra-ui/react";
import ImageLayout from "./ImageLayout";
import { getContenfulStuff } from "../Utilities/contentfulCalls";

export default function Images() {
  let [resp, setResp] = useState([]);

  useEffect(() => {
    getContenfulStuff().then((data) => {
      setResp(data);
    });
  }, []);

  return (
    <>
      {resp.map((value) => {
        return (
          <WrapItem
            key={value.url}
            boxShadow="base"
            rounded="20px"
            overflow="hidden"
            bg="white"
            lineHeight="0"
            _hover={{ boxShadow: "dark-lg" }}
          >
            <Box
              backgroundImage={`url(${value.url})`}
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              height="300px"
            >
              <p className="title">{value.title}</p>
              {/* <img src={value.url} alt="" /> */}
              <p className="description">{value.description}</p>
            </Box>
          </WrapItem>
        );
      })}
    </>
  );
}
