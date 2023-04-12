import cars from '../data/cars.json'
import CarsItems from './CarsItems'


console.log(cars);
const Home = () => {
    return (
        <section className='grid'>
            {cars.map((element) => {
                return (
                    <div className='grid-item'>
                        <CarsItems
                            key={element.id}
                            CarMake={element.CarMake}
                            id={element.id}
                        />
                    </div>
                )
            })}
        </section>
    );
}

export default Home;