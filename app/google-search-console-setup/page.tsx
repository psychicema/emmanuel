import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ExternalLink, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Search Console Setup Guide | Doctor Emmanuel",
  description: "Step-by-step guide to submit Doctor Emmanuel website to Google Search Console",
  robots: "noindex, nofollow",
}

export default function GoogleSearchConsoleSetup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Google Search Console Setup</h1>
          <p className="text-xl text-purple-200">Follow these steps to get your website indexed on Google</p>
        </div>

        {/* Quick Info Card */}
        <Card className="mb-8 border-purple-500/20 bg-slate-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-300">
              <AlertCircle className="h-5 w-5" />
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-100 space-y-2">
            <p>
              <strong>Your Website URL:</strong> {process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}
            </p>
            <p>
              <strong>Sitemap URL:</strong> {process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/sitemap.xml
            </p>
            <p>
              <strong>Time to Index:</strong> Usually 1-7 days after submission
            </p>
          </CardContent>
        </Card>

        {/* Step-by-step Guide */}
        <div className="space-y-6">
          {/* Step 1 */}
          <Card className="border-purple-500/20 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold">
                  1
                </span>
                Access Google Search Console
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100 space-y-4">
              <p>Go to Google Search Console and sign in with your Google account.</p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                  Open Google Search Console <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-purple-500/20 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold">
                  2
                </span>
                Add Your Property
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100 space-y-4">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Click "Add Property" or "Start Now"</li>
                <li>Choose "URL prefix" option</li>
                <li>
                  Enter your website URL:{" "}
                  <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">
                    {process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}
                  </code>
                </li>
                <li>Click "Continue"</li>
              </ol>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-purple-500/20 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold">
                  3
                </span>
                Verify Ownership
              </CardTitle>
              <CardDescription className="text-purple-200">Choose one of these verification methods:</CardDescription>
            </CardHeader>
            <CardContent className="text-purple-100 space-y-6">
              {/* HTML Tag Method */}
              <div className="border border-purple-500/30 rounded-lg p-4 bg-slate-800/50">
                <h3 className="font-semibold text-lg mb-3 text-purple-300">Option A: HTML Tag (Recommended)</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>In Google Search Console, select "HTML tag" verification method</li>
                  <li>
                    Copy the meta tag provided by Google (looks like:{" "}
                    <code className="text-xs bg-slate-900 px-2 py-1 rounded text-purple-300">
                      &lt;meta name="google-site-verification" content="..."&gt;
                    </code>
                    )
                  </li>
                  <li>
                    Contact your developer to add this tag to the website's layout.tsx file in the &lt;head&gt; section
                  </li>
                  <li>After the tag is added, click "Verify" in Google Search Console</li>
                </ol>
              </div>

              {/* HTML File Method */}
              <div className="border border-purple-500/30 rounded-lg p-4 bg-slate-800/50">
                <h3 className="font-semibold text-lg mb-3 text-purple-300">Option B: HTML File Upload</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Download the HTML verification file from Google Search Console</li>
                  <li>Upload it to your website's public folder</li>
                  <li>Make sure it's accessible at: yourdomain.com/google[verification-code].html</li>
                  <li>Click "Verify" in Google Search Console</li>
                </ol>
              </div>

              {/* Domain Provider Method */}
              <div className="border border-purple-500/30 rounded-lg p-4 bg-slate-800/50">
                <h3 className="font-semibold text-lg mb-3 text-purple-300">Option C: DNS Verification</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Copy the TXT record provided by Google</li>
                  <li>Log in to your domain registrar (GoDaddy, Namecheap, etc.)</li>
                  <li>Add the TXT record to your DNS settings</li>
                  <li>Wait a few minutes for DNS propagation</li>
                  <li>Click "Verify" in Google Search Console</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-purple-500/20 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold">
                  4
                </span>
                Submit Your Sitemap
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100 space-y-4">
              <p>After verification is successful:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>In Google Search Console, go to "Sitemaps" in the left menu</li>
                <li>
                  Enter your sitemap URL:{" "}
                  <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">sitemap.xml</code>
                </li>
                <li>Click "Submit"</li>
                <li>Wait for Google to process it (usually within 24 hours)</li>
              </ol>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Your sitemap is already configured and ready at:{" "}
                    <strong>{process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/sitemap.xml</strong>
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card className="border-purple-500/20 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold">
                  5
                </span>
                Request Indexing (Optional but Recommended)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100 space-y-4">
              <p>To speed up the indexing process:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>In Google Search Console, go to "URL Inspection" tool</li>
                <li>Enter your homepage URL</li>
                <li>Click "Request Indexing"</li>
                <li>Repeat for important pages like /usa-love-spells</li>
              </ol>
            </CardContent>
          </Card>

          {/* Step 6 */}
          <Card className="border-purple-500/20 bg-slate-900/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold">
                  6
                </span>
                Monitor Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100 space-y-4">
              <p>After submission, regularly check:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Coverage Report:</strong> See which pages are indexed
                </li>
                <li>
                  <strong>Performance Report:</strong> Track clicks, impressions, and rankings
                </li>
                <li>
                  <strong>Enhancements:</strong> Check for mobile usability and Core Web Vitals
                </li>
                <li>
                  <strong>Manual Actions:</strong> Ensure no penalties
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Tips */}
        <Card className="mt-8 border-purple-500/20 bg-slate-900/50">
          <CardHeader>
            <CardTitle className="text-purple-300">Pro Tips for Better Rankings</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-100 space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Keep your content fresh - update regularly with new testimonials and services</li>
              <li>Build backlinks from reputable spiritual and wellness websites</li>
              <li>Encourage satisfied clients to leave reviews and testimonials</li>
              <li>Create blog content about love spells, spiritual guidance, and relationship advice</li>
              <li>Ensure your website loads quickly (under 3 seconds)</li>
              <li>Make sure your site is mobile-friendly</li>
              <li>Use your target keywords naturally in content</li>
            </ul>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/">Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
