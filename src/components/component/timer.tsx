import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Timer() {
  return (
    <main className="flex items-center justify-center h-screen ">
      <Card className="text-center dark:bg-gray-800 min-w-96 h-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Timer</CardTitle>
          <CardDescription className="text-4xl">00:00:00</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center space-x-4">
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
          >
            Start
          </Button>
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
          >
            Pause
          </Button>
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
