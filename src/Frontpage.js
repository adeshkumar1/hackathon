import "./App.css";
// import skincareWomanImage from './skincare_woman.jpeg';

import Navigation from "./Navigation";
import skincareproducts1 from "./skincare_products5.webp";
import skincareproducts2 from "./skincare_products4.webp";
import "./index.css";
import { Link } from "react-router-dom";

function HeaderSection() {
  return (
    <div>
      <Navigation />
      <div className="mx-16 h-screen py-52">
        <div class="slide-bck-center flex justify-center text-8xl mt-8 text-center fbask-reg puff-in-center">
          Skincare&nbsp;Routine&nbsp;Made &nbsp;for&nbsp;You
        </div>
        <div className="fbask-ital mb-100 text-2xl text-center mt-4 ">
          Simplify skincare...
        </div>
      </div>

      {/*<div className='text' style={{ marginTop: '-200px' }}>
        <img src={skincareproducts} alt='skincare woman' align= "right" className='mx-auto w-full max-w-xl'></img> py HEADER
      </div>*/}

      <div className="flex flex-row mx-auto">
        <div className="mx-16 h-2/4 py-40 w-1/3 ml-40">
          <div class="slide-bck-left flex justify-left text-3xl mt-55 text-left fbask-ital ">
            Welcome to SkinMatch, where skincare meets simplicity
          </div>
          <div class="slide-bck-left flex justify-left text-2xl mt-7  text-left fbask-reg">
            At SkinMatch, we believe that taking care of your skin should be
            effortless and personalized. Gone are the days of endless searching
            and guessing which skincare products will work for you. With just a
            simple click of a camera button, you can revolutionize your skincare
            routine.
          </div>
        </div>

        <div className="ml-auto h-2/5 flex justify-end mr-20">
          <div class="slide-bck-right flex justify-right text-3xl mt-8 text-right">
            <img
              src={skincareproducts2}
              alt="skincare woman"
              align="right"
              className="mx-auto w-full max-w-xl"
            ></img>
          </div>
        </div>
      </div>

      <div className="flex flex-row mx-auto">
        <div className="mx-16 h-2/4 pt-40 pb-20 ml-40">
          <div class="slide-bck-left flex justify-left text-2xl mt-7  text-left fbask-reg">
            <img
              src={skincareproducts1}
              alt="skincare woman"
              align="left"
              className="mx-auto w-full max-w-xl"
            ></img>
          </div>
        </div>

        <div className="ml-auto h-3/5 flex mr-28 w-1/3 py-60 ">
          <div class="slide-bck-right text-2xl mt-12 text-left fbask-reg">
            Our innovative platform empowers you to take control of your
            skincare journey by helping you find the perfect products tailored
            to your unique skin needs. With SkinMatch, you can say goodbye to
            trial and error. Our advanced technology analyzes your skin and
            recommends the most suitable products with precision and accuracy.
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="pt-16 pb-36 text-center ">
          <div className="slide-bck-center text-7xl my-4 fbask-reg puff-in-center">
            How we do it...
          </div>
          <div className="fbask-reg mb-4 text-2xl mx-64">
            We trained state of the art YOLOV8 models to detect acne and other
            skin conditions. Our computer vision technology can detect size and
            severity of acne and can classify oily or dry skin. You deserve the
            best, so try us for free today.
          </div>
          <Link to="/camera">
            <button className="fbask-reg mt-8 text-2xl border-black border-2 rounded-xl p-5 hover:scale-110 transition-transform">
              Camera
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
