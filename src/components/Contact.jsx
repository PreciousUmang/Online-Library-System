function Contact() {
  return (
    <div className="flex flex-col justify-center bg-secondary min-h-[calc(100vh-6rem)] text-primary" >
      <h1 className="mb-6 font-bold text-4xl text-accent text-center">
        Contact Me
      </h1>
      <p className="mb-4 text-center text-lg">
        Feel free to reach out for collaborations or inquiries.
      </p>
      <div className="flex justify-center">
        <div className="bg-darkAccent shadow-lg p-6 rounded-lg w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-primary p-3 rounded-md focus:ring-2 focus:ring-accent w-full text-darkAccent focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-primary p-3 rounded-md focus:ring-2 focus:ring-accent w-full text-darkAccent focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="bg-primary p-3 rounded-md focus:ring-2 focus:ring-accent w-full text-darkAccent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-darkAccent py-3 rounded-md w-full text-primary transform transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <p className="mt-8 text-center">Or reach me directly at: <a href="mailto:"><strong className="hover:bg-accent hover:p-1 hover:rounded-md hover: duration-300">umang@technologist.com</strong></a>
      </p>
    </div>
  );
}

export default Contact;