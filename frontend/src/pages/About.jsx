import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactBanner from "../components/ContactBanner";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set the duration of animations
    });
  }, []);

  return (
    <>
      <div className="bg-white text-gray-800">
        {/* About Us Section */}
        <section className="py-10 px-5 bg-gray-50" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
            We are a trusted leader in global export and import services,
            dedicated to providing end-to-end solutions for businesses
            worldwide. Our mission is to bridge global opportunities with local
            expertise, ensuring seamless logistics, compliance, and customer
            satisfaction.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="pt-10 bg-white px-5" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Our History
          </h2>
          <VerticalTimeline lineColor="#000000">
            {[
              {
                year: "2020",
                title: "Industry Recognition",
                description:
                  "We were recognized for our excellence in logistics, earning multiple industry accolades.",
                icon: "🏆",
              },
              {
                year: "2015",
                title: "Consulting Services Launch",
                description:
                  "We launched our consulting services to help businesses optimize logistics.",
                icon: "📈",
              },
              {
                year: "2010",
                title: "Global Expansion",
                description:
                  "Our reach expanded globally, forming partnerships in multiple regions.",
                icon: "🌍",
              },
              {
                year: "2005",
                title: "Company Foundation",
                description:
                  "The journey began with a vision to transform global trade logistics.",
                icon: "🚛",
              },
            ].map((event, index) => (
              <VerticalTimelineElement
                key={index}
                date={event.year}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "linear-gradient(135deg, #4CAFEB, #82E9E4)",
                  color: "#2D3748",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #4CAFEB" }}
                iconStyle={{
                  background: "#3182CE",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5rem",
                }}
                icon={<span>{event.icon}</span>}
                data-aos="fade-up"
              >
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {event.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

      </div>
      <ContactBanner />
    </>
  );
};

export default About;
