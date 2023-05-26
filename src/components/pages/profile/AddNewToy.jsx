import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Option,
  Rating,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../../authprovider/AuthProvider";
import { theTitle } from "../../shared/TitlethePage";

const AddNewToy = () => {
    theTitle("Add New Toy")

  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(4);
  const nevigate = useNavigate();

  const [category, setCategory] = useState("");
  const categorySelect = (value) => {
    setCategory(value);
   
  };

  //updateHanler
  const addHanlder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.title.value;
    const pictureUrl = form.pictureUrl.value;
    const price = form.price.value;
    const quantityAvailable = form.quantityAvailable.value;
    const tags = form.tags.value;
    const description = form.description.value;
   
    const sellerName = user.displayName;
    const sellerEmail = user.email;
    const sellerPicture = user.photoURL;
    const date = new Date();
    const addedDate = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const formData = {
      name,
      pictureUrl,
      category,
      price,
      quantityAvailable,
      tags,
      description,
      sellerName,
      sellerEmail,
      sellerPicture,
      addedDate,
      rating,
    };

    console.log(formData);

    fetch("https://zooplay-server.vercel.app/toys/", {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          Swal.fire({
            title: `<strong> ${formData.name} Added SuccesseFuly</strong>`,
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
      <form onSubmit={addHanlder}>
        <CardBody className="">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input required name="title" label="Title" size="lg" />
            <Input required name="pictureUrl" label="Photo Url" size="lg" />
            <Select required
              value={category}
              onChange={categorySelect}
              label="Select Category"
            >
              <Option value="Teddy">Teddy</Option>
              <Option value="Horse">Horse</Option>
              <Option value="Dinosaur">Dinosaur</Option>
              <Option value="Dogs">Dogs</Option>
              <Option value="Cat">Cat</Option>
              <Option value="Unicorn">Unicorn</Option>
            </Select>
            <Input required type="number" name="price" label="Price" size="lg" />
            <Input required name="quantityAvailable" label="Quantity" size="lg" />
            <Input required name="tags" label="Tags" size="lg" />
          <div className="flex items-center gap-3">
          <Rating  value={rating} onChange={(value) => setRating(value)} />
            <Typography color="blue-gray" className="font-medium">
              {rating}.0 Rated
            </Typography>
          </div>
            <Textarea required name="description" label="Description" size="lg" />
           
          </div>
         
        </CardBody>
        <CardFooter className="pt-0"> <Button type="submit" className="w-full">
              Add New Toy
            </Button></CardFooter>
      </form>
    </Card>
  );
};

export default AddNewToy;
