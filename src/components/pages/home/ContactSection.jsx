import {
  
    Bars2Icon,HomeIcon,PhoneIcon,InboxIcon
   
  } from "@heroicons/react/24/outline";

const ContactSection = () => {
    return (
        <div>
          <div className="flex justify-center items-center md:w-5/6 bg-white">
            {/* COMPONENT CODE */}
            <div className="container mx-auto my-4 md:px-4 ">
              <div  data-aos="zoom-in-right" className="md:w-3/4 sm:w-5/6 relative p-8 my-4 md:px-12    rounded-2xl shadow-2xl">
                <div className="flex justify-center">
                  <h1 className="font-bold uppercase text-4xl">Get in Touch</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="First Name*" />
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name*" />
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email*" />
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="number" placeholder="Phone*" />
                </div>
                <div className="my-4">
                  <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" defaultValue={""} />
                </div>
                <div className="my-2 w-1/2 ">
                  <button className="uppercase text-white text-sm font-bold tracking-wide bg-zooSecondary  p-3 rounded-lg w-full 
                        focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="md:w-96 p-5 md:px-8 md:py-12 md:absolute md:right-48  md:-mt-96 md:h-96 bg-zooSecondary rounded-2xl">
                <div className="flex flex-col text-white">
                  <h1 className="font-bold uppercase md:text-4xl text-2xl my-4">Drop in our office</h1>
            <div className="space-y-4">
            <p className="flex items-center gap-1"><HomeIcon className="w-14"/> Shop-3/1, 2nd Floor (৩য় তলা), Eastern Plaza, Hatirpool, Dhaka</p>
             <p className="flex items-center gap-1"><PhoneIcon className="w-8"/> Phone: 01326-265216</p>
             <p className="flex items-center gap-1"><InboxIcon className="w-8"/>Email: cc.believerssign@gmail.com
</p>
            </div>
                </div>
                </div>
                </div>
                </div>
                </div>
       
    );
};

export default ContactSection;