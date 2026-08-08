import '../index.css';

export const metadata = {
  title: 'PageMistri Landing',
  description: 'Landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
