'use client'
import React from "react";
import { PiFlipVerticalLight } from "react-icons/pi";


const Contact = () => {
   const [result, setResult] = React.useState("");
  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a8555757-13ec-420e-b3cf-b6fdb2c5ea5e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-gray-400 sm:text-3xl lg:text-2xl xl:text-3xl">
                Juat a form way!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our team is ready to provide the answers and support you need. Let’s make things happen together!
              </p>
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-gray-400"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-gray-400"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-gray-400"
                      >
                        Phone No
                      </label>
                      <input
                        type="number"
                        name="phone No"
                        placeholder="Phone No..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-gray-400"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-gray-400"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type='submit' className="flex items-center gap-2 shadow-submit dark:shadow-submit-dark  bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 rounded-lg" >
                      Send <PiFlipVerticalLight className="w-6 h-6"/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center w-full px-4 lg:w-5/12 xl:w-4/12 font-bold text-xl shadow-sm animate-pulse text-gray-500">
          Location will be update soon...
            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
