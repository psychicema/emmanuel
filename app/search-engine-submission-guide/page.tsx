import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Search Engine Submission Guide | Doctor Emmanuel",
  description: "Step-by-step guide to submit Doctor Emmanuel's website to major search engines",
  robots: "noindex, nofollow",
}

export default function SearchEngineSubmissionGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Search Engine Submission Guide</h1>
          <p className="text-xl text-purple-200">Follow these steps to submit your website to major search engines</p>
        </div>

        <div className="space-y-6">
          {/* Google Search Console */}
          <Card className="bg-slate-900/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                Google Search Console
              </CardTitle>
              <CardDescription className="text-purple-200">
                Most important - Google powers 90%+ of searches
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-100">
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  Visit{" "}
                  <a
                    href="https://search.google.com/search-console"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Google Search Console
                  </a>
                </li>
                <li>Sign in with your Google account</li>
                <li>Click "Add Property" and enter your domain</li>
                <li>Verify ownership (DNS verification recommended)</li>
                <li>
                  Submit your sitemap:{" "}
                  <code className="bg-slate-800 px-2 py-1 rounded">https://doctoremmanuel.com/sitemap.xml</code>
                </li>
                <li>Request indexing for your homepage</li>
              </ol>
              <Button asChild className="w-full sm:w-auto">
                <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                  Go to Google Search Console <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Bing Webmaster Tools */}
          <Card className="bg-slate-900/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                Bing Webmaster Tools
              </CardTitle>
              <CardDescription className="text-purple-200">Powers Bing, Yahoo, and DuckDuckGo searches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-100">
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  Visit{" "}
                  <a
                    href="https://www.bing.com/webmasters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Bing Webmaster Tools
                  </a>
                </li>
                <li>Sign in with Microsoft account</li>
                <li>Add your site and verify ownership</li>
                <li>Submit your sitemap URL</li>
                <li>Use "Submit URL" feature for immediate indexing</li>
              </ol>
              <Button asChild className="w-full sm:w-auto">
                <a href="https://www.bing.com/webmasters" target="_blank" rel="noopener noreferrer">
                  Go to Bing Webmaster Tools <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Yandex */}
          <Card className="bg-slate-900/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                Yandex Webmaster
              </CardTitle>
              <CardDescription className="text-purple-200">Popular in Russia and Eastern Europe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-100">
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  Visit{" "}
                  <a
                    href="https://webmaster.yandex.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Yandex Webmaster
                  </a>
                </li>
                <li>Create a Yandex account if needed</li>
                <li>Add your site and verify ownership</li>
                <li>Submit your sitemap</li>
              </ol>
              <Button asChild className="w-full sm:w-auto">
                <a href="https://webmaster.yandex.com" target="_blank" rel="noopener noreferrer">
                  Go to Yandex Webmaster <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* IndexNow */}
          <Card className="bg-slate-900/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                IndexNow Protocol
              </CardTitle>
              <CardDescription className="text-purple-200">
                Instant indexing for Bing, Yandex, and others
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-100">
              <p>IndexNow allows instant notification to search engines when content changes.</p>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  Visit{" "}
                  <a
                    href="https://www.indexnow.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    IndexNow.org
                  </a>
                </li>
                <li>Generate an API key</li>
                <li>Submit your URL for instant indexing</li>
              </ol>
              <Button asChild className="w-full sm:w-auto">
                <a href="https://www.indexnow.org" target="_blank" rel="noopener noreferrer">
                  Go to IndexNow <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Additional Tips */}
          <Card className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Additional SEO Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-purple-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Create Google Business Profile:</strong> Essential for local SEO and appearing in Google Maps
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Build Backlinks:</strong> Get listed in spiritual directories and local business listings
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Social Media:</strong> Share your website on Facebook, Instagram, and Twitter
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Regular Updates:</strong> Add blog posts or testimonials monthly to keep content fresh
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Monitor Performance:</strong> Check Google Search Console weekly for indexing issues
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Submit URLs */}
          <Card className="bg-slate-900/50 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Quick Submit Links</CardTitle>
              <CardDescription className="text-purple-200">Direct URL submission pages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-purple-100">
              <p>Use these for immediate submission:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a
                    href="https://www.google.com/ping?sitemap=https://doctoremmanuel.com/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Submit Sitemap to Google
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bing.com/indexnow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Submit to Bing via IndexNow
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
