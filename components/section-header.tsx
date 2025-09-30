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
        "mb-16 relative",
        align === "center" ? "text-center flex flex-col items-center" : "",
        className
      )}
    >
      {/* Decorative gradient blur */}
      {/* {align === "center" && (
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent blur-3xl pointer-events-none" />
      )} */}
      
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
          </span>
          {eyebrow}
        </div>
      ) : null}
      
      <h2 
        className={cn(
          "mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
          "bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent",
          "animate-in fade-in slide-in-from-bottom-4 duration-700"
        )}
      >
        {title}
      </h2>
      
      {desc ? (
        <p 
          className={cn(
            "mt-5 text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl",
            align === "left" ? "" : "mx-auto",
            "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150"
          )}
        >
          {desc}
        </p>
      ) : null}
      
      {/* Subtle underline accent */}
      <div 
        className={cn(
          "mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary via-primary/60 to-transparent",
          "animate-in fade-in slide-in-from-left duration-700 delay-300",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  )
}
