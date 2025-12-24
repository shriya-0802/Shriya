import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer mt-16 pt-10 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          © 2026 <span className="font-semibold text-slate-700">Shriya Mohanty</span>.
          All rights reserved.
        </p>

        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 opacity-80 hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
