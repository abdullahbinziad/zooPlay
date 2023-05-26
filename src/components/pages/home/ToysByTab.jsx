import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
 
} from "@material-tailwind/react";


import { useContext, useEffect, useState } from "react";
import "./toysbytab.css";
import ToysCard from "../../shared/ToysCard";
import { UserContext } from "../../../authprovider/AuthProvider";
import { HashLoader } from "react-spinners";



const ToysByTab = () => {
const{setLoading} = useContext(UserContext)
  const [alltoys, setAlltoys] = useState([]);
  const [teddys, setTeddys] = useState([]);
  const [horses, setHorses] = useState([]);
  const [dinosaurs, setDinosaurs] = useState([]);

  useEffect(() => {

    fetch("https://zooplay-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {

       
        setAlltoys(data);
        const zooTeddy = data.filter((n) => n.category == "Teddy");
        setTeddys(zooTeddy);

        const zooHorse = data.filter((n) => n.category == "horse");
        setHorses(zooHorse);

        const zooDinosaurs = data.filter((n) => n.category == "dinosour");
        setDinosaurs(zooDinosaurs);
       
      });
  }, []);

  const data = [
    {
      label: "teddy",

      body: [...teddys],
    },

    {
      label: "horse",

      body: [...horses],
    },

    {
      label: "dinosaur",

      body: [...dinosaurs],
    },
  ];





  return (
    alltoys.length< 0 ? <HashLoader className="my-32 mx-auto md:w-3/4" color="#36d7b7" /> 
    :  <div>
      <Tabs id="custom-animation" value="horse">
        <TabsHeader>
          {data.map(({ label }) => (
            <Tab key={label} value={label}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ label, body }) => (
           
            <TabPanel key={label} value={label}>
       
               <ToysCard body={body}></ToysCard>
               
            </TabPanel>
          ))}

        
        </TabsBody>
      </Tabs>
    </div>
    
  );
};

export default ToysByTab;
