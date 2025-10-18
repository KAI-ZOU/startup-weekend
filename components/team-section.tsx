export function TeamSection() {
  const team = [
    {
      name: "Austin Bertino",
      role: "Electrical Engineer",
      image: "/Austin.jpeg",
    },
    {
      name: "Dylan Paz",
      role: "Mechanical Engineer",
      image: "/Dylan.JPG",
    },
    {
      name: "Kai Zou",
      role: "Computer Science & Engineering",
      image: "/Kai.jpeg",
    },
    {
      name: "Micaiah Walters",
      role: "Engineering Design",
      image: "/Micaiah.jpeg",
    },
  ]

  return (
    <section className="px-6 py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-balance lg:text-5xl">Meet the Team</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Passionate experts combining beauty and technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-2xl bg-card border hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
