import { Avatar, Chip, Rating, Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import { theTitle } from "../shared/TitlethePage";

const SingleToys = () => {

    const loadedData = useLoaderData();
    theTitle(`${loadedData.name}`)

  return (
    <div className="flex w-5/6 mx-auto my-20 flex-col md:flex-row gap-8">
      <div className="w-1/2">
        <img className="w-64" src={loadedData.pictureUrl} alt="Product" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{loadedData.name}</h2>
        <Chip className="w-48 text-center"
        variant="ghost"
        color="green"
        size="sm"
        value={loadedData?.category ?loadedData.category:"Uncategorised"}
        icon={<span className="content-['']  w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />}
      />
     
        <p className="text-3xl font-bold text-purple-500 my-4 ">
          ${loadedData.price}
        </p>
        <div className="flex items-center mb-4">
        
          <div className="flex items-center gap-2">
      {/* <Rating value={loadedData.rating }  /> */}
      <Typography color="text-lg text-gray-600" className="font-medium">
        {loadedData.rating}.0 Rated
      </Typography>
    </div>
        </div>
        <p className="text-lg text-gray-600 mb-4"><span className="font-semibold">Available Quantity:</span>
          {loadedData.quantityAvailable}</p>
        <p className="text-lg text-gray-600 mb-4">
          <span className="font-semibold">Description:</span>{" "}
          {loadedData.description}
        </p>
        <p className="text-lg text-gray-600 mb-8">
          <span className="font-semibold">Tags:</span> {loadedData.tags}
        </p>
       
            <p className="font-bold  text-gray-600 mb-4">Seller Info</p>
        <div className="flex items-center gap-4">
        <Avatar src={loadedData.sellerPicture} alt={loadedData.sellerName} variant="rounded" />
        <div>
          <Typography variant="h6">{loadedData.sellerName}</Typography>
          <Typography variant="small" color="gray" className="font-normal">{loadedData.sellerEmail}</Typography>
        </div>
      </div> 
        
     
      </div>
    </div>
  );
};

export default SingleToys;
