export const metadata = {
  title: "JCC Basketball League",
  description: "League site",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
