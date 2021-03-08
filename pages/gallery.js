import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Images from "../components/Images";
import GalleryLayout from "../components/GalleryLayout";
import HeaderNavigation from "../components/HeaderNavigation";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>My Gallery</title>
      </Head>
      <HeaderNavigation />
      <GalleryLayout>
        <Images />
      </GalleryLayout>
    </>
  );
}
