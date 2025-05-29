import Link from "next/link"
import ClientScripts from "@/components/client-scripts"
import BMICalculator from "@/components/bmi-calculator"

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="fixed w-full top-0 right-0 z-[1000] flex justify-between items-center p-[2rem_9%] bg-black/50 backdrop-blur-[10px] transition-all duration-500">
        <Link
          href="#home"
          className="logo cursor-pointer transition-[0.3s] ease hover:scale-110"
        >
          <img src="/logo.svg" alt="FitVerse Logo" className="h-[10rem]" />
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
              href="#bmi"
              className="text-[1.8rem] font-medium text-white ml-[4rem] transition-all duration-500 border-b-[3px] border-transparent hover:text-[#45ffca] hover:border-[#45ffca]"
            >
              BMI Calculator
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
          <p className="text-[1.6rem] mb-[2rem] mt-[2rem] max-w-[60rem]">
            At FitVerse, we turn your fitness goals into reality with personalized training plans, world-class coaches, and a motivating community. Whether you're just starting out or you're a seasoned athlete, we've got everything you need to look—and feel—your very best.
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
          <div className="relative w-[55vw] h-[80vh]">
            <img 
              src="/hero img 3.jpg" 
              alt="Home Image" 
              className="w-full h-full object-contain mix-blend-multiply filter brightness-110 contrast-110 absolute bottom-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent"></div>
          </div>
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

      {/* BMI Calculator Section */}
      <section className="bmi-calculator bg-[#000] min-h-screen p-[10rem_8%_2rem]" id="bmi">
        <h2 className="heading text-center text-[6.5rem]" data-aos="zoom-in-down">
          Calculate Your <span>BMI</span>
        </h2>
        
        <div className="max-w-[600px] mx-auto mt-[4.1rem]" data-aos="zoom-in-up">
          <BMICalculator />
        </div>
      </section>

      {/* About Section */}
      <section className="about flex justify-center items-center gap-[4rem] min-h-screen p-[10rem_8%_2rem]" id="about">
        <div className="about-img grid grid-cols-2 gap-4 w-[50%]" data-aos="zoom-in-down">
          <div className="col-span-2">
            <img
              src="/image1.jpg"
              alt="Fitness Training"
              className="w-full h-[300px] object-cover rounded-[20px] border-2 border-white transition-[0.5s] ease hover:scale-[1.02] hover:border-[#45ffca]"
            />
          </div>
          <div>
            <img
              src="/image2.jpg"
              alt="Weight Training"
              className="w-full h-[250px] object-cover rounded-[20px] border-2 border-white transition-[0.5s] ease hover:scale-[1.02] hover:border-[#45ffca]"
            />
          </div>
          <div>
            <img
              src="/image3.jpg"
              alt="Strength Training"
              className="w-full h-[250px] object-cover rounded-[20px] border-2 border-white transition-[0.5s] ease hover:scale-[1.02] hover:border-[#45ffca]"
            />
          </div>
          <div className="col-span-2">
            <img
              src="/image4.jpg"
              alt="Fitness Community"
              className="w-full h-[300px] object-cover rounded-[20px] border-2 border-white transition-[0.5s] ease hover:scale-[1.02] hover:border-[#45ffca]"
            />
          </div>
        </div>

        <div className="about-content p-[0_3rem] w-[50%]" data-aos="zoom-in-up">
          <h2 className="heading text-left text-[6rem] leading-[1.2] mb-8">Why Choose Us?</h2>
          
          <div className="space-y-8">
            <div className="bg-[#111] p-6 rounded-[20px] border border-transparent hover:border-[#45ffca] transition-all duration-500">
              <h3 className="text-[2.4rem] font-bold text-[#45ffca] mb-4">A Supportive Community</h3>
              <p className="text-[1.6rem] text-gray-300">
                Our diverse membership network keeps you motivated every step of your journey—train with friends, cheer each other on, and celebrate every milestone together.
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-[20px] border border-transparent hover:border-[#45ffca] transition-all duration-500">
              <h3 className="text-[2.4rem] font-bold text-[#45ffca] mb-4">Expert Coaching</h3>
              <p className="text-[1.6rem] text-gray-300">
                Certified trainers craft each workout and nutrition plan to your unique needs, ensuring you progress safely and steadily.
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-[20px] border border-transparent hover:border-[#45ffca] transition-all duration-500">
              <h3 className="text-[2.4rem] font-bold text-[#45ffca] mb-4">State-of-the-Art Facilities</h3>
              <p className="text-[1.6rem] text-gray-300">
                From premium cardio machines to free-weight zones and recovery lounges, our gyms are fully equipped for every fitness level.
              </p>
            </div>
          </div>

          <Link
            href="#"
            className="btn inline-block py-[1rem] px-[2.8rem] bg-[#45ffca] rounded-[1rem] shadow-none text-[1.6rem] text-[#000] tracking-[0.1rem] font-semibold transition-[0.5s] ease hover:text-white hover:shadow-[0_0_1.6rem] mt-8"
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
        <h2 className="heading text-center text-[6.5rem]" data-aos="zoom-in-down">
          Client <span>Reviews</span>
        </h2>

        <div className="review-content grid grid-cols-[repeat(auto-fit,minmax(350px,auto))] items-center gap-[2.3rem] mt-[4.1rem]" data-aos="zoom-in-up">
          {/* Umakant's Review */}
          <div className="box bg-[#111] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04]">
            <div className="flex items-center mb-4">
              <img src="/1.jpg" alt="Umakant" className="w-20 h-20 rounded-full object-cover border-2 border-[#45ffca]" />
              <div className="ml-4">
                <h3 className="text-[2.2rem] font-bold text-white">Umakant</h3>
                <p className="text-[#45ffca] text-[1.6rem]">Premium Member</p>
              </div>
            </div>
            <p className="text-[1.6rem] text-gray-300">
              "The training programs here are exceptional. I've seen amazing results in just a few months. The trainers are professional and the equipment is top-notch!"
            </p>
          </div>

          {/* Ashish's Review */}
          <div className="box bg-[#111] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04]">
            <div className="flex items-center mb-4">
              <img src="/2.jpg" alt="Ashish" className="w-20 h-20 rounded-full object-cover border-2 border-[#45ffca]" />
              <div className="ml-4">
                <h3 className="text-[2.2rem] font-bold text-white">Ashish</h3>
                <p className="text-[#45ffca] text-[1.6rem]">Fitness Enthusiast</p>
              </div>
            </div>
            <p className="text-[1.6rem] text-gray-300">
              "Best gym in the area! The community here is amazing and the atmosphere is always motivating. I've achieved my fitness goals faster than I expected."
            </p>
          </div>

          {/* Amit's Review */}
          <div className="box bg-[#111] rounded-[27px] border border-transparent shadow-[0_0_5px_#45ffca] p-[20px] transition-all duration-500 hover:border-[#45ffca] hover:translate-y-[-5px] hover:scale-[1.04]">
            <div className="flex items-center mb-4">
              <img src="/3.jpg" alt="Amit" className="w-20 h-20 rounded-full object-cover border-2 border-[#45ffca]" />
              <div className="ml-4">
                <h3 className="text-[2.2rem] font-bold text-white">Amit</h3>
                <p className="text-[#45ffca] text-[1.6rem]">Regular Member</p>
              </div>
            </div>
            <p className="text-[1.6rem] text-gray-300">
              "The personalized attention and guidance from trainers is outstanding. They really care about your progress and help you stay consistent with your fitness journey."
            </p>
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
