import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4 py-16 md:py-24 min-h-screen ">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium">Page not found</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Sorry, we couldn't find the page you're looking for. The page might
          have been removed or the link might be broken.
        </p>
      </div>

      <Button asChild>
        <Link href="/" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </main>
  );
}
