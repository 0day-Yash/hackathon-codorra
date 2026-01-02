export function OrnamentRings({
  className = "",
  hue = "accent",
  opacity = 0.22,
}: {
  className?: string
  hue?: "accent" | "primary"
  opacity?: number
}) {
  const color = hue === "accent" ? "var(--color-accent)" : "var(--color-primary)"
  return (
    <svg
      className={`parallax-ornament ${className}`}
      viewBox="0 0 400 400"
      width="400"
      height="400"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="fade" r="1">
          <stop offset="0" stopColor={color} stopOpacity="0.18" />
          <stop offset="1" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="none" stroke={color} strokeOpacity="0.12" strokeWidth="0.75" />
      {[140, 110, 80, 50].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke={color}
          strokeDasharray="1 14"
          strokeOpacity={0.12 - i * 0.02}
        />
      ))}
      <circle cx="200" cy="200" r="200" fill="url(#fade)" />
    </svg>
  )
}
