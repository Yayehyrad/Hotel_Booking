const Footer = () => {
  return (
    <div className="w-full bg-dark  pt-[120px] lg:px-[150px] px-8 pb-[56px] mt-[120px]">
      <div className="w-full flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-8">
        <div className="flex flex-col gap-7">
          <span className="font-semibold text-[#FFF] text-[28px]">
            Euphoria
          </span>
          <p className="font-medium text-[#FFF] text-[15px] max-w-[300px] leading-7">
            Euphoria is a premier luxury hotel booking platform, curating the
            finest accommodations worldwide. Discover a new level of travel
            experiences.
          </p>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Quick Links
          </span>
          <a href="#" className="text-[#FFF] font-medium text-[15px] mb-4">
            Home
          </a>
          <a href="#" className="text-[#FFF] font-medium text-[15px] mb-4">
            Explore Hotels
          </a>
          <a href="#" className="text-[#FFF] font-medium text-[15px]">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Contact
          </span>
          <a href="#" className="text-[#FFF] font-medium text-[15px] mb-4">
            Phone: +1 (555) 123-4567
          </a>
          <a href="#" className="text-[#FFF] font-medium text-[15px] mb-4">
            Email: support@euphoria.com
          </a>
          <a href="#" className="text-[#FFF] font-medium text-[15px]">
            Address: 123
          </a>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Follow us
          </span>
          <a href="#" className="text-[#FFF] font-medium text-[15px] mb-4">
            Facebook
          </a>
          <a href="#" className="text-[#FFF] font-medium text-[15px] mb-4">
            Twitter
          </a>
          <a href="#" className="text-[#FFF] font-medium text-[15px]">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="bg-blue-800 py-10">
<div className="container mx-auto flex justify-between items-center">
  <span className="text-3xl text-white font-bold tracking-tight">
    MernHolidays.com
  </span>
  <span className="text-white font-bold tracking-tight flex gap-4">
    <p className="cursor-pointer">Privacy Policy</p>
    <p className="cursor-pointer">Terms of Service</p>
  </span>
</div>
</div> */
}
