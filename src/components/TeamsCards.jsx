import  "../assets/styles/TeamsCards.css";
import axios from "axios";

const TeamsCard = (props) => {
    return (
<div className="card" onClick={async () => {const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/teams',
      params: {name: "Chicago Bulls"},
      headers: {
        'X-RapidAPI-Key': 'd73fe9001amshc84a879808281a3p118f3ejsnc92bedc355cd',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      props.setResult(response.data);
    }).catch(function (error) {
      console.error(error);
    })}}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
        );
}
export default TeamsCard;
