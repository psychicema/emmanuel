import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Doctor Emmanuel - Love Spell Caster in USA | Powerful Love Spells That Work",
  description:
    "Top-rated love spell caster serving USA. Doctor Emmanuel specializes in powerful love spells, bring back lost lover spells, marriage spells, and relationship healing. Fast results across all 50 states. Call +256777182862",
  keywords:
    "love spells USA, spell caster USA, love spell caster America, bring back lost lover USA, relationship healing USA, spiritual healer USA, love charms USA, marriage spells USA, voodoo love spells USA, real love spells that work, Doctor Emmanuel, spell caster in United States, love spells New York, love spells California, love spells Texas, love spells Florida, psychic USA, spiritual advisor USA",
  authors: [{ name: "Doctor Emmanuel" }],
  openGraph: {
    title: "Doctor Emmanuel - Expert Love Spell Caster Serving USA",
    description:
      "Reunite with your lost lover and find true love with powerful love spells from Doctor Emmanuel. Serving clients across all 50 states in USA with proven results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor Emmanuel - Love Spell Caster USA",
    description: "Powerful love spells serving all 50 states. Fast, proven results.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://doctoremmanuel.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Doctor Emmanuel - Love Spell Caster USA",
              description:
                "Expert love spell casting and spiritual healing services serving clients across the United States",
              telephone: "+256777182862",
              email: "emapsychic@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              priceRange: "$$",
              areaServed: [
                {
                  "@type": "Country",
                  name: "United States",
                },
                {
                  "@type": "State",
                  name: "California",
                },
                {
                  "@type": "State",
                  name: "New York",
                },
                {
                  "@type": "State",
                  name: "Texas",
                },
                {
                  "@type": "State",
                  name: "Florida",
                },
              ],
              serviceType: [
                "Love Spells",
                "Relationship Healing",
                "Spiritual Guidance",
                "Love Charms",
                "Marriage Spells",
                "Bring Back Lost Lover",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "847",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Doctor Emmanuel Spiritual Services",
              image: "https://doctoremmanuel.com/og-image.jpg",
              "@id": "https://doctoremmanuel.com",
              url: "https://doctoremmanuel.com",
              telephone: "+256777182862",
              email: "emapsychic@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.0902,
                longitude: -95.7129,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${cormorantGaramond.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
