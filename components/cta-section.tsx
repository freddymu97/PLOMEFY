import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Join thousands of satisfied users who have transformed their business with our Next.js SaaS platform.
      </p>
      <Button size="lg" className="px-8">
        Get Started
      </Button>
    </section>
  )
}

