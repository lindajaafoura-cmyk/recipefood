import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  time: string;
  difficulty: string;
}

interface RecipeDetailProps {
  recipe: Recipe | null;
  loading: boolean;
}

export default function RecipeDetail({ recipe, loading }: RecipeDetailProps) {
  if (loading) {
    return <div className="text-center py-8">Loading recipe...</div>;
  }

  if (!recipe) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">Recipe not found</p>
        <Link href="/">
          <Button>Back to Recipes</Button>
        </Link>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">{recipe.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg text-muted-foreground">{recipe.description}</p>

        <div className="flex gap-4 text-sm">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded">
            ⏱️ {recipe.time}
          </span>
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded">
            📊 {recipe.difficulty}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Ingredients</h3>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-muted-foreground">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/">
          <Button variant="outline" className="w-full">
            ← Back to Recipes
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
