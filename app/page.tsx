import Link from "next/link"
import { ArrowRight, Brain, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">AI Research Platform</span>
          </div>
          <nav className="flex items-center gap-6">
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
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                    Research-Enhanced 7B Model
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Our state-of-the-art fine-tuning + retrieval architecture delivers exceptional performance with a
                    smaller footprint than traditional large language models.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg"
                    asChild
                  >
                    <Link href="public/FinalLR.pdf" download>
                      Download Literature Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="shadow-md hover:shadow-lg">
                    <Link href="/docs">View Documentation</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-blue-100 p-4 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[250px] w-[250px] rounded-full bg-blue-200 flex items-center justify-center shadow-inner">
                      <div className="h-[150px] w-[150px] rounded-full bg-blue-300 flex items-center justify-center shadow-inner">
                        <div className="h-[80px] w-[80px] rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg">
                          <Brain className="h-10 w-10" />
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
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
              <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800">Supported Models</h3>
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
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800">Integration Libraries</h3>
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
            <div className="mx-auto max-w-5xl space-y-4">
              <h3 className="text-2xl font-bold text-blue-800">Quick Integration</h3>
              <div className="rounded-lg bg-gray-900 p-4 shadow-xl">
                <pre className="text-sm text-gray-100 overflow-x-auto">
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
            <span className="text-xl font-bold">AI Research Platform</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2025 AI Research Platform. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/docs" className="text-sm text-gray-500 hover:text-blue-600">
              Documentation
            </Link>
            <Link href="https://github.com" className="text-sm text-gray-500 hover:text-blue-600">
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
