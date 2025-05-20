"use client"

import Link from "next/link"
import { ArrowRight, Brain, Github, Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">AI Research Platform</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
              Home
            </Link>
            <Link href="/docs" className="text-sm font-medium transition-colors hover:text-blue-600">
              Documentation
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              GitHub
            </Link>
            <Button asChild>
              <Link href="/docs">Get Started</Link>
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="container flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-sm font-medium transition-colors hover:text-blue-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/docs" 
                className="text-sm font-medium transition-colors hover:text-blue-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-sm font-medium transition-colors hover:text-blue-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                GitHub
              </Link>
              <Button 
                asChild 
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/docs">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                    Research-Enhanced 7B Model
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Our state-of-the-art fine-tuning + retrieval architecture delivers exceptional performance with a
                    smaller footprint than traditional large language models.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/FinalLR.pdf" download>
                      Download Literature Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="shadow-md hover:shadow-lg w-full sm:w-auto">
                    <Link href="/docs">View Documentation</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] rounded-full bg-blue-100 p-4 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[180px] w-[180px] md:h-[220px] md:w-[220px] lg:h-[250px] lg:w-[250px] rounded-full bg-blue-200 flex items-center justify-center shadow-inner">
                      <div className="h-[110px] w-[110px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] rounded-full bg-blue-300 flex items-center justify-center shadow-inner">
                        <div className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px] rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg">
                          <Brain className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our research-driven approach delivers breakthrough performance through innovative techniques
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 sm:py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Co-Training Loop Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Our proprietary co-training methodology continuously improves model performance by iteratively
                    refining both the base model and retrieval mechanisms.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Dynamic Retrieval</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Context-aware retrieval system that adapts to query complexity, optimizing the balance between
                    computational efficiency and response quality.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-blue-800">Chain-of-Thought Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Enhanced reasoning capabilities through step-by-step deduction processes, enabling complex
                    problem-solving with transparent logic paths.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Models & Frameworks Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Models & Frameworks
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive support for popular models and integration frameworks
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 sm:py-12 md:grid-cols-2">
              <div className="space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-800">Supported Models</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>Llama 2 (7B)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>Mistral (7B)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>Falcon (7B)</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-800">Integration Libraries</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>Hugging Face Transformers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>LangChain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>PyTorch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>ONNX Runtime</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-4 px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800">Quick Integration</h3>
              <div className="rounded-lg bg-gray-900 p-2 sm:p-4 shadow-xl">
                <pre className="text-xs sm:text-sm text-gray-100 overflow-x-auto">
                  <code>{`
# Load the model
from research_platform import Model

model = Model.from_pretrained("research-platform/7b-base")

# Generate text with retrieval augmentation
response = model.generate(
    "Explain the advantages of fine-tuning with retrieval augmentation",
    use_retrieval=True
)`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="text-lg sm:text-xl font-bold">AI Research Platform</span>
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-500 md:text-left">
            © 2025 AI Research Platform. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/docs" className="text-xs sm:text-sm text-gray-500 hover:text-blue-600">
              Documentation
            </Link>
            <Link href="https://github.com" className="text-xs sm:text-sm text-gray-500 hover:text-blue-600">
              <span className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                GitHub
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
