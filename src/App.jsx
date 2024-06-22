import react, { useState } from "react";
import "./App.css";
function App() {
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState("false");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  const handleaApi = () => {
    if (pincode.length !== 6) {
      alert("The code is not 6 digits");
    }

    setLoading(true);
    // fetch api call using fetch()
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        // Handle api response and store it into data state
        // Check if the API call was successful
        if (result[0].Status === "Success") {
          setData(result[0].PostOffice); // Update data state with post office details
          setError(""); // Clear any previous errors
        } else {
          setData(null); // Set data to null if API call was not successful
          setError("No data found for this pincode."); //Error message set karna
        }
      })

      .catch((error) => {
        // Handle any errors that occur during the fetch like  server down, ya DNS issue.
        setError("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filteredData = data?.filter((item) =>
    item.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="app-container">
        <div className="form-container">
          <label htmlFor="pincodeInput">Enter Pincode:</label>

          {/* <br></br> */}
          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)} // Update pincode state
          ></input>
          <br></br>
          <button
            onClick={handleaApi}
            style={{
              padding: "20px",
              margin: "15px",
              background: "black",
              color: "white",
            }}
          >
            Lookup
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        {loading && <div className="loader"></div>}

        {/* filter input */}
        {data && (
          <div>
            <input
              type="text"
              placeholder="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            ></input>

            <div
              id="showDetails"
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "15px",
              }}
            >
              {filteredData.length > 0 ? (
                filteredData.map((office, index) => (
                  <div key={index}>
                    <h2>Office {index + 1}</h2>
                    <p>Name: {office.Name}</p>
                    <p>Pincode: {office.Pincode}</p>
                    <p>District: {office.District}</p>
                    <p>State: {office.State}</p>
                    {/* {filteredData.length > 0 ? (
                filteredData.map((office) => (
                  <div key={office.Name}>
                    <p>Name: {office.Name}</p>
                    <p>Pincode: {office.Pincode}</p>
                    <p>District: {office.District}</p>
                    <p>State: {office.State}</p> */}
                  </div>
                ))
              ) : (
                <p>Couldn’t find the postal data you’re looking for…</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
