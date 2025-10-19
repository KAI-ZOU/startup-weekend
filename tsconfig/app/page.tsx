import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { PainPoints } from "@/components/pain-points"
import { SignUpForm } from "@/components/signup-form"
import { TeamSection } from "@/components/team-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <PainPoints />
      <SignUpForm />
      <TeamSection />
    </main>
  )
}
