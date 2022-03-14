import "./Rentals.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const Rentals = () => {
  const [data, setData]= useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData= ()=>{
    axios.get("http://localhost:8080/houses").then((response)=>{
    setData([...data, response.data]);
    });
  };

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.Name} </td>
                <td className="ownersName">{house.OwnerName}</td>
                <td className="address">{house.Address}</td>
                <td className="areaCode">{house.AreaCode}</td>
                <td className="rent">{house.Rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.Image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
