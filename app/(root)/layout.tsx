export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
 side_bar
 {children}
  </main>
  );
}
