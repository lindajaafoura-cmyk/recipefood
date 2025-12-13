import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container py-4">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">📖 Recipe Book</h1>
        </Link>
      </div>
    </header>
  );
}
