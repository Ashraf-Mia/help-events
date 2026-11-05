import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
      <Loader2 className="size-10 animate-spin text-[#0E3B43] dark:text-[#FFC94A]" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
};

export default Loading;
