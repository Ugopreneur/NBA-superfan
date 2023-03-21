import { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  const onSubmit = evt => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = evt => setText(evt.target.value);

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
