import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({
  title,
  children,
  className,
}: ContentSectionProps) {
  return (
    <section className={cn("py-12", className)}>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
