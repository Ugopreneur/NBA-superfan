import  "../assets/styles/TeamsCards.css";

export default function TeamsCard(props) {
    return (
<div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
        );
}