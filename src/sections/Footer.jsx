import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-gl:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for new term at your nearest Nike store. Find Your
            Perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((icon, i) => (
              <div
                className="flex justify-center items-center bg-white h-12 w-12 rounded-full"
                key={i}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
