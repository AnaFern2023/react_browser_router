import { Link } from 'react-router-dom';

const CarsItems = (props) => {
    return (
        <section>
            <h2>{props.CarMake}</h2>
            <Link to={`/cars/${props.id}`}>Read More</Link>
        </section>
    );
}

export default CarsItems;