import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://reconectar-mayra.vercel.app"),
  title: "Re.conectar — Evento Presencial com Mayra Maximiano · 27 de Junho",
  description:
    "Em 1 dia de evento presencial, reconecte-se com a sua essência, resgate sua clareza e dê os próximos passos com mais direção. Dia 27 de Junho — ACE de Santa Cruz do Rio Pardo.",
  icons: { icon: "/FAVICON.png" },
  openGraph: {
    title: "Re.conectar — Evento Presencial com Mayra Maximiano · 27 de Junho",
    description:
      "Em 1 dia de evento presencial, reconecte-se com a sua essência, resgate sua clareza e dê os próximos passos com mais direção.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Mulish:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
