import { recipe } from '../pages/dummy/Data';

const Home = () => {
  return (
    <div className='p-2 space-y-3'>
      <h1>{recipe.name}</h1>
      <div className="img">
        <img className='h-[200px] w-[200px]' src={recipe.image} alt={recipe.name} />
      </div>
      <ol>
        <h1 className='text-xl font-bold'>Ingredients</h1>
        {recipe.ingredients.map((ing, i) => {
          return <li key={i}>{`${i + 1}. ${ing}`}</li>;
        })}
      </ol>
      <ol>
        <h1 className='text-xl font-bold'>Instructions</h1>
        {recipe.instructions.map((ins, i) => {
          return <li key={i}>{`${i + 1}. ${ins}`}</li>;
        })}
      </ol>
      <p>
        <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
      </p>
      <p>
        <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <p>
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
      <p>
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p>
        <strong>Calories per Serving:</strong> {recipe.caloriesPerServing}
      </p>
      <p>
        <strong>Meal Type:</strong> {recipe.mealType.join(', ')}
      </p>
      <p>
        <strong>Rating:</strong> {recipe.rating} (from {recipe.reviewCount} reviews)
      </p>
    </div>
  );
};

export default Home;
