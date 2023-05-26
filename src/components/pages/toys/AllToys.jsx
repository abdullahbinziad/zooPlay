import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EyeIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Select,
  Option,
  Rating,
} from "@material-tailwind/react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { theTitle } from "../../shared/TitlethePage";

const TABLE_HEAD = [
  "Figure",
  "Title, Category",
  "Price",
  "Stocks Quantity",

  "Vendor",
  "Added Date",
  "View Details",
];

const AllToys = () => {

    theTitle("All Toys")

  const loadedData = useLoaderData();
  const nevigate = useNavigate();
  const [alltoys, setAlltoys] = useState(loadedData);
  const [search, setSearch] = useState("");
  console.log(search);
  console.log(alltoys);

  const [category, setCategory] = useState("");
//   const [sort, setSort] = useState("");

//category select


const categorySelect = (value) => {
  
if(value !== null){
    fetch(`https://zooplay-server.vercel.app/toys?category=${value}`)
    .then((res) => res.json())
    .then((data) => setAlltoys(data))
    .catch((error) => console.error(error));
}
  
};

//sort function 
const sortSelet = (value) => {
console.log(value);

    fetch(`https://zooplay-server.vercel.app/toys?sortBy=price&sortOrder=${value}`)
    .then((res) => res.json())
    .then((data) => setAlltoys(data))
    .catch((error) => console.error(error));
    
   
        
      };






  const filteredToys = alltoys.filter((item) => {
    return search == "" || item.name.toLowerCase().includes(search);
  });

  return (
    <Card className="h-full w-full my-10">
      <div className="rounded-none px-6 py-2">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="">
            <Select
              variant="outlined"
              
              onChange={(value)=>categorySelect(value)}
              label="Select Category"
            >
             
             
              <Option value={null}>All Selected</Option>
              <Option value="Teddy">Teddy</Option>
              <Option value="Horse">Horse</Option>
              <Option value="Dinosaur">Dinosaur</Option>
              <Option value="Dogs">Dogs</Option>
              <Option value="Cat">Cat</Option>
              <Option value="Unicorn">Unicorn</Option>
            </Select>
          </div>
      
          <Input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-3/4 " />}
          />
              <div className="">
            <Select
              variant="outlined"
              
              onChange={(value)=>sortSelet(value)}
              label="Sort By"
            >
             
             
        
              <Option value="asc">Low Price To High </Option>
              <Option value="desc">Hight Price To Low</Option>
             
            </Select>
          </div>
          <Button
            onClick={() => nevigate("/addNewToys")}
            className="flex w-48 items-center gap-2"
            color="blue"
            size="xs"
          >
            <UserPlusIcon strokeWidth={2} className="h-4 " /> Add Toys
          </Button>
        </div>
      </div>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredToys.slice(0,20).map(
              (
                {
                  _id,
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
                },
                index
              ) => {
                const isLast = index === alltoys.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 max-w-[250px]  border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <img
                          className="w-24 h-24 object-contain"
                          src={pictureUrl}
                          alt={name}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {category}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            ${price}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={`${
                            quantityAvailable ? quantityAvailable : ""
                          } Available`}
                          color={quantityAvailable > 10 ? "green" : "amber"}
                        />
                         <div className="flex items-center gap-3">
          <Rating readonly  value={4}/>
          
          </div>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={sellerPicture}
                          alt={sellerName}
                          size="sm"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {sellerName}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {sellerEmail}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {addedDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="View Details">
                        <IconButton
                          onClick={() => nevigate(`/toy/${_id}`)}
                          variant="text"
                          color="blue-gray"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AllToys;
