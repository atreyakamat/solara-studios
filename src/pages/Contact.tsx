import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
    // Reset form (optional)
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#141118] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2f2839] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Solara Studios</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Case Studies</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">About Us</a>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6211d4] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Contact Us</p>
                <p className="text-[#a89db9] text-sm font-normal leading-normal">
                  We're here to help you navigate the future of business. Reach out to us through any of the channels below, and let's start a conversation about how Solara Studios
                  can transform your operations with AI and automation.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2f2839] focus:border-none h-14 placeholder:text-[#a89db9] p-4 text-base font-normal leading-normal"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2f2839] focus:border-none h-14 placeholder:text-[#a89db9] p-4 text-base font-normal leading-normal"
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="subject"
                    placeholder="Subject"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2f2839] focus:border-none h-14 placeholder:text-[#a89db9] p-4 text-base font-normal leading-normal"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2f2839] focus:border-none min-h-36 placeholder:text-[#a89db9] p-4 text-base font-normal leading-normal"
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>
              </div>
              {error && <div className="text-red-400 px-4 py-2">{error}</div>}
              {submitted && <div className="text-green-400 px-4 py-2">Thank you for contacting us!</div>}
              <div className="flex px-4 py-3 justify-start">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6211d4] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Send Message</span>
                </button>
              </div>
            </form>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Other Ways to Connect</h2>
            <div className="flex items-center gap-4 bg-[#141118] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#2f2839] shrink-0 size-12" data-icon="Envelope" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Email</p>
                <p className="text-[#a89db9] text-sm font-normal leading-normal line-clamp-2">contact@solarastudios.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#141118] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#2f2839] shrink-0 size-12" data-icon="Phone" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Phone</p>
                <p className="text-[#a89db9] text-sm font-normal leading-normal line-clamp-2">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#141118] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#2f2839] shrink-0 size-12" data-icon="WhatsappLogo" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">WhatsApp</p>
                <p className="text-[#a89db9] text-sm font-normal leading-normal line-clamp-2">Chat with us instantly</p>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Location</h2>
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwPH_I-AH-Nrbonb_oGSyUZuTrt-Tw2MMxiZi9GHQMFRP7mzpt0jTVbEyzTFmOwBYnl9CXkQffxEOvKrQkQudA6TZY81SjcQ2QoM5A0Joqsl6UVIbO286YlEkCX7Z5kvslrRcY24wqIl_L0kFzT8oyWo03yHDPRUKCeKN6BhQHTEFxKkBPOKJperBwVMw5844U_y-8_Kr_KP-n62AB1S27CbeuJfxRo5UdGR4AAGDtTPFBAJRz4iMajREWkr-XX6QHvL3ErVaEVCeK")' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
