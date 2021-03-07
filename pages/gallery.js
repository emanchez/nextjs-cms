import Images from "../components/Images";
import GalleryLayout from "../components/GalleryLayout";
import HeaderNavigation from "../components/HeaderNavigation";

export default function Gallery() {
  return (
    <>
      <HeaderNavigation />
      <GalleryLayout>
        <Images />
      </GalleryLayout>
    </>
  );
}
