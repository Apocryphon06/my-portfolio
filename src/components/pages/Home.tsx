import React, { Fragment } from "react";
import Button from "../common/Button";
import Header from "../common/Header";

const Home = () => {
  return (
    <Fragment>
      <Header />

      <div className="lg:w-[1024px] flex flex-col justify-start items-start gap-5 z-20 lg:p-4 m-auto mt-10">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold">
          I'm Hrithik
        </h1>

        <p className="lg:text-lg text-base text-[#808080] leading-relaxed lg:w-[620px]">
          A front-end engineer helping startups turn their visions into a
          digital reality. I specialize in designing and building responsive
          web-based apps.
        </p>

        <div className="flex items-center gap-5">
          <Button>
            <a
              href="https://drive.google.com/file/d/16xRjQyJeZONoDZJdfeoMCE_3FliOtQu8/view?usp=sharing"
              target="__blank"
            >
              See my resume
            </a>
          </Button>
          <Button>Get in touch</Button>
        </div>
      </div>

      <div className="lg:w-[1024px] m-auto mt-40 ">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-white font-sans font-bold">
          Selected Work
        </h1>

        <div className="lg:w-[1024px] rounded-[40px] bg-[#181818] h-[500px] my-10 lg:p-10 flex flex-row justify-between relative items-start">
          <div className="flex flex-col justify-start items-start lg:w-[503px]">
            <div className="bg-gray-100 p-2 rounded-lg">
              <div className="w-[70px] h-[70px]" />
            </div>
            <h2 className="lg:text-3xl md:text-2xl text-xl font-medium font-sans mt-2">
              Ex ut est laborum est proident aliqua reprehenderit nisi.
            </h2>
            <p className="text-base font-sans mt-2">
              Adipisicing ex mollit quis ex cillum irure consequat enim. Laboris
              nostrud ex ut reprehenderit tempor quis eiusmod. Sunt labore elit
              qui proident. Aliqua commodo veniam veniam tempor laborum. Ut enim
              ad nulla veniam minim proident laboris aliquip officia ea. Sit
              ullamco consequat aliquip excepteur culpa ea laboris ipsum labore
              duis enim. Lorem ullamco sunt incididunt id ut.
            </p>
          </div>

          <div className="w-[400px] h-[400px] bg-white rounded-lg" />

          <div className="absolute bottom-10 left-10">
            <button className="text-base font-sans font-medium hover:underline">
              <div className="flex items-center gap-1">
                <p className="text-base">View site</p>
                <img src="/images/arrow.svg" alt="arrow" className="w-[24px] h-[24px] cursor-pointer" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
