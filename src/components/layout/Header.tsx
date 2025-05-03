
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">A</div>
          <span>App</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/" className="text-sm font-medium hover:text-primary">Features</Link>
          <Link to="/" className="text-sm font-medium hover:text-primary">About</Link>
          <Link to="/" className="text-sm font-medium hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
