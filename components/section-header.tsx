import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: string
  desc?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center flex flex-col items-center" : "",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 block">
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cn(
          "text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-gradient pb-1"
        )}
      >
        {title}
      </h2>

      {desc ? (
        <p
          className={cn(
            "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl",
            align === "left" ? "" : "mx-auto"
          )}
        >
          {desc}
        </p>
      ) : null}
    </div>
  )
}
