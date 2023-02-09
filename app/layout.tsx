import './globals.css'
import Link from 'next/link'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body>
        <div className="border py-3 px-3 flex flex-row space-x-4 fixed top-5 pl-5">
            <Link href="/products/1">products1</Link>
            <Link href="/products/2">products2</Link>
            <Link href="/about/">about</Link>
            <Link href="/counter/">counter</Link>
            <Link href="/posts/">posts</Link>
        </div>

        <div className="pt-20">
            {children}
        </div>


        </body>
        </html>
    )
}
