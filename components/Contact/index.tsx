"use client";
import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const revealRef = useScrollReveal();

  const onSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone No");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const whatsappMessage = `*New Request From Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Subject:* ${subject}\n*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917904463409?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setLoading(false);
      event.target.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28" aria-label="Contact us">
      <div className="container" ref={revealRef}>
        <div className="-mx-4 flex flex-wrap rounded-full">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="reveal mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Phone No
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone No"
                        placeholder="Phone No"
                        className="w-full rounded-sm border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-sm border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-sm border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      {loading ? "Sending..." : "Submit Ticket"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-2 lg:w-5/12 xl:w-4/12 rounded-xl">
            <div className="reveal relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.785745800984!2d78.19866667537708!3d12.530348124398172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac33297879eee1%3A0x8e6a7e64428494c3!2sCoderzWeb!5e0!3m2!1sen!2sin!4v1771352981801!5m2!1sen!2sin" width="100%" height="640px" loading="lazy" ></iframe>            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
