import logo from "../../../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const links = {
    Platform: ["Home", "Explore Teachers", "Live Sessions", "Quizzes", "Schedule"],
    Company: ["About Us", "Careers", "Blog", "Press"],
    Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-[#0f1340] text-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Logo" className="h-8 mb-5 brightness-200" />
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              The complete e-learning platform connecting students and expert teachers.
            </p>
            <div className="flex gap-3 mt-6">
              {["f", "in", "tw", "yt"].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/50 text-xs font-bold hover:bg-[#525FE1] hover:text-white hover:border-[#525FE1] cursor-pointer transition-all duration-300"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-white/40 text-sm hover:text-white cursor-pointer transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2026 E-Learning Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span
              onClick={() => navigate("/login")}
              className="text-white/30 text-xs hover:text-white cursor-pointer transition-colors duration-200"
            >
              Log In
            </span>
            <span
              onClick={() => navigate("/auth")}
              className="text-white/30 text-xs hover:text-white cursor-pointer transition-colors duration-200"
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
