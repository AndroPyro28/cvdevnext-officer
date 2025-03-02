import "./globals.css";
import Provider from './components/providers';
import { getSession } from "@/actions/getCurrentSession";

export const metadata = {
  title: "CVConnect | Officer",
  description: "Integrated solutions for record management.",
};

export default async function RootLayout({ children }) {

    console.log("ROOT LAYOUT")
    return (
        <html lang="en">
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}

