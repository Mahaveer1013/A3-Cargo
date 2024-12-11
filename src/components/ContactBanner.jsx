import Link from "next/link";

const ContactBanner = () => {
  return (
    <section className="py-16 px-6 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
          Get in Touch
        </h2>
        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
          Reach out to us for all your import/export needs. We&apos;re here to help!
        </p>
        <Link href="/contact"
          className="px-6 py-3 bg-white text-blue-600 font-bold rounded hover:bg-gray-100 transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default ContactBanner;
