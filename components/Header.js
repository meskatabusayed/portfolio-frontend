// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blogs">Blogs</Link>
      </nav>
    </header>
  );
};

export default Header;
