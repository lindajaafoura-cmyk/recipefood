import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Recipe {
  id: number;
  name: string;
  description: string;
  time: string;
  difficulty: string;
}

interface RecipeListProps {
  recipes: Recipe[];
  loading: boolean;
}

export default function RecipeList({ recipes, loading }: RecipeListProps) {
  if (loading) {
    return <div className="text-center py-8">Loading recipes...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <Card key={recipe.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              {recipe.description}
            </p>
            <div className="flex justify-between text-xs mb-4">
              <span>⏱️ {recipe.time}</span>
              <span>📊 {recipe.difficulty}</span>
            </div>
            <Link href={`/recipe/${recipe.id}`}>
              <Button variant="default" className="w-full">
                View Recipe
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
