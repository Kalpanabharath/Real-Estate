import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [formsubmitted, setformsubmitted] = useState(false);

  const formsubmit = (e) => {
    e.preventDefault();
    setname("");
    setemail("");
    setmessage("");
    setformsubmitted("true");
    toast.success("Form  Submitted Successfuly");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
        id="Contact"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Contact
          <span className="underline underline-offset-4 decoration-1 under font-light">
            With Us
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>

        <form className="max-w-2xl mx-auto text-gray-600 pt-8">
          <div className="flex flex-wrap ">
            <div className="w-full  pt-2 md:w-1/2 text-left ">
              Your Name
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
            <div className="w-full  pt-2  md:w-1/2 text-left  md:pl-4 ">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="Email"
                placeholder="YourEmail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="my-6 text-left">
            Message
            <textarea
              name="Message"
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
            onClick={formsubmit}
          >
            Send Message
          </button>
        </form>
        {formsubmitted && (
          <p className="text-gray-400">Form Sumitted Sucessfuly !</p>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
