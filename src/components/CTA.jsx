import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta mt-28 mb-20 text-center">
      <h2 className="cta-text mb-6">
        Have a project in mind?
        <br />
        Let’s build something together 🚀
      </h2>

      <Link
        to="/contact"
        className="inline-flex items-center justify-center
        px-8 py-3 rounded-xl
        bg-gradient-to-r from-[#0ea5e9] to-[#2563eb]
        text-white font-semibold
        shadow-lg hover:shadow-xl
        transition-all duration-300"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
