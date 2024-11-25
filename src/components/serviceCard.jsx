const ServiceCard = ({ title, description, image }) => (
    <div className="border p-4 rounded shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
  
  export default ServiceCard;
  