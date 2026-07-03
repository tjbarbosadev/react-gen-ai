import type { LucideIcon } from 'lucide-react';

interface FormsStepProps {
  icon: LucideIcon;
  title: string;
  question: string;
}

export default function FormStep({
  icon: Icon,
  title,
  question,
}: FormsStepProps) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-8">
      <Icon size={32} className="mb-4 h-12 w-12 text-primary" />
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{question}</p>
    </div>
  );
}
