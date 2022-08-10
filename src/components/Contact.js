import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_52m2323",
        "template_jvdm2cm",
        form.current,
        "rlVDSsxoGHu7tQyBR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section
        id="contact"
        className="border-2 flex flex-col items-center my-10 mx-10 py-10 rounded-xl"
      >
        <p className="text-center">Contact me</p>
        <div className="flex flex-col justify-center mt-15 w-9/12">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="username-success"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your name
              </label>
              <input
                type="text"
                id="username-success"
                className="bg-white border border-gray-900 text-black-200 placeholder-gray-200 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                placeholder="Bonnie Green"
              />
            </div>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="name@gmail.com"
              />
            </div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="border-2 rounded-xl p-2 mt-2 ">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
