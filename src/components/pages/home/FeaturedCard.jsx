import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


const FeaturedCard = (props) => {
const{pictureUrl,name,category,quantityAvailable,featureId}= props.feature;

console.log();

console.log(props.feature);
  return (
   
    <Card data-aos="zoom-in-up" className={`flex-row-reverse flex-1 mt-2 p-2 items-center ${featureId == 1 ? 'bg-[#E5ECF2]' : (featureId == 3 ? 'bg-[#FFB74A]/75' : 'bg-zooTertiary')}`}>

    <div  className="w-2/5 shrink-0 m-0 rounded-r-none">
      <img 
        src={pictureUrl}
        alt="image" 
        className=" object-contain"
      />
    </div>
    <CardBody>
      <Typography variant="h6" color="blue" className="uppercase mb-4">{category}</Typography>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {name}
      </Typography>
    
      
    </CardBody>
  </Card>


  );
};

export default FeaturedCard;
