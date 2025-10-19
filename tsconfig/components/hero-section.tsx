"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/20 to-background px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Machine-Level Precision
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-balance lg:text-6xl">
              Find Your Perfect Hair Color with <span className="text-primary">Hüma</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Say goodbye to color mismatches and wasted dye. Our innovative hair color detector provides personalized
              shade recommendations with precision you can trust.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" onClick={scrollToSignup} className="text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 p-8">
              <img
                src="/woman-with-beautiful-hair-color-gradient-showcasin.jpg"
                alt="Hair color detection visualization"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-6 shadow-xl border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold">98% Accuracy</p>
                  <p className="text-sm text-muted-foreground">Color Match Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
