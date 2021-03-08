import { Box, Wrap } from "@chakra-ui/react";

export default function GalleryLayout({ children }) {
  return (
    <Box overflow="auto" bg="pink" maxH="90vh">
      <Wrap px="1rem" spacing={4} justify="center">
        {children}
      </Wrap>
    </Box>
  );
}
