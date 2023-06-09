import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tours and Travel Website',
  description: 'Tours and Travel Website in Sikkim',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <br></br>
        {children}
        <br></br>
        <Footer/>
        </body>
    </html>
  )
}
