import Link from "next/link";

export const metadata = {
    title: "Contact Page",
    description: "Contact Page",
}

export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <button><Link href="/">Home</Link></button>
        </div>
    );
}