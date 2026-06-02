import "./globals.css";
import { Mulish, Cormorant_Garamond } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mayramaximiano.com.br"),
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
    <html lang="pt-BR" className={`${mulish.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preload" as="image" href="/hero-mayra-hd.webp" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  );
}
