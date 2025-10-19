import { X, Check } from "lucide-react"

export function PainPoints() {
  const problems = [
    "Color doesn't match the box",
    "Wasted money on wrong shades",
    "Unpredictable salon results",
    "Guessing undertones incorrectly",
  ]

  const solutions = [
    "Exact shade matching",
    "Confident color selection",
    "Personalized recommendations",
    "Professional-level precision",
  ]

  return (
    <section className="px-6 py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-balance lg:text-5xl">Stop Guessing, Start Knowing</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            We understand the frustration of hair color mishaps
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                <X className="h-5 w-5 text-red-600" />
              </div>
              Common Problems
            </h3>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              With Hüma
            </h3>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20"
                >
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="font-medium">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
