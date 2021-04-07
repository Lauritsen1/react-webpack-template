import '../styles/index.scss';
import Recipes from './Recipes';
import image from '../images/matthew-henry-HeVd38MWnw4-unsplash.jpg';

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>React test</h1>
                </section>
                <img src={image} alt="image" height="250px"/>
                <Recipes />
            </main>
        </>
    )
}

export default App