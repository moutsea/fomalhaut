interface BackgroundElementsProps {
  variant?: "home" | "about";
}

export default function BackgroundElements({ variant = "home" }: BackgroundElementsProps) {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Background Color - ensures consistent deep blue in dark mode */}
      <div className="absolute inset-0 bg-background dark:bg-[#030014] transition-colors duration-300" />

      {/* Grid Background */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3b3b3b12_1px,transparent_1px),linear-gradient(to_bottom,#3b3b3b12_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient Orbs */}
      {variant === "home" ? (
        <>
          <div className="absolute left-0 top-0 h-[500px] w-[500px] translate-x-[-30%] translate-y-[-20%] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20 animate-pulse duration-[4000ms]" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] translate-x-[30%] translate-y-[-10%] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/20 animate-pulse duration-[5000ms]" />
          <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 translate-y-[30%] rounded-full bg-pink-500/5 blur-[120px] dark:bg-pink-500/10 animate-pulse duration-[6000ms]" />
        </>
      ) : (
        <>
          <div className="absolute left-0 top-0 h-[500px] w-[500px] translate-x-[-30%] translate-y-[-20%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/20 animate-pulse duration-[4000ms]" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-[20%] translate-y-[-10%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/20 animate-pulse duration-[5000ms]" />
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] translate-y-[20%] rounded-full bg-pink-500/5 blur-[120px] dark:bg-pink-500/10 animate-pulse duration-[6000ms]" />
        </>
      )}
    </div>
  );
}