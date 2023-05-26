import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";


import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { theTitle } from "../../shared/TitlethePage";


const UpdateToys = () => {

  theTitle("Update Toys")
  const loadedData = useLoaderData();
  const nevigate = useNavigate();
  

  //updateHanler
  const updateHanlder = (event) => {




    event.preventDefault();
  
    

    const form = event.target;
  
    const price = form.price.value;
    const quantityAvailable = form.quantityAvailable.value;
   
    const description = form.description.value;
  

    const formData = {

      price,
      quantityAvailable,
 
      description,
   
    
    };

    console.log(formData);

    fetch(`https://zooplay-server.vercel.app/toys/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: `<strong> Updated SuccesseFuly</strong>`,
            icon: "success",
            confirmButtonText: "Cool",
          }).then((result) => {
            if (result.isConfirmed) {
              nevigate("/mytoys");
            }
          });
          form.reset();
        }
        console.log(data);
      });
  };

  return (
    <Card className="mx-auto w-full ">
      <form onSubmit={updateHanlder}>
        <CardBody className="">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input
            disabled
              name="title"
              defaultValue={loadedData.name}
              label="Title"
              size="lg"
            />
            <Input
            disabled
              name="pictureUrl"
              defaultValue={loadedData.pictureUrl}
              label="Photo Url"
              size="lg"
            />
           <Select disabled value={loadedData.category}  defaultValue={loadedData.category}  label="Select Category">
        <Option  value="Teddy">Teddy</Option>
        <Option value="Horse">Horse</Option>
        <Option value="Dinosaur">Dinosaur</Option>
        <Option value="Dogs">Dogs</Option>
        <Option value="Cat">Cat</Option>
        <Option value="Unicorn">Unicorn</Option>
      </Select>
            <Input
              name="price"
              defaultValue={loadedData.price}
              label="Price"
              size="lg"
            />
            <Input
              name="quantityAvailable"
              defaultValue={loadedData.quantityAvailable}
              label="Quantity"
              size="lg"
            />
            <Input
            disabled
              name="tags"
              defaultValue={loadedData.tags}
              label="Tags"
              size="lg"
            />
          
         
          </div>
          <Textarea
            name="description"
            defaultValue={loadedData.description}
            label="Description"
            size="lg"
          />
           <Button type="submit" className="">
            Update Now
          </Button>
         
        </CardBody>
        <CardFooter className="pt-0">
          
        </CardFooter>
      </form>
    </Card>
  );
};

export default UpdateToys;
