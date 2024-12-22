import reflexLogo from '../assets/reflex-logo.png';
const Footer = () => (
  <footer className="bg-black text-white py-8">
  <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto text-center">
    <h4 className='text-4xl font-bold uppercase'>Partnerships</h4>
    <img className='w-[40%]' src={reflexLogo} alt="Reflex Creative Group" />
  </div>
</footer>
  );
  
  export default Footer;
  