import './globals.css';

interface RootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
