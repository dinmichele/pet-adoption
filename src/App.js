import {NavBar, PetAdoptionCardCollection, AddPetAdoption} from "./ui-components";
import {withAuthenticator, Divider} from "@aws-amplify/ui-react";
import './App.css';
import {useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {PetAdoption} from "./models";

function App({user, signOut}) {
   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [heading, setHeading] = useState("");
   const [imageUrl, setImageUrl] = useState("");

   const saveAdoption = async () => {
       try {
           await DataStore.save(
               new PetAdoption({
                   name: name,
                   age: age,
                   heading: heading,
                   imageUrl: imageUrl
               })
           )
       } catch (err) {
           console.log(err);
       }
   }
   const addAdoptionOverrides = {
        "TextField29766922": {
            onChange: (event) => {
                setName(event.target.value);
           }
        },
       "TextField29766923": {
           onChange: (event) => {
               setAge(event.target.value);
           }
       },
       "TextField29766924": {
           onChange: (event) => {
               setHeading(event.target.value);
           }
       },
       "TextField34552685": {
           onChange: (event) => {
               setImageUrl(event.target.value);
           }
       },
       "Button": {
            onClick: saveAdoption
       }

   }

  const navbarOverrides = {
      "icons8-cane-64 1": {
         src: "https://img.icons8.com/color/50/000000/dog--v1.png"
      },
      "image": {
         src: user?.attributes?.profile
      },
      "Button": {
          onClick: signOut
      }

  }

  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width="100%"/>
      <header className="App-header">
          <AddPetAdoption overrides={addAdoptionOverrides} style={{textAlign: "left", margin: "1rem"}}/>
          <Divider/>
          <PetAdoptionCardCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
