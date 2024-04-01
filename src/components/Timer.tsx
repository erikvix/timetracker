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
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  const disableButton = time > 0 ? false : true;
  const handleStart = () => {
    if (started) return setStarted(false);
    setStarted(true);
  };
  const handleReset = () => {
    resetValues();
  };
  const handleStop = () => {
    resetValues();
    setStarted(false);
  };
  const resetValues = () => {
    setTime(0);
  };
  const buttonLabel = () => {
    if (started) return "Pause";
    if (time > 0) return "Resume";
    else return "Start";
  };

  useEffect(() => {
    if (started) {
      intervalSeconds = setInterval(() => {
        setTime((prevtime) => prevtime + 1);
      }, 10);
    }
    setSeconds(Math.floor((time / 100) % 60));
    setMinutes(Math.floor(time / 6000));
    setHours(Math.floor(time / 60000));

    return () => clearInterval(intervalSeconds);
  }, [started, time]);

  return (
    <main className="flex items-center justify-center h-screen ">
      <Card className="text-center dark:bg-gray-800 min-w-96 h-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Timer</CardTitle>
          <CardDescription className="text-4xl">
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center space-x-4">
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
            onClick={handleStart}
          >
            {buttonLabel()}
          </Button>
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
            onClick={handleStop}
            disabled={disableButton}
          >
            Stop
          </Button>
          <Button
            className="text-slate-50 bg-primary dark:text-slate-900"
            size="sm"
            variant="default"
            disabled={disableButton}
            onClick={handleReset}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
