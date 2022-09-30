import './css/cardStyles.css';

export default function Card({ monstersName }) {
  const { id, name, email } = monstersName;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set1`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
