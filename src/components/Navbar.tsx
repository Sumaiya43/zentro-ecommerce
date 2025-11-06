import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home,} from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="left">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="zentro"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block font-medium text-md tracking-wider">
            ZENTRO
          </p>
        </Link>
      </div>
      <div className="flex items-centegitr gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
