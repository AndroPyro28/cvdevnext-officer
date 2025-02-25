// styles
import compstyle from '@/app/components.module.css';

// assets

// components
import Sidebar from "./components/sidebar.js";
import Header from "./components/header.js";
import { getSession } from '@/actions/getCurrentSession.js';

export const metadata = {
    title: "CVConnect | Officer - Transactions",
    description: "Integrated solutions for record management.",
    charset: "utf-8", // This sets the charset meta tag
};

export default async function TransactionsLayout({ children }) {
  const session = await getSession();

  if (!session) {
    redirect('/');
  }
  return (
    <html lang="en">
      <body>
        <main className={compstyle.main_container}>
            <Sidebar />
            <div className={compstyle.main_ui_container}>
                
                                                <Header userSession={session} />
                {children}
            </div>
        </main>
      </body>
    </html>
  );
}
