// import components
import {
  Achievement,
  CTA,
  Categories,
  Companies,
  Courses,
  Feedback,
  Footer,
  Hero,
  NavBar,
} from "./components";

// import styles for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </>
  );
};
export default App;
