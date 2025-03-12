
export default function UserCard(props) {
    return (
        <div className="UserCard">
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <h6>{props.email}</h6>
        </div>
    );
}