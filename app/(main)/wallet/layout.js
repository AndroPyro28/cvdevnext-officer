// styles
import compstyle from '@/app/components.module.css';

// assets

// components
import Sidebar from "./components/sidebar.js";
import Header from "./components/header.js";
import { getSession } from '@/actions/getCurrentSession.js';

export const metadata = {
    title: "CVConnect | Officer - Wallet",
    description: "Integrated solutions for record management.",
};

export default async function WalletLayout({ children }) {
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
