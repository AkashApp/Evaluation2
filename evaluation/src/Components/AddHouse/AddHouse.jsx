import { useState } from "react";
import axios from "axios";

export const AddHouse = () => {
  const [formData, setFormData]= useState({
    Name:"",
    OwnerName:"",
    Address:"",
    ArearCode:"",
    Rent:"",
    Image:"",
  })

  function HandleChange(e){
    const {id, value}= e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
    
  };

  const HandleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/houses", formData).then(()=>{
      alert("New House Added");
      setFormData({
        Name:"",
        OwnerName:"",
        Address:"",
        ArearCode:"",
        Rent:"",
        Image:"",
      });
    });
  };


  return (
    <div className="addHouseContainer">
      <form onSubmit={HandleSubmit}>
        <label>name</label>
        <input type="text" className="name"  required onChange={HandleChange} id="Name"/>
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" required onChange={HandleChange} id="OwnerName"/>
        <br />
        <label>address</label>
        <input  type="text" className="address" required onChange={HandleChange} id="Address"/>
        <br />
        <label>areaCode</label>
        <input  type="number" className="areaCode" required onChange={HandleChange} id="ArearCode"/>
        <br />
        <label>rent</label>
        <input  type="number" className="rent" required onChange={HandleChange} id="Rent"/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input type="text" className="image" required onChange={HandleChange} id="Image"/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
