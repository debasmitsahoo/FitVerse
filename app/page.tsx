import Link from "next/link"
import ClientScripts from "@/components/client-scripts"

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="fixed w-full top-0 right-0 z-[1000] flex justify-between items-center p-[2rem_9%] bg-black/50 backdrop-blur-[10px] transition-all duration-500">
        <Link
          href="#home"
          className="logo text-[3rem] text-white font-extrabold cursor-pointer transition-[0.3s] ease hover:scale-110"
        >
          Fit <span>Verse</span>
        </Link>

        <div className="bx bx-menu text-[3.6rem] text-[#45ffca] cursor-pointer hidden" id="menu-icon"></div>
        <ul className="navbar flex">
          <li>
            <Link
              href="#home"
              className="text-[1.8rem] font-medium text-white ml-[4rem] transition-all duration-500 border-b-[3px] border-transparent hover:text-[#45ffca] hover:border-[#45ffca]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-[1.8rem] font-medium text-white ml-[4rem] transition-all duration-500 border-b-[3px] border-transparent hover:text-[#45ffca] hover:border-[#45ffca]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-[1.8rem] font-medium text-white ml-[4rem] transition-all duration-500 border-b-[3px] border-transparent hover:text-[#45ffca] hover:border-[#45ffca]"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#plans"
              className="text-[1.8rem] font-medium text-white ml-[4rem] transition-all duration-500 border-b-[3px] border-transparent hover:text-[#45ffca] hover:border-[#45ffca]"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#review"
              className="text-[1.8rem] font-medium text-white ml-[4rem] transition-all duration-500 border-b-[3px] border-transparent hover:text-[#45ffca] hover:border-[#45ffca]"
            >
              Review
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-[1.6rem] font-medium text-white transition-all duration-500 border-b-[3px] border-transparent hover:text-[#45ffca] hover:border-[#45ffca]"
          >
            Gym Owner Login
          </Link>
          <Link
            href="/join"
            className="nav-btn inline-block py-[1rem] px-[2.8rem] bg-transparent text-[#45ffca] border-2 border-[#45ffca] rounded-[1rem] text-[1.6rem] font-semibold transition-all duration-500 hover:bg-[#45ffca] hover:text-black hover:shadow-[0_0_18px_#45ffca]"
          >
            Join Us
          </Link>
        </div>
      </header>

      {/* Home Section */}
      <section className="home flex justify-center items-center min-h-screen p-[10rem_8%_2rem]" id="home">
        <div className="home-content" data-aos="zoom-in">
          <h3 className="text-[5rem] font-bold">Build Your</h3>
          <h1 className="text-[5.6rem] font-bold leading-[1.3]">Dream Physique</h1>
          <h3>
            <span className="multiple-text text-[4rem] font-[550]"></span>
          </h3>
          <p className="text-[1.6rem] mb-[2rem] mt-[2rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, doloremque. Culpa soluta iste beatae eveniet
            dolor sed nesciunt sit error voluptas nihil nostrum facere esse, illum ullam ea! Quibusdam, velit?
          </p>
          <Link
            href="/join"
            className="btn inline-block py-[1rem] px-[2.8rem] bg-[#45ffca] rounded-[1rem] shadow-none text-[1.6rem] text-[#000] tracking-[0.1rem] font-semibold transition-[0.5s] ease hover:text-white hover:shadow-[0_0_1.6rem]"
          >
            Join Us
          </Link>
        </div>

        <div
          className="home-img relative before:content-['VERSE'] before:absolute before:top-[10%] before:left-[-52%] before:translate-x-[-50%] before:text-[20rem] before:font-[400] before:leading-[20rem] before:text-white before:opacity-10 before:z-[-1]"
          data-aos="zoom-in"
        >
          <img src="/assets/hero img 3.jpg" alt="Home Image" className="w-[45vw]" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services bg-[#111] min-h-screen p-[10rem_8%_2rem]" id="services">
        <h2 className="heading text-center text-[6.5rem]" data-aos="zoom-in-down">
          Our <span>Services</span>
        </h2>

        <div
          className="services-content grid grid-cols-[repeat(auto-fit,minmax(350px,auto))] items-center gap-[2.3rem] mt-[4.1rem]"
          data-aos="zoom-in-up"
        >
          <div className="row bg-[#000] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04] cursor-pointer">
            <img src="/assets/image1.jpg" alt="" className="h-auto w-full rounded-[27px] mb-[1.4rem]" />
            <h4 className="text-[25px] font-bold mb-[10px] leading-[1.4]">Physical Fitness</h4>
          </div>
          <div className="row bg-[#000] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04] cursor-pointer">
            <img src="/assets/image2.jpg" alt="" className="h-auto w-full rounded-[27px] mb-[1.4rem]" />
            <h4 className="text-[25px] font-bold mb-[10px] leading-[1.4]">Wait Gain</h4>
          </div>
          <div className="row bg-[#000] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04] cursor-pointer">
            <img src="/assets/image3.jpg" alt="" className="h-auto w-full rounded-[27px] mb-[1.4rem]" />
            <h4 className="text-[25px] font-bold mb-[10px] leading-[1.4]">Strength Training</h4>
          </div>
          <div className="row bg-[#000] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04] cursor-pointer">
            <img src="/assets/image4.jpg" alt="" className="h-auto w-full rounded-[27px] mb-[1.4rem]" />
            <h4 className="text-[25px] font-bold mb-[10px] leading-[1.4]">Fat Loss</h4>
          </div>
          <div className="row bg-[#000] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04] cursor-pointer">
            <img src="/assets/image5.jpg" alt="" className="h-auto w-full rounded-[27px] mb-[1.4rem]" />
            <h4 className="text-[25px] font-bold mb-[10px] leading-[1.4]">WeightLifting</h4>
          </div>
          <div className="row bg-[#000] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04] cursor-pointer">
            <img src="/assets/about.jpg" alt="" className="h-auto w-full rounded-[27px] mb-[1.4rem]" />
            <h4 className="text-[25px] font-bold mb-[10px] leading-[1.4]">Running</h4>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about flex justify-center items-center gap-[1rem] min-h-screen p-[10rem_8%_2rem]" id="about">
        <div className="about-img" data-aos="zoom-in-down">
          <img
            src="/assets/about.jpg"
            alt=""
            className="w-[50vw] border-2 border-white rounded-[1rem] transition-[0.5s] ease hover:scale-[1.01] hover:border-[#45ffca]"
          />
        </div>

        <div className="about-content p-[0_3rem]" data-aos="zoom-in-up">
          <h2 className="heading text-left text-[6rem] leading-[1.2]">Why Choose Us?</h2>
          <p className="text-[1.6rem] my-[2rem]">
            Our Diverse membership base creates a friendly and supportive atmosphere, where you can make friends and
            stay motivated
          </p>
          <p className="text-[1.6rem] my-[2rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore id doloremque, voluptatem tempora
            quibusdam nihil nam quam ad laudantium non nesciunt dolor minima laboriosam quidem magni sequi iste fugit
            eligendi?
          </p>
          <p className="text-[1.6rem] my-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium, a architecto molestias vel nulla
            quisquam obcaecati porro nam adipisci eveniet ducimus, placeat at consequuntur numquam totam. Doloribus,
            excepturi facere!
          </p>
          <p className="text-[1.6rem] my-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum soluta nisi doloremque cupiditate
            architecto voluptate possimus culpa eaque laborum quia odio asperiores voluptatem, eos sapiente? Odit quidem
            sint est?
          </p>

          <Link
            href="#"
            className="btn inline-block py-[1rem] px-[2.8rem] bg-[#45ffca] rounded-[1rem] shadow-none text-[1.6rem] text-[#000] tracking-[0.1rem] font-semibold transition-[0.5s] ease hover:text-white hover:shadow-[0_0_1.6rem]"
          >
            Book a Free Class
          </Link>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans bg-[#111] min-h-screen p-[10rem_8%_2rem]" id="plans">
        <h2 className="heading text-center text-[6.5rem]" data-aos="zoom-in-down">
          Our <span>Plans</span>
        </h2>

        <div
          className="plans-content grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] items-center gap-[2.3rem] mt-[4.2rem]"
          data-aos="zoom-in-up"
        >
          <div className="box p-[30px_30px_50px_30px] h-[40rem] bg-[#000] rounded-[20px] border border-transparent shadow-[0_0_5px_#45ffca] transition-all duration-500 cursor-pointer hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.03]">
            <h3 className="text-[35px] font-semibold mb-[10px]">BASIC</h3>
            <h2 className="text-[43px] font-bold mb-[20px]">
              <span>₹800/Month</span>
            </h2>
            <ul>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">Smart Workout Plan</li>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">At Home Workout</li>
            </ul>
            <Link
              href="/join"
              className="inline-block text-[22px] leading-[1.2rem] font-bold py-[7px] px-0 text-white border-b-2 border-[#5d6c83] transition-all duration-500 hover:border-[#45ffca]"
            >
              Join Now
              <i className="bx bx-right-arrow-alt align-middle text-[25px] text-[#45ffca] ml-[5px]"></i>
            </Link>
          </div>
          <div className="box p-[30px_30px_50px_30px] h-[40rem] bg-[#000] rounded-[20px] border border-transparent shadow-[0_0_5px_#45ffca] transition-all duration-500 cursor-pointer hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.03]">
            <h3 className="text-[35px] font-semibold mb-[10px]">PRO</h3>
            <h2 className="text-[43px] font-bold mb-[20px]">
              <span>₹1500/Month</span>
            </h2>
            <ul>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">Pro GYMs</li>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">Smart Workout Plan</li>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">At Home Workout</li>
            </ul>
            <Link
              href="/join"
              className="inline-block text-[22px] leading-[1.2rem] font-bold py-[7px] px-0 text-white border-b-2 border-[#5d6c83] transition-all duration-500 hover:border-[#45ffca]"
            >
              Join Now
              <i className="bx bx-right-arrow-alt align-middle text-[25px] text-[#45ffca] ml-[5px]"></i>
            </Link>
          </div>
          <div className="box p-[30px_30px_50px_30px] h-[40rem] bg-[#000] rounded-[20px] border border-transparent shadow-[0_0_5px_#45ffca] transition-all duration-500 cursor-pointer hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.03]">
            <h3 className="text-[35px] font-semibold mb-[10px]">PREMIUM</h3>
            <h2 className="text-[43px] font-bold mb-[20px]">
              <span>₹2500/Month</span>
            </h2>
            <ul>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">ELITE GYMs and Classes</li>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">Pro GYMs</li>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">Smart Workout Plan</li>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">At Home Workout</li>
              <li className="list-disc text-[1.7rem] pb-[1.2rem]">Personal Training</li>
            </ul>
            <Link
              href="/join"
              className="inline-block text-[22px] leading-[1.2rem] font-bold py-[7px] px-0 text-white border-b-2 border-[#5d6c83] transition-all duration-500 hover:border-[#45ffca]"
            >
              Join Now
              <i className="bx bx-right-arrow-alt align-middle text-[25px] text-[#45ffca] ml-[5px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="review bg-[#000] min-h-screen p-[10rem_8%_2rem]" id="review">
        <div className="review-box bg-cover flex justify-center items-center flex-col">
          <h2 className="heading text-center text-[6.5rem] mb-[5rem]" data-aos="zoom-in-down">
            Client <span>Reviews</span>
          </h2>
          <div className="wrapper grid grid-cols-3 gap-[3rem]" data-aos="zoom-in-up">
            <div className="review-item min-h-[450px] min-w-[280px] bg-[#111] border-[3px] border-[rgba(238,238,238,0.3)] rounded-[2rem] m-[0_2rem] p-[30px_40px] cursor-pointer flex flex-col justify-center items-center gap-[1rem] text-white transition-[0.5s] ease-in-out hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.03]">
              <img src="/assets/1.jpg" alt="" className="w-[15rem] rounded-[50%] border-2 border-[#45ffca]" />
              <h2 className="text-[2.8rem]">Umakant</h2>
              <div className="rating">
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
              </div>
              <p className="text-[1.5rem] leading-[1.3]">
                Lorem ipsum dolor sit, amet consectetur adipisicing eupiditate culpa.
              </p>
            </div>
            <div className="review-item min-h-[450px] min-w-[280px] bg-[#111] border-[3px] border-[rgba(238,238,238,0.3)] rounded-[2rem] m-[0_2rem] p-[30px_40px] cursor-pointer flex flex-col justify-center items-center gap-[1rem] text-white transition-[0.5s] ease-in-out hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.03]">
              <img src="/assets/2.jpg" alt="" className="w-[15rem] rounded-[50%] border-2 border-[#45ffca]" />
              <h2 className="text-[2.8rem]">Asish</h2>
              <div className="rating">
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
              </div>
              <p className="text-[1.5rem] leading-[1.3]">
                Lorem ipsum dolor sit, amet consectetur adipisicing eupiditate culpa.
              </p>
            </div>
            <div className="review-item min-h-[450px] min-w-[280px] bg-[#111] border-[3px] border-[rgba(238,238,238,0.3)] rounded-[2rem] m-[0_2rem] p-[30px_40px] cursor-pointer flex flex-col justify-center items-center gap-[1rem] text-white transition-[0.5s] ease-in-out hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.03]">
              <img src="/assets/3.jpg" alt="" className="w-[15rem] rounded-[50%] border-2 border-[#45ffca]" />
              <h2 className="text-[2.8rem]">Amit</h2>
              <div className="rating">
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
                <i className="bx bxs-star text-[gold] text-[2rem]" id="Star"></i>
              </div>
              <p className="text-[1.5rem] leading-[1.3]">
                Lorem ipsum dolor sit, amet consectetur adipisicing eupiditate culpa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer relative bottom-0 w-full py-[40px] bg-[#111]">
        <div className="social text-center pb-[20px] text-[#45ffca]">
          <a
            href="#"
            className="inline-block text-[25px] text-[#45ffca] border-2 border-[#45ffca] w-[42px] h-[42px] leading-[42px] rounded-[50%] mx-[10px] transition-[0.5s] ease-in-out hover:scale-[1.2] hover:translate-y-[-10px] hover:bg-[#45ffca] hover:text-[#131313] hover:shadow-[0_0_25px_#45ffca]"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="#"
            className="inline-block text-[25px] text-[#45ffca] border-2 border-[#45ffca] w-[42px] h-[42px] leading-[42px] rounded-[50%] mx-[10px] transition-[0.5s] ease-in-out hover:scale-[1.2] hover:translate-y-[-10px] hover:bg-[#45ffca] hover:text-[#131313] hover:shadow-[0_0_25px_#45ffca]"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="#"
            className="inline-block text-[25px] text-[#45ffca] border-2 border-[#45ffca] w-[42px] h-[42px] leading-[42px] rounded-[50%] mx-[10px] transition-[0.5s] ease-in-out hover:scale-[1.2] hover:translate-y-[-10px] hover:bg-[#45ffca] hover:text-[#131313] hover:shadow-[0_0_25px_#45ffca]"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <p className="copyright mt-[20px] text-center text-[16px] text-white">
          &copy; 2025 FitVerse. All rights reserved.
        </p>
      </footer>

      <ClientScripts />
    </>
  )
}
