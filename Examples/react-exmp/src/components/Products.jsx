
export default function Products(props) {
    return(
        <div className="productCard">
            <img src={props.src} alt="" />
            <h2> {props.title}</h2>
            <p>Price: {props.price}</p>
        </div>
    );
}