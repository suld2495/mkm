import Banner from "../components/main/Banner";
import Fulfillment from "../components/main/Fulfillment";
import Section01 from "../components/main/Section01";
import Section02 from "../components/main/Section02";
import Section03 from "../components/main/Section03";
import Section04 from "../components/main/Section04";
import Section05 from "../components/main/Section05";
import Section06 from "../components/main/Section06";
import '../styles/main.css';

const Main = () => (
  <div className="main">
    <Banner />
    <Fulfillment />
    <Section01 />
    <Section02 />
    <Section03 />
    <Section04 />
    <Section05 />
    <Section06 />
  </div>
);

export default Main;
