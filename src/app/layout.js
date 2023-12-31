import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import useProfile from './utils/useProfile'
import { Providers } from './redux/provider'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: "500" })

export const metadata = {
  title: 'URLR',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const profile = useProfile()

  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />

      <body className={`${poppins.className}`}>
        <Providers>

          <Navbar profile={profile} />

          {children}

          <Footer />
        </Providers>

      </body>

    </html>
  )
}
