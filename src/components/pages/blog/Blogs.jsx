import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Blogs() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 

  const features = [
    "Data model",
    "Query language",
    "Scalability",
    "Data types",
    "Use cases",
  ];

  const sqlData = [
    "Relational",
    "SQL",
    "Vertical",
    "Structured",
    "OLTP, OLAP",
  ];

  const nosqlData = [
    "Non-relational",
    "NoSQL-specific languages or ad-hoc queries",
    "Horizontal",
    "Structured, semi-structured, and unstructured",
    "Big data, real-time data, and unstructured data",
  ];

  return (
  <div className="my-20">
    <h1 className="text-center font-bold text-4xl text-gray-800 mb-10">Blogs</h1>
      <Fragment >
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </AccordionHeader>
        <AccordionBody>
Access tokens are short-lived tokens that are used to access protected resources.
Refresh tokens are long-lived tokens that can be used to obtain new access tokens.
Access tokens and refresh tokens are typically stored in the client-side browser.
Access tokens should be stored in a secure location.
Refresh tokens can be stored in a less secure location if the application has other security measures in place to protect them.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Compare SQL and NoSQL databases?

        </AccordionHeader>
        <AccordionBody>
        <div>
      <table style={{borderCollapse: "collapse", width: "100%"}}>
        <thead>
          <tr>
            <th style={{backgroundColor: "#f0f0f0", padding: "8px", textAlign: "center"}}>Feature</th>
            <th style={{backgroundColor: "#f0f0f0", padding: "8px", textAlign: "center"}}>SQL</th>
            <th style={{backgroundColor: "#f0f0f0", padding: "8px", textAlign: "center"}}>NoSQL</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td style={{padding: "8px"}}>{feature}</td>
              <td style={{padding: "8px"}}>{sqlData[index]}</td>
              <td style={{padding: "8px"}}>{nosqlData[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        What is express js? What is Nest JS ?
        </AccordionHeader>
        <AccordionBody>
         
Express.js is a minimal and flexible Node.js web application framework. Nest.js is a TypeScript framework that builds on top of Express.js and adds additional features. Both frameworks are good choices for building web applications, but Nest.js is a good choice for building more complex web applications.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        What is MongoDB aggregate and how does it work?
        </AccordionHeader>
        <AccordionBody>
         
        MongoDB aggregate is a powerful feature that allows for advanced data processing and analysis within MongoDB. It works by providing a flexible framework for performing complex operations on the data, such as grouping, filtering, sorting, and transforming documents. Aggregation pipelines consist of stages that process documents sequentially, allowing for efficient data manipulation and generating aggregated results. It supports a wide range of operations like $match, $group, $sort, $project, and more, enabling developers to perform complex data transformations and analytics in a single query.
        </AccordionBody>
      </Accordion>
    </Fragment>
  </div>
  );
}