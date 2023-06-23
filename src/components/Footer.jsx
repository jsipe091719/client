import { FaFacebook, FaTwitter, FaViber } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">HOME</h6>
          <ul>
            <p className="py-1 cursor-pointer hover:text-gray-600">ABOUT US</p>
            <p className="py-1 cursor-pointer hover:text-gray-600">FOUNDER</p>
            <p className="py-1 cursor-pointer hover:text-gray-600">
              RICE RETAILERS
            </p>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">HELP</h6>
          <ul>
            <p className="py-1 cursor-pointer hover:text-gray-600">
              CONTACT US
            </p>
            <p className="py-1 cursor-pointer hover:text-gray-600">FAQs</p>
            <p className="py-1 cursor-pointer hover:text-gray-600">RETURNS</p>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">INFORMATION</h6>
          <ul>
            <p className="py-1 cursor-pointer hover:text-gray-600">
              PRIVACY POLICY
            </p>
            <p className="py-1 cursor-pointer hover:text-gray-600">
              REFUND POLICY
            </p>
            <p className="py-1 cursor-pointer hover:text-gray-600">
              TERMS OF SERVICE
            </p>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">CONTACT</h6>
          <ul>
            <p>Email us at:</p>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHFDhTKFJCRBxXkZsTrWjHKhVJNzFQgZGkcdNbWvWKXTtrvpwGmFQkFbHsFNhRXtHLfgB">
              <p className="underline cursor-pointer">ymgc.hrdept@yahoo.com</p>
            </a>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase text-3xl ">MYMG</p>
          <p className="py-4">
            Molave Young's Milling Group is an innovative and customer-focused
            agricultural company, dedicated to delivering high-quality products,
            fostering sustainable practices, and empowering the next generation
            in the milling industry.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
        <p className="py-4">Copyright Ⓒ 2023 MYMC. All rights Reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a href="https://www.facebook.com/MYMCRecruitment">
            <FaFacebook className="hover:text-yellow-400" />
          </a>
          <a href="https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=Af_xneFcOprWT-dN-MrkJ7UTYeO15K6J23B6VadM8pdlwoPaGZyO_fanWWE1ULgrxH27DJB9QEDNDA&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <SiGmail className="hover:text-yellow-400" />
          </a>
          <a href="https://twitter.com/login">
            <FaTwitter className="hover:text-yellow-400" />
          </a>
          <a href="https://account.viber.com/en/login">
            <FaViber className="hover:text-yellow-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
