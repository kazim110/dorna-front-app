import ServiceCard from "../components/serviceCard.jsx";

const Home = () => (
  <div>
    <section className="bg-blue-500 text-white text-center p-10">
      <h1 className="text-4xl font-bold">Welcome to AdCompany</h1>
      <p>Your partner for impactful advertising solutions.</p>
    </section>
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <ServiceCard
        title="Social Media Marketing"
        description="Boost your brand's presence online."
        image="https://via.placeholder.com/300"
      />
      <ServiceCard
        title="SEO Optimization"
        description="Rank higher on search engines."
        image="https://via.placeholder.com/300"
      />
      <ServiceCard
        title="Creative Design"
        description="Stand out with stunning visuals."
        image="https://via.placeholder.com/300"
      />
    </section>
  </div>
);

export default Home;
