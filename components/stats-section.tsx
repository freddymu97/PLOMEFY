import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  return (
    <section className="container max-w-screen-xl py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard value="95%" label="Customer satisfaction" />
        <StatCard value="4x" label="Faster deployment" />
        <StatCard value="97%" label="Uptime guarantee" />
        <StatCard value="450+" label="Active customers" />
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="bg-accent/20 border-border/40">
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  )
}

