import Link from "next/link";

export default function Navigation() {
    return (
        <header>
            <div className="grid grid-cols-2" >
                <h1>Logo</h1>
                <nav>
                    <ul className="flex gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}