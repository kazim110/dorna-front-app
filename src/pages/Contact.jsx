const Contact = () => (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 w-full mb-4"></textarea>
        <button className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
  
  export default Contact;
  