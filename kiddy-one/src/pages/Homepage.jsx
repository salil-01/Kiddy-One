import Carousel from "../components/homecomp/Carousel";
import Footer from "../components/homecomp/Footer";
import MidBody from "../components/homecomp/MidBody";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <MidBody />
      <Footer />
    </>
  );
};
export { HomePage };
