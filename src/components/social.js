import Link from "next/link";

const Social = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-base-200" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat!
            I'm always open to discussing new projects and ideas.
          </p>
          <form action="mailto:kknurarief@gmail.com" method="post" encType="text/plain" className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-md"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-md"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full max-w-md"
                rows="5"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto hover:scale-105 transition-transform">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social-media" className="py-24 bg-base-200" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Connect with Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Follow me on social media to stay updated
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="https://twitter.com/yourprofile" target="_blank" className="text-primary hover:text-primary-focus">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="text-primary hover:text-primary-focus">
              <i className="fab fa-linkedin fa-2x"></i>
            </Link>
            <Link href="https://github.com/yourprofile" target="_blank" className="text-primary hover:text-primary-focus">
              <i className="fab fa-github fa-2x"></i>
            </Link>
            <Link href="https://instagram.com/yourprofile" target="_blank" className="text-primary hover:text-primary-focus">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
