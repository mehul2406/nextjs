export const metadata = {
    title: "Contact Layout",
    description: "Contact Layout",
}

export default function ContactLayout({ children }) {
    return (
        <html>
            <body>
                <div>
                    <h1>Contact Layout</h1>
                    {children}
                </div>
            </body>
        </html>
    );
}