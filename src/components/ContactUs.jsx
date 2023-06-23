import React from "react";

function ContactUs() {
  return (
    <div
      name="contactus"
      className="h-screen flex justify-center items-start bg-zinc-200"
    >
      <div className="bg-white shadow-lg m-8 w-full h-[500px] grid lg:flex rounded-xl">
        <div className="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8724328925236!2d123.48374317468856!3d8.09778559193097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32544378d3db90a9%3A0xcbe1976215a6aa4e!2sMolave%20Youngs%20Milling%20Corp!5e1!3m2!1sen!2sph!4v1686810627388!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-1/2 bg-gradient-to-tr from-red-700 via-red-800 to-red-900 hover:bg-gradient-to-bl">
          <div className="text-white m-6 font-medium">Contact Information</div>
          <div className="text-white m-6 text-sm flex">
            <ion-icon
              name="location-sharp"
              className="m-2 text-gray-700 hover:text-white"
            ></ion-icon>
            <div>
              #267 Mabini St., Brgy. Maloloy-on, Molave, Zamboanga del Sur,
              Philippines 7023
            </div>
          </div>
          <div className="text-white m-6 text-sm flex">
            <ion-icon
              name="call-outline"
              className="m-2 text-gray-700 hover:text-white"
            ></ion-icon>
            <div>062-2251-333</div>
          </div>
          <div className="text-white m-6 text-sm flex">
            <ion-icon
              name="globe-outline"
              className="m-2 text-gray-700 hover:text-white"
            ></ion-icon>
            <div>www.mymc.org</div>
          </div>
          <div className="flex justify-center m-2">
            <a href="https://www.facebook.com/MYMCRecruitment">
              <ion-icon name="logo-facebook" className="m-2"></ion-icon>
            </a>
            <a href="https://www.facebook.com/MYMCRecruitment">
              <ion-icon
                name="logo-linkedin"
                className="m-2 text-gray-700 hover:text-white"
              ></ion-icon>
            </a>
            <a href="https://www.facebook.com/MYMCRecruitment">
              <ion-icon
                name="logo-twitter"
                className="m-2 text-gray-700 hover:text-white"
              ></ion-icon>
            </a>
            <a href="https://www.facebook.com/MYMCRecruitment">
              <ion-icon
                name="logo-reddit"
                className="m-2 text-gray-700 hover:text-white"
              ></ion-icon>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-yellow-700 rounded-full h-20 w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
