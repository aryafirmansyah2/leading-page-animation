import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar';
import About from '@/components/Containers/About';
import Contact from '@/components/Containers/Contact';
import History from '@/components/Containers/History';
import MySkills from '@/components/Containers/MySkills';
import Portofolio from '@/components/Containers/Portofolio';
import Reviews from '@/components/Containers/Reviews';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="history">
        <History />
      </div>
      <img
        src="/assets/images/bgsecond.png"
        alt="Hero"
        className=" absolute w-full z-[-1]"
      />
      <div id="myskills">
        <MySkills />
      </div>
      <div id="portofolio">
        <Portofolio />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
