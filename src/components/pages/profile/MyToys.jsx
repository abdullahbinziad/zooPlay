import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import React, { useContext, useEffect } from "react";
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton,
  Button,
} from "@material-tailwind/react";


import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../../authprovider/AuthProvider";
import { theTitle } from "../../shared/TitlethePage";

const MyToys = () => {

    theTitle("My Toys")
  const { user } = useContext(UserContext);


  const navigate = useNavigate();
  const [mytoys, setMytoys] = useState([]);

  useEffect(() => {
    fetch(`https://zooplay-server.vercel.app/toys?sellerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMytoys(data));
  }, [user]);

  

  //function for delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://zooplay-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount == 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const restData = mytoys.filter((n) => n._id !== id);
              setMytoys(restData);
            }
          });
      }
    });
  };

  // Handle edit

  //handle view details
  const handleView = (id) => {
    navigate(`/toy/${id}`);
  };

  //hanlde dialog

  const TABLE_HEAD = [
    "Figure",
    "Title",
    "Amount",
    " Quantiy",
    "Category",
    " Added Date",
    "Action",
  ];

  return (
    <Card className="h-full w-full">
      <div className="mt-3 flex justify-end">
        <Button onClick={() => navigate("/addNewToys")} className="w-48 mr-6">
          Add New
        </Button>
      </div>

      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
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
            {mytoys.map(
              (
                {
                  _id,
                  pictureUrl,
                  name,
                  price,
                  quantityAvailable,
                  description,
                  category,
                  tags,
                  addedDate,
                },
                index
              ) => {
                const isLast = index === mytoys.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50 max-w-[200px]";

                return (
                  <>
                    <tr key={name}>
                      <td className={classes}>
                        <img
                          src={pictureUrl}
                          alt={name}
                          size="lg"
                          className=" w-24 h-24  rounded-md p-1  object-contain"
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          ${price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {quantityAvailable}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {category}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {addedDate ? addedDate : "Not Mentioned"}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Tooltip content="View Toys">
                          <IconButton
                            onClick={() => handleView(_id)}
                            variant="text"
                            color="blue-gray"
                          >
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip content="Edit Toys">
                          <Link to={`/updateToys/${_id}`}>
                            <IconButton variant="text" color="blue-gray">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip content="Delete">
                          <IconButton
                            onClick={() => handleDelete(_id)}
                            variant="text"
                            color="blue-gray"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
    </Card>
  );
};

export default MyToys;
