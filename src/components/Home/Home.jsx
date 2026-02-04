import ServiceCarousel from "./ServiceCarousel";
import ConsultationInClinic from "./ConsultationInClinic";

import TopDoctors from "./Topdoctors";
import HealthConcerns from "./HealthConcerns";
import SafetySection from "./SafetySection";
import ReadArticles from "./ReadArticles";


const Home = () => {
    return (
        <>
            <ServiceCarousel />
            <ConsultationInClinic />

            <TopDoctors />
            <HealthConcerns />
            <SafetySection />
            <ReadArticles />

        </>
    );
};

export default Home;
