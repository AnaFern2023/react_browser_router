import { useParams } from 'react-router-dom'
import cars from '../data/cars.json'

const CarsDetails = () => {

    const carsParam = useParams()
    console.log(carsParam);

    const eachCarDetail = cars.filter((element) => {
        return element.id.toString() === carsParam.id
    })

    return (
        <section>
            <h2>{eachCarDetail[0].CarMake}</h2>
            <h2>{eachCarDetail[0].carModel}</h2>
            <h2>{eachCarDetail[0].CarYear}</h2>
        </section>
    );
}

export default CarsDetails;