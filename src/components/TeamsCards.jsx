import styles from "../assets/styles/TeamsCards.css";

export default function TeamsCard(props) {
    return (
      <div className={`card ${styles.cardCustom}`} style={{ width: "40rem" }}>
         <img alt={props.name} src={props.image} />
        <div className="card-body">
          <h3 className="card-title text-center text-light">{props.name}</h3>
        </div>
        </div>
        );
}