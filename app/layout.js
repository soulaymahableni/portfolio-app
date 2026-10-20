import "./globals.css";

export const metadata = {
  title: "Portfolio — Soulayma",
  description: "Portfolio déployé avec Ansible et Semaphore UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
