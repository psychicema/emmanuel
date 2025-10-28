import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Sparkles, Phone, Mail, Star, Users, Shield, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/mystical-spiritual-background-with-stars-and-cosmi.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Trusted Love Spell Caster Serving USA | Available 24/7</span>
            </div>
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
              Doctor Emmanuel
            </h1>
            <p className="mb-4 text-balance text-2xl font-semibold text-secondary md:text-3xl">
              Expert Love Spell Caster Serving All 50 States
            </p>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Serving clients across the United States with powerful love spells and spiritual healing. I specialize in
              love spell casting and have mastered the art of creating powerful love remedies to help reunite lovers and
              guide people to find their true love and soulmate connections. Fast results for clients in California, New
              York, Texas, Florida, and all US states.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group gap-2 text-lg" asChild>
                <a href="#contact">
                  <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Get Your Love Spell
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent" asChild>
                <a href="tel:+256777182862">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span>Serving USA Since 2010</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span>Fast Acting Spells</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span>All 50 States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/mystical-love-spell-candles-and-crystals.jpg"
                alt="Love spell candles and crystals"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/spiritual-healer-with-glowing-hands-energy.jpg"
                alt="Spiritual healing energy"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/love-potion-bottles-with-herbs-and-flowers.jpg"
                alt="Love potions and herbs"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/couple-reunited-in-love-with-magical-aura.jpg"
                alt="Reunited lovers"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Love Spell Services for USA Clients
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Powerful spell casting services tailored to your unique situation. Serving clients in New York, Los
              Angeles, Chicago, Houston, Phoenix, Philadelphia, and all major US cities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Heart className="h-8 w-8" />}
              title="Love Spell Casting"
              description="Reunite with your lost lover and bring back the passion in your relationship. My powerful love spells work to restore broken bonds and create lasting connections."
              features={[
                "Bring back lost lover",
                "Restore broken relationships",
                "Find your true soulmate",
                "Strengthen existing bonds",
              ]}
            />

            <ServiceCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Love Charms & Potions"
              description="Specially crafted love charms and potions to attract love, enhance attraction, and create irresistible magnetic energy."
              features={[
                "Binding your lover to you only",
                "Attraction charms for women",
                "Love potions that work",
                "Marriage commitment spells",
              ]}
            />

            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="Relationship Healing"
              description="Remove obstacles and negative influences affecting your relationship. Heal jealousy, restore trust, and protect your love."
              features={[
                "Remove relationship interference",
                "Heal family jealousy issues",
                "Protect against third parties",
                "Restore harmony and peace",
              ]}
            />

            <ServiceCard
              icon={<Star className="h-8 w-8" />}
              title="Marriage Spells"
              description="Is your partner unwilling to commit? My marriage spells help create the desire for commitment and move relationships forward."
              features={[
                "Commitment spells",
                "Proposal manifestation",
                "Wedding date acceleration",
                "Long-term relationship binding",
              ]}
            />

            <ServiceCard
              icon={<Shield className="h-8 w-8" />}
              title="Fertility & Family Blessings"
              description="Spiritual solutions for couples struggling to conceive. Blessings for both men and women seeking to start or grow their families."
              features={[
                "Fertility spells for women",
                "Male fertility enhancement",
                "Family blessing rituals",
                "Pregnancy manifestation",
              ]}
            />

            <ServiceCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Career & Success Spells"
              description="Overcome workplace challenges, improve relationships with bosses, and attract career opportunities and financial abundance."
              features={[
                "Job restoration spells",
                "Workplace harmony",
                "Boss relationship improvement",
                "Career advancement magic",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/wise-spiritual-healer-doctor-emmanuel-with-mystica.jpg"
                alt="Doctor Emmanuel - Master Spell Caster"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Why Choose Doctor Emmanuel?
              </h2>
              <p className="mb-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                With years of experience serving clients across the United States, I have helped thousands of Americans
                find love, restore relationships, and achieve happiness through powerful spell casting. From coast to
                coast, my proven love spells deliver results.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                My spells are personalized, fast-acting, and proven to work for clients in all 50 states. Every
                consultation is completely confidential, and I am available 24/7 to help USA clients with urgent needs
                via phone, WhatsApp, or email.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thousands of satisfied clients worldwide have experienced the power of my spell casting services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Fast Acting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  My spells work immediately and deliver results quickly, often within days of casting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>100% Confidential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your privacy is sacred. All consultations and spell work are completely confidential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every spell is customized to your unique situation for maximum effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Success Stories from USA Clients
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Real results from real Americans who found love and happiness
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah M."
              location="Los Angeles, California"
              rating={5}
              testimonial="Doctor Emmanuel brought my husband back after 6 months of separation. His love spell worked within 2 weeks! We are now happier than ever. Thank you!"
            />
            <TestimonialCard
              name="James K."
              location="New York, NY"
              rating={5}
              testimonial="I was struggling with my career and relationship. Doctor Emmanuel's spells helped me get promoted and my girlfriend finally agreed to marry me. Highly recommended!"
            />
            <TestimonialCard
              name="Grace N."
              location="Houston, Texas"
              rating={5}
              testimonial="After 3 years of trying, my husband and I finally conceived thanks to Doctor Emmanuel's fertility spell. Our baby is now 6 months old. Miracle worker!"
            />
            <TestimonialCard
              name="Michael R."
              location="Miami, Florida"
              rating={5}
              testimonial="My ex came back to me after just 10 days! Doctor Emmanuel's love spell is real and powerful. We're planning our wedding now. Best decision I ever made!"
            />
            <TestimonialCard
              name="Jennifer L."
              location="Chicago, Illinois"
              rating={5}
              testimonial="I was skeptical at first, but Doctor Emmanuel's marriage spell worked! My boyfriend proposed within a month. We're getting married next spring. Thank you so much!"
            />
            <TestimonialCard
              name="David W."
              location="Phoenix, Arizona"
              rating={5}
              testimonial="Doctor Emmanuel helped me overcome workplace issues and restored peace in my relationship. His spells are genuine and effective. Highly recommend to anyone in USA!"
            />
          </div>
        </div>
      </section>

      {/* Spell Casting Process Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
              The Spell Casting Process
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Experience the ancient art of powerful spell casting
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="relative mx-auto mb-6 aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
                <Image
                  src="/spiritual-consultation-tarot-cards-and-crystals-on.jpg"
                  alt="Spiritual consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">1. Consultation</h3>
              <p className="text-muted-foreground">
                We discuss your situation in detail to understand your needs and create a personalized spell plan.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-6 aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
                <Image
                  src="/spell-casting-ritual-with-candles-herbs-and-mystic.jpg"
                  alt="Spell casting ritual"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">2. Spell Casting</h3>
              <p className="text-muted-foreground">
                I perform powerful rituals using ancient techniques, sacred herbs, and spiritual energy.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-6 aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
                <Image
                  src="/happy-couple-embracing-with-magical-sparkles-and-h.jpg"
                  alt="Results and happiness"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">3. Results</h3>
              <p className="text-muted-foreground">
                Experience fast, powerful results as the spell manifests and transforms your love life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Contact Doctor Emmanuel - USA Love Spell Expert
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Ready to transform your love life? Contact me today for a free consultation. Serving all 50 states with
                fast, confidential service.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      Call or WhatsApp (USA Clients Welcome)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+256777182862" className="text-2xl font-semibold text-primary hover:underline">
                      +256 777 182862
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Available 24/7 for USA clients - All time zones covered
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-secondary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:emapsychic@gmail.com"
                      className="text-xl font-semibold text-secondary hover:underline"
                    >
                      emapsychic@gmail.com
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">Get a response within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent">
                        1
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Free initial consultation to understand your situation
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent">
                        2
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Personalized spell casting plan tailored to your needs
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent">
                        3
                      </div>
                      <p className="text-sm text-muted-foreground">Powerful spell work with fast, proven results</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-foreground">Doctor Emmanuel</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Expert love spell caster serving clients across the United States. Helping Americans find love, restore
                relationships, and achieve happiness since 2010.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Love Spells</li>
                <li>Marriage Spells</li>
                <li>Love Charms</li>
                <li>Relationship Healing</li>
                <li>Fertility Spells</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-primary">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="tel:+256777182862" className="hover:text-primary">
                    Call Now
                  </a>
                </li>
                <li>
                  <a href="mailto:emapsychic@gmail.com" className="hover:text-primary">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Service Areas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>California Love Spells</li>
                <li>New York Love Spells</li>
                <li>Texas Love Spells</li>
                <li>Florida Love Spells</li>
                <li>All 50 US States</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Doctor Emmanuel. All rights reserved. Professional spell casting
              services for USA clients nationwide.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
