import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Artist Portfolio",
  description: "A minimalist portfolio showcasing beautiful artwork",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-5 col-lg-5 d-md-block sidebar">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/info" className="nav-link">
                      Info
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/social" className="nav-link">
                      Social Media
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="col-md-7 ms-sm-auto col-lg-7 px-md-4">{children}</main>
          </div>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  )
}

