import { Button, Card, CardBody, IconButton, Typography } from "@material-tailwind/react";
import {
    StarIcon,
    HeartIcon,
  
  } from "@heroicons/react/24/solid";


import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../authprovider/AuthProvider";




  


const ToysCard = ({body}) => {
const {user} = useContext(UserContext);
const nevigate= useNavigate();

    const detailsHandle=(id)=>{
      if(!user){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'warning',
            title: 'You have to log in first to view details '
          })
          nevigate(`/toy/${id}`)
      }else{
        nevigate(`/toy/${id}`)
      }
    }


    return (
        <div className="grid md:grid-cols-3 gap-4">



             {
             body.slice(0,6).map((n) => (
                  <>
                    <Card className="max-w-[26rem]  shadow-lg">
                      <div className="md:p-4 flex justify-center">
                        <img
                          className="w-36 h-36 object-contain	"
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
                      {/* <Link to={`/toy/${n._id}`}> */}
                      <Button
                      
                          onClick={()=>detailsHandle(n._id)}
                          id="btn-detail"
                          size="sm"
                          variant="outlined"
                          className=" "
>
                          Details
                        </Button>
                     
                        </div>
                      </CardBody>
                     
                    </Card>
                  </>
                ))
             }
 
               
        </div>
    );
};

export default ToysCard;