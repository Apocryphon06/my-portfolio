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
    </Fragment>
  );
};

export default Home;
