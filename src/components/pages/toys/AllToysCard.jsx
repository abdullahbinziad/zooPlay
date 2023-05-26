import { Button, Card, CardBody, IconButton, Typography } from "@material-tailwind/react";
import { Link,  } from "react-router-dom";
import {
    StarIcon,
    HeartIcon,
  
  } from "@heroicons/react/24/solid";


const AllToysCard = ({n}) => {
    return (
        <div>
             <Card className="w-full max-w-[26rem] shadow-lg">
                    <div className="p-4 flex justify-center">
                      <img
                        className="w-36 h-36	"
                        src={n.pictureUrl}
                        alt="ui/ux review check"
                      />
                      <div className="" />
                      <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                      >
                        <HeartIcon className="h-6 w-6" />
                      </IconButton>
                    </div>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {n.name.slice(0, 24)}...
                        </Typography>
                        <Typography
                          color="blue-gray"
                          className="flex items-center gap-1.5 font-normal"
                        >
                          <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                          {n.rating}
                        </Typography>
                      </div>
                      <div className="flex justify-between  ">
                        <Typography className="">
                          Price :
                          <span className="text-xl font-semiold">
                            ${n.price}
                          </span>
                        </Typography>
                    <Link to={`/toy/${n._id}`}>
                    <Button
                        
                        id="btn-detail"
                        size="sm"
                        variant="outlined"
                        className=" "
>
                        Details
                      </Button>
                    </Link>
                      </div>
                    </CardBody>
                   
                  </Card>
        </div>
    );
};

export default AllToysCard;