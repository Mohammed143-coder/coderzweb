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
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]" ref={revealRef}>
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50" />
      <div className="absolute -left-20 top-1/2 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="reveal max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="reveal mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Start Your <span className="text-primary text-glow">Growth Journey</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Ready to engineer your digital masterpiece? Our strategy team is standing by to transform your vision into reality.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap lg:items-stretch">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="reveal relative h-full rounded-3xl border border-gray-100 bg-white/50 p-8 shadow-2xl backdrop-blur-xl dark:border-white/5 dark:bg-[#111322]/50 sm:p-12">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="name" className="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-6 py-4 text-base font-medium text-black outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/5 dark:bg-white/5 dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="email" className="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-6 py-4 text-base font-medium text-black outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/5 dark:bg-white/5 dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="phone" className="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone No"
                        placeholder="+91 00000 00000"
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-6 py-4 text-base font-medium text-black outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/5 dark:bg-white/5 dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="subject" className="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Web Development"
                        className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-6 py-4 text-base font-medium text-black outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/5 dark:bg-white/5 dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-xs font-bold uppercase tracking-widest text-gray-400">Project Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project goals..."
                        className="w-full resize-none rounded-2xl border border-gray-100 bg-gray-50/50 px-6 py-4 text-base font-medium text-black outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/5 dark:bg-white/5 dark:text-white dark:focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-primary text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(74,108,247,0.5)] active:scale-95 disabled:opacity-70 md:w-auto md:px-12"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? "Transmitting..." : "Send Request"}
                        <LuSendHorizontal className="transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-[100%]" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="reveal relative h-full min-h-[400px] overflow-hidden rounded-3xl border border-gray-100 dark:border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.785745800984!2d78.19866667537708!3d12.530348124398172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac33297879eee1%3A0x8e6a7e64428494c3!2sCoderzWeb!5e0!3m2!1sen!2sin!4v1771352981801!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.8) opacity(0.8)' }}
                loading="lazy" 
                title="Google Maps Location"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#111322] via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
