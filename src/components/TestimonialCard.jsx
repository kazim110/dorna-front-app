const TestimonialCard = ({ name, feedback }) => (
    <div className="border p-4 rounded shadow">
      <p className="italic">"{feedback}"</p>
      <h3 className="text-lg font-bold mt-2">- {name}</h3>
    </div>
  );
  
  export default TestimonialCard;
  