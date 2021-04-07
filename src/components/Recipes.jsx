import { useState } from 'react';

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    leatherStrips: 2,
    ironIngot: 2,
    refinedMoonstone: 2
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

const hello = () => console.log("hello world!");

console.log(hello);

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return (
        <div>
            <h3>Current Recipe</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>
                Elven Shield Recipe
            </button>
            <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
                Elven Gauntlets Recipe
            </button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Recipes;
