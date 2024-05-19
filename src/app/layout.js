import './sass/style.scss';
import Header from "./ui/header/Header";

export const metadata = {
  title: "Partosa - Personal Resume and Portfolio Next JS Tempalte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={``}>
        <Header logoUrl='/images/logo.svg' />
        {children}
      </body>
    </html>
  );
}
