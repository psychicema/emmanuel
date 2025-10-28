"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, CheckCircle2 } from "lucide-react"

export function VerificationMetaTag() {
  const [metaTag, setMetaTag] = useState("")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (metaTag) {
      navigator.clipboard.writeText(metaTag)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Card className="border-purple-500/20 bg-slate-900/50">
      <CardHeader>
        <CardTitle className="text-purple-300">Add Verification Meta Tag</CardTitle>
        <CardDescription className="text-purple-200">
          Paste the meta tag from Google Search Console here to add it to your site
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder='<meta name="google-site-verification" content="..." />'
            value={metaTag}
            onChange={(e) => setMetaTag(e.target.value)}
            className="bg-slate-800 border-purple-500/30 text-white"
          />
          <Button onClick={handleCopy} disabled={!metaTag} className="bg-purple-600 hover:bg-purple-700">
            {copied ? (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
        <p className="text-sm text-purple-200">
          Note: After pasting the meta tag here, contact your developer to add it to the website's layout file.
        </p>
      </CardContent>
    </Card>
  )
}
