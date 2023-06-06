"use client";
import { useState } from "react";
import { client } from "@/client";

import { BiEnvelope } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isPaper, setIsPaper] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (username.length > 1 || email.length > 1 || message.length > 5) {
      setIsPaper(true);
    } else {
      setIsPaper(false);
    }

    if (username.length > 1 && email.length > 1 && message.length > 5) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length > 1 && email.length > 1 && message.length > 5) {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));

      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <section>
      <h1 className="text-xl font-bold text-dark dark:text-light">
        Keep in Touch
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mt-3">
        <div className="flex-[4]">
          <p className="text-xs">
            I value open communication and welcome the opportunity to connect
            with you. Whether you have a project in mind, want to discuss
            potential collaborations, or simply have a question, this is the
            place to reach out.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a
              className="flex gap-2 items-center text-sm group"
              href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex p-1 bg-gradient-to-tl from-primary via-primary to-blue-400 dark:from-accent dark:via-accent dark:to-green-400 rounded-lg text-white">
                <AiOutlineLinkedin
                  className="group-hover:scale-110 transition-all"
                  size={20}
                />
              </span>
              LinkedIn
            </a>

            <a
              className="flex gap-2 items-center text-sm group"
              href="mailto:tenyainmoelwin@gmail.com"
            >
              <span className="flex p-1 bg-gradient-to-tl from-primary via-primary to-blue-400 dark:from-accent dark:via-accent dark:to-green-400 rounded-lg text-white">
                <BiEnvelope
                  className="group-hover:scale-110 transition-all"
                  size={20}
                />
              </span>
              Mail
            </a>
          </div>
        </div>
        <div className="flex-[6]">
          <form onSubmit={handleSubmit} className="tn_form">
            <div
              className={`flex md:flex-row flex-col gap-3 justify-end ${
                isFormSubmitted && "select-none pointer-events-none opacity-75"
              }`}
            >
              <div className="head flex flex-col gap-3">
                <input
                  className="p-2 tn-shadow-1 text-sm rounded focus:border-primary outline-none border border-transparent transition-all duration-300 dark:focus:border-accent bg-gray-100 dark:bg-gray-950"
                  type="text"
                  name="username"
                  id="name"
                  placeholder="Your Name"
                  value={username}
                  onChange={handleChangeInput}
                />
                <input
                  className="p-2 tn-shadow-1 text-sm rounded focus:border-primary outline-none border border-transparent transition-all duration-300 dark:focus:border-accent bg-gray-100 dark:bg-gray-950"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <textarea
                className="p-2 tn-shadow-1 text-sm rounded focus:border-primary outline-none border border-transparent transition-all duration-300 dark:focus:border-accent bg-gray-100 dark:bg-gray-950 min-h-[100px] md:min-h-full area"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>

            <button
              type="submit"
              className={`py-2 min-w-[140px] px-4 bg-primary hover:bg-opacity-75 transition-all duration-300 dark:bg-accent text-white dark:text-white text-xs rounded mt-3 table mx-auto md:mx-0 md:ml-auto ${
                isFormSubmitted && "select-none pointer-events-none"
              }`}
              disabled={isFormSubmitted}
            >
              {isFormSubmitted ? (
                "Sent"
              ) : (
                <span>{!loading ? "Send Message" : "Sending..."}</span>
              )}
            </button>

            {error ? (
              <p className="error-form text-right text-xs text-red-500 mt-2">
                ** Please fill completly. **
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
