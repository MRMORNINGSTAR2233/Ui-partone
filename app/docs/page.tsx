"use client"

import Link from "next/link"
import { Brain, Github, Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/docs-sidebar"
import { CodeBlock } from "@/components/code-block"

export default function DocsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Added to match home page */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Deep Loop</span>
            </Link>
          </div>
          
          {/* Mobile menu buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 mr-1"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button 
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
              Home
            </Link>
            <Link href="/docs" className="text-sm font-medium transition-colors text-blue-600 font-semibold">
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
                className="text-sm font-medium transition-colors text-blue-600 font-semibold px-2 py-1"
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

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)}></div>
            <div className="fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg">
              <div className="flex h-16 items-center justify-between px-4 border-b">
                <span className="text-lg font-medium">Documentation</span>
                <button 
                  className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-y-auto h-[calc(100vh-4rem)]">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="space-y-2 bg-gradient-to-r from-blue-50 to-white p-4 sm:p-6 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h1 className="scroll-m-20 text-3xl sm:text-4xl font-bold tracking-tight text-blue-900">Documentation</h1>
              <p className="text-base sm:text-lg text-gray-600">Learn how to implement our fine-tuning + RAG setup</p>
            </div>

            <div className="pb-12 pt-4">
              <div className="space-y-12">
                <section id="setup" className="space-y-4 sm:space-y-6 bg-white rounded-lg shadow-md p-4 sm:p-6 border border-blue-50">
                  <h2 className="scroll-m-20 border-b border-blue-100 pb-2 text-xl sm:text-2xl font-semibold tracking-tight text-blue-800 first:mt-0">
                    Setup
                  </h2>
                  <div className="space-y-4">
                    <h3 className="scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight text-blue-700">
                      Environment Setup
                    </h3>
                    <p>
                      First, you'll need to set up your environment with the necessary dependencies. We recommend using
                      a virtual environment.
                    </p>
                    <CodeBlock
                      code={`# Create a virtual environment
python -m venv .venv

# Activate the environment
# On Windows
.venv\\Scripts\\activate
# On macOS/Linux
source .venv/bin/activate

# Install dependencies
# On windows
pip install torch transformers datasets accelerate huggingface-cli unsloth
#On macOS/Linux
pip install torch transformers datasets accelerate huggingface-cli mlx-lm mlx`}
                      language="bash"
                    />

                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">Data Preparation</h3>
                    <p>
                      Prepare your dataset for fine-tuning. The dataset should be in a format compatible with the
                      Hugging Face datasets library.
                    </p>
                    <CodeBlock
                      code={`import datasets

# Load your dataset
dataset = datasets.load_dataset("your_dataset_path")

# Preprocess the dataset
def preprocess_function(examples):
    return {
        "input_ids": tokenizer(examples["text"], truncation=True, padding="max_length"),
        "labels": examples["labels"]
    }

tokenized_dataset = dataset.map(preprocess_function, batched=True)`}
                      language="python"
                    />

                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                      Retrieval System Setup
                    </h3>
                    <p>Set up the retrieval system that will be used during fine-tuning and inference.</p>
                    <CodeBlock
                      code={`from research_platform.retrieval import DocumentStore, Retriever

# Initialize document store
doc_store = DocumentStore(embedding_model="research-platform/embeddings")

# Add your documents
doc_store.add_documents("path/to/your/documents")

# Initialize retriever
retriever = Retriever(document_store=doc_store, top_k=5)`}
                      language="python"
                    />
                  </div>
                </section>

                <section id="training" className="space-y-4 sm:space-y-6 bg-white rounded-lg shadow-md p-4 sm:p-6 border border-blue-50">
                  <h2 className="scroll-m-20 border-b border-blue-100 pb-2 text-xl sm:text-2xl font-semibold tracking-tight text-blue-800 first:mt-0">
                    Training
                  </h2>
                  <div className="space-y-4">
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                      Model Initialization
                    </h3>
                    <p>Initialize the base model that will be fine-tuned.</p>
                    <CodeBlock
                      code={`from research_platform import Model, ModelConfig

# Initialize configuration
config = ModelConfig.from_pretrained("research-platform/7b-base")
config.retrieval_augmentation = True

# Initialize model
model = Model.from_pretrained(
    "research-platform/7b-base",
    config=config
)`}
                      language="python"
                    />

                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                      Fine-tuning Process
                    </h3>
                    <p>Run the fine-tuning process with retrieval augmentation.</p>
                    <CodeBlock
                      code={`from research_platform.trainer import RAGTrainer

# Initialize trainer
trainer = RAGTrainer(
    model=model,
    retriever=retriever,
    train_dataset=tokenized_dataset["train"],
    eval_dataset=tokenized_dataset["validation"],
    args={
        "output_dir": "./results",
        "num_train_epochs": 3,
        "per_device_train_batch_size": 4,
        "gradient_accumulation_steps": 8,
        "learning_rate": 2e-5,
        "warmup_steps": 500,
    }
)

# Start training
trainer.train()`}
                      language="python"
                    />

                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">Co-training Loop</h3>
                    <p>Implement the co-training loop to iteratively improve both the model and retrieval system.</p>
                    <CodeBlock
                      code={`from research_platform.cotraining import CoTrainingLoop

# Initialize co-training loop
co_training = CoTrainingLoop(
    model=model,
    retriever=retriever,
    dataset=dataset,
    num_iterations=5
)

# Run co-training
co_training.run()`}
                      language="python"
                    />
                  </div>
                </section>

                <section id="inference" className="space-y-6 bg-white rounded-lg shadow-md p-6 border border-blue-50">
                  <h2 className="scroll-m-20 border-b border-blue-100 pb-2 text-2xl font-semibold tracking-tight text-blue-800 first:mt-0">
                    Inference
                  </h2>
                  <div className="space-y-4">
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                      Loading Fine-tuned Model
                    </h3>
                    <p>Load your fine-tuned model for inference.</p>
                    <CodeBlock
                      code={`from research_platform import Model

# Load fine-tuned model
model = Model.from_pretrained("./results")`}
                      language="python"
                    />

                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                      Inference with Retrieval
                    </h3>
                    <p>Run inference with retrieval augmentation.</p>
                    <CodeBlock
                      code={`# Generate text with retrieval augmentation
response = model.generate(
    "Explain the advantages of fine-tuning with retrieval augmentation",
    use_retrieval=True,
    max_length=512,
    temperature=0.7
)

print(response)`}
                      language="python"
                    />

                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-700">
                      Chain-of-Thought Reasoning
                    </h3>
                    <p>Utilize chain-of-thought reasoning for complex problems.</p>
                    <CodeBlock
                      code={`# Generate text with chain-of-thought reasoning
response = model.generate(
    "Solve this math problem step by step: If a train travels at 60 mph for 2 hours and then at 80 mph for 1 hour, what is the average speed?",
    use_retrieval=True,
    chain_of_thought=True,
    max_length=1024
)

print(response)`}
                      language="python"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6 mt-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Deep Loop</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2025 Deep Loop. All rights reserved.
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
