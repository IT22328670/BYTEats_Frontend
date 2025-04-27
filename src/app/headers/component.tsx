import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-green-600">BYTEats</Link>
      <nav className="space-x-4">
        <Link href="/menu" className="text-gray-700 hover:text-green-600">Menu</Link>
        <Link
          href="/cart"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Cart
        </Link>
      </nav>
    </header>
  );
}