import { useState, useEffect } from "react";
import "../css/component.css";
let url = "http://localhost:4000/";

export default function RetrieveData() {
  let [fetchData, setFetchData] = useState(null);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}get`)
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  async function deletepost(e) {
    let id = e.target.dataset.id;
    try {
      let res = await fetch(`${url}delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let msg = await res.json();
        alert(msg.msg);
        RetrieveData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="append">
      {isLoading ? <h1>Loading...</h1> : null}
      
          {fetchData?.map((item, index) => (
            <div >
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.destination}</p>
              <p>{item.numOfTravellers}</p>
              <p>{item.budgetPerPerson}</p>
              <button className="del" data-id={item._id} onClick={deletepost}>
                Delete
              </button>
              </div>
          ))}
       
    </div>
);
}
