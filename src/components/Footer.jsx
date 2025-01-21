import reflexLogo from '../assets/reflex-logo.png';
import avanLogo from '../assets/avan-logo.png';
import parsaLogo from '../assets/parsa-logo.png';
import safiLogo from '../assets/safi-logo.png';
const Footer = () => (
  <footer className="bg-black text-white py-8">
  <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto text-center">
    <h4 className='text-4xl font-bold uppercase'>Partnerships</h4>
    <div className='sm-text-xl flex flex-row m-4'>
      <img className='w-[40%]' src={reflexLogo} alt="Reflex Creative Group" />
      <img className='w-[40%]' src={avanLogo} alt="Reflex Creative Group" />
      <img className='w-[40%]' src={parsaLogo} alt="Reflex Creative Group" />
      <img className='w-[40%]' src={safiLogo} alt="Reflex Creative Group" />
    </div>
  </div>
</footer>
  );
  
  export default Footer;
  