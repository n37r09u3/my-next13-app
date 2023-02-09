export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className="border border-green-400 px-5 py-5">
        {children}
      </section>
  )
}
