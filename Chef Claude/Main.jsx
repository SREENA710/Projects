import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Main(){
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomati paste"]
    )
    
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    
    // async function getRecipe(){
    //     const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
    //     console.log(recipeMarkdown)
    // }
    
    function addIngredient(formData){
        // event.preventDefault()
        // console.log("form submitted")
        // const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        // ingredients.push(newIngredient)
        // console.log(ingredients)
    }
    
    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients} 
                    toggleRecipeShown={toggleRecipeShown}
                    // getRecipe={getRecipe}
                />
            }
            {recipeShown && <ClaudeRecipe/>}
        </main>
    )
}
