import { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
 
  // declare variable and setter function with an inital empty string
  const [text, setText] = useState("");

  // function to call the API to search for a team name
  const fetchTeams = async () => {
    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/teams',
      params: {name: text},
      headers: {
        'X-RapidAPI-Key': 'd73fe9001amshc84a879808281a3p118f3ejsnc92bedc355cd',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      if(response.data.results === 0){
        alert("Please enter a valid Team Name");
      }
      else{
        props.setResult(response.data);
      }
    }).catch(function (error) {
      console.error(error);
    });
  };

  // define the 'onSubmit' function to handle form submissions
  const onSubmit = evt => {
    evt.preventDefault();
    // check if the input is empty, and show an alert if it is
    if (text === "") {
      alert("Please enter something!");
    } else {
      // show an alert with the current 'text' value and reset the 'text' state
      fetchTeams(text);
        }
  };


  // define the function to update the 'text' state with the new input value
  const onChange = evt => setText(evt.target.value);

// useEffect(()=>{ 
//   if (result) {
//     console.log(result);
//   }
//   console.log(result);
// },[result])
  // return the JSX for the component
  return (
    <div
      style={{
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        width: "100%",
        
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          padding: "1rem",
          backgroundColor: "rgba(54, 57, 63, 0.8)",
          borderRadius: "0.5rem",
        }}
      >
        {/* define the input, set its value to the text state and update*/}
        <input
          type="text"
          name="text"
          placeholder="Search for a NBA team"
          value={text}
          onChange={onChange}
          style={{
            fontSize: "20px",
            width: "70%",
            padding: "0.5rem",
            outline: "none",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            color: "black"
          }}
        />
        {/* define the submit button and apply inline styles */}
        <button
          type="submit"
          style={{
            fontSize: "20px",
            width: "25%",
            padding: "0.5rem",
            backgroundColor: "#ffffff",
            color: "rgba(0, 123, 255, 1)",
            border: "1px solid #007bff",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
