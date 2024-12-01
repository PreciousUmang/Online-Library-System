function Contact() {
  return (
    <div className="p-8 bg-secondary text-primary" style={{minHeight:"calc(100vh-96px)"}}>
      <h1 className="text-4xl font-bold text-center mb-6 text-accent">
        Contact Me
      </h1>
      <p className="text-lg text-center mb-4">
        Feel free to reach out for collaborations or inquiries.
      </p>
      <div className="flex justify-center">
        <div className="bg-darkAccent p-6 rounded-lg shadow-lg w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-primary text-darkAccent focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-primary text-darkAccent focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-primary text-darkAccent focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full py-3 bg-accent text-primary rounded-md hover:bg-darkAccent duration-300 transform transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <p className="text-center mt-8">Or reach me directly at: <a href="mailto:"><strong className="hover:rounded-md hover:p-1 hover: hover:bg-accent duration-300">umang@technologist.com</strong></a>
      </p>
    </div>
  );
}

export default Contact;