import './globals.css'



export const metadata = {
  title: 'Spotify-Kevin',
  description: 'Lindo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" bg-black text-zinc-200">{children}</body>
    </html>
  )
}
