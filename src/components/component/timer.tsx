import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

let intervalSeconds: NodeJS.Timeout;
export function Timer() {
  const [time, setTime] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const handleStart = () => {
    setStarted(!started);
  };
  const handleReset = () => {
    setTime(0);
  };
  const handleStop = () => {
    setTime(0);
    setStarted(false);
  };
  const hours = Math.floor(time / 60000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor(time / 6000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((time / 100) % 60)
    .toString()
    .padStart(2, "0");

  useEffect(() => {
    if (started) {
      intervalSeconds = setInterval(() => {
        setTime((prevtime) => prevtime + 1);
      }, 10);
    }

    return () => clearInterval(intervalSeconds);
  }, [started]);

  return (
    <main className="flex items-center justify-center h-screen ">
      <Card className="text-center dark:bg-gray-800 min-w-96 h-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Timer</CardTitle>
          <CardDescription className="text-4xl">
            {hours}:{minutes}:{seconds}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center space-x-4">
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
            onClick={handleStart}
          >
            {started ? "Pause" : time > 0 ? "Resume" : "Start"}
          </Button>
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
            onClick={handleStop}
            disabled={time > 0 ? false : true}
          >
            Stop
          </Button>
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            disabled={time > 0 ? false : true}
            variant="default"
            onClick={handleReset}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
