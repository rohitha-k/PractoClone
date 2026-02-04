import React from "react";
import Hero from "./Hero";
import Specialities from "./Specialities";
import Stats from "./Stats";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";

const VideoConsultPage = () => {
    return (
        <div className="video-consult-page">
            <Hero />
            <Specialities />
            <Stats />
            <Benefits />
            <Testimonials />
            <FAQs />
        </div>
    );
};

export default VideoConsultPage;
