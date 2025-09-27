export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you have a question or just want to say hi, my inbox is always
          open!
        </p>
        <form className="bg-card p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-muted rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-muted rounded-md"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="mt-4 p-3 border border-muted rounded-md w-full"
            rows="4"
          ></textarea>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
