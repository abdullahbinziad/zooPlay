import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "../../../authprovider/AuthProvider";
import FeaturedCard from "./FeaturedCard";
import ToysByTab from "./ToysByTab";
import  './toysbytab.css'
import { theTitle } from "../../shared/TitlethePage";
import ContactSection from "./ContactSection";

const Home = () => {
  theTitle("Home | zooPlay")
  const {loading} = useContext(UserContext);

 

  const sliderData = [
    {
      title: "GUND Pinchy Teddy Bear, ",
      caption:
        "Pinchy is a cuddly 17” large teddy bear with a big smile, a round, squishy belly, understuffed ",
      link: "/teddy",
      img: "https://res.cloudinary.com/dkegwuqcf/image/upload/v1684386831/zooPlay/demo3-2337591600_2_vhntml.png",
    },
    {
      title: "Mary Meyer Putty Bear ",
      caption:
        "Cream Putty Bear-small is a teddy bear friend made with cream colored",
      link: "/teddy",
      img: "https://res.cloudinary.com/dkegwuqcf/image/upload/v1684387325/demo3-2337591600_3_hwpghc.png",
    },
    {
      title: "Pillow Pets Originals Mr. ",
      caption:
        "Pillow Pets presents super soft, cute, & adorable stuffed animals .",
      link: "/teddy",
      img: "https://res.cloudinary.com/dkegwuqcf/image/upload/v1684394168/demo3-2337591600_naoojw.png",
    },
  ];

  const fetured = [
    {
      pictureUrl:
        "https://res.cloudinary.com/dkegwuqcf/image/upload/v1684400727/81NmnshwK9L._AC_UL400_-removebg-preview_vrilhi.png",
      name: "Cuddly Companion Teddy Bear",
      category: "Teddy",
      quantityAvailable: "20",
      featureId: "1",
    },
    {
      pictureUrl:
        "https://res.cloudinary.com/dkegwuqcf/image/upload/v1684400772/81EvDgw9POL._AC_UL400_-removebg-preview_dldznu.png",
      name: "Western Rodeo Horse",
      category: "Horse",
      quantityAvailable: "25",
      featureId: "2",
    },
    {
      pictureUrl:
        "https://res.cloudinary.com/dkegwuqcf/image/upload/v1684400825/71KTIqPFZ2L._AC_UL400_-removebg-preview_ehtx4p.png",
      name: "Unicorn Dress-Up Set",
      category: "Unicorn",
      quantityAvailable: "20",
      featureId: "3",
    },
  ];

  return (
    <div className="z-1">
      <Carousel className=" h-[400px] bg-zooTertiary"  data-aos="fade-up"
     data-aos-duration="1000">
        {sliderData.map((slide) => (
          <>
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                alt="image 1"
                className="md:h-full md:w-full object-cover"
              />
              <div className=" absolute top-0  inset-0 grid md:h-full md:w-3/4 md:left-20 items-center ">
                <div className="w-3/4 text-left px-4 md:w-2/4">
                  <Typography
                    variant="h2"
                    color="gray"
                    className="mb-4 text-2xl md:text-3xl lg:text-4xl"
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="gray"
                    className="mb-12 opacity-80"
                  >
                    {slide.caption}
                  </Typography>
                  <div className="flex justify-start gap-2">
                    <Link to={slide.link}>
                      {" "}
                      <Button size="lg" className="bg-zooSecondary">
                        Explore
                      </Button>
                    </Link>
                    <Link to="">
                      <Button size="lg" className="bg-zooPrimary" variant="outlined">
                        Gallery
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </Carousel>

      <section>
        {/* <h1 className="text-3xl text-center py-4 font-bold">Our Featured Catagory</h1> */}

        <div className=" grid md:grid-cols-3 gap-3  md:w-5/6 mx-auto py-2">
          {fetured.map((feature) => (
            <FeaturedCard  key={feature._id} feature={feature}></FeaturedCard>
          ))}
        </div>
      </section>
      <section className="py-4 md:flex  gap-4">
        <div data-aos="fade-up"
     data-aos-duration="3000" className="md:w-3/4 ">
         
        <ToysByTab></ToysByTab>
        </div>
      
        <div className="md:w-1/4"	>
         <img   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500"   className="w-full h-fit" src="https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409475.jpg?w=360&t=st=1684410719~exp=1684411319~hmac=2979b1e17284e7f0d5450049639aa9e988b74d216f92cac935098b4d2aab1936" alt="" />
         <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" id="zooBanner2" className=" bg-zooTertiary w-full min-h-[353px] my-3">

         </div>
        </div>
      </section>


      <section   data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000" className="w-full h-full mx-auto bg-[#56DDD6]">
        <img className="object-cover md:h-48 sm:24" src="https://res.cloudinary.com/dkegwuqcf/image/upload/v1684436750/demo3-2307818404_xcv4aj.png" alt="" />
      </section>

      <section className="w-full mt-20">
        <ContactSection></ContactSection>
      </section>
    </div>
  );
};

export default Home;
