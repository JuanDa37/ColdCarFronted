import "./globals.css";
import Navbar from '../../components/Navbar';
import Services from "../../components/Services";
import Footer from "../../components/footer";
import AboutUs from "../../components/AboutUs";
import Brands from "../../components/Brands";

export default function HomePage(){
    return <>
        <Navbar></Navbar>
                <img src="images/image.png" className="w-full h-auto mb-5"></img>
                <div className="px-10 sm:px-20 md:px-30 lg:px-40">
                <AboutUs></AboutUs>
                <Services></Services>
                <Brands></Brands>
                </div>
                <Footer></Footer>
    </>
}