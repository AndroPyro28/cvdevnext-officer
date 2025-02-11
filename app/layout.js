import { Providers } from './providers';

import "./globals.css";

export const metadata = {
  title: "CVConnect | Officer",
  description: "Integrated solutions for record management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
