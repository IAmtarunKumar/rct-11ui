// import { useState, useEffect } from "react";


let url = "http://localhost:4000/"
export default function PostData() {
  async function handalSubmit(event) {
    event.preventDefault()
    let obj = {
      name : event.target.name.value,
      email : event.target.email.value,
      destination : event.target.destination.value,
      numOfTravellers : event.target.travel.value,
      budgetPerPerson : event.target.budget.value
    };
    try {
      let res = await fetch(`${url}post`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(obj)
      })
      if(res.ok){
        let data = await res.json()
        alert(data.msg)
      }
    } catch (error) {
      console.log("error")
    }
  }
  
  return (
  
    <div className="postdiv">
      <div className="rib">Procut Post</div>
      <form className="postform" action="" onSubmit={handalSubmit}>
        <input type="name" name="" id="name"  placeholder="Name" />
        <input type="email" name="" id="email"  placeholder="Email" />
        <select name="" id="destination" >
          <option value="">Destination</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
        <input
          type="travel"
          name=""
          id="travel"
          
          placeholder="No. Of Travellers"
        />
        <input
          type="budget"
          name=""
          id="budget"
         
          placeholder="Budget Per Person"
        />
        <button className="postbtn" type="submit">Submit</button>
      </form>
    </div>
  );
}