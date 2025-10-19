import { Camera, Sparkles, Palette } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      title: "Capture Your Hair",
      description: "Take a quick photo of your current hair color in natural lighting",
    },
    {
      icon: Sparkles,
      title: "Machine Precision",
      description: "Our color detector analyzes your unique hair tone and undertones, allowing you to get the perfect tone every time",
    },
    {
      icon: Palette,
      title: "Get Recommendations",
      description: "Receive personalized shade recommendations with exact product matches",
    },
  ]

  return (
    <section id="how-it-works" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-balance lg:text-5xl">How Hüma Works</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Three simple steps to your perfect hair color match
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-card border hover:shadow-lg transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-muted p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Precision You Can Trust</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike manual color charts or salon estimations, Hüma uses advanced computer vision to detect subtle
                undertones and provide recommendations tailored specifically to your hair.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
              <img
                src="/hair-color-analysis-technology-interface-showing-c.jpg"
                alt="Hüma color detection interface"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
