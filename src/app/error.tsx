"use client";

import { AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center p-4">
      <Card className="w-full max-w-md border-destructive/50 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-lg">오류가 발생했습니다</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            요청하신 작업을 처리하는 중 문제가 발생했습니다.
            <br />
            잠시 후 다시 시도해 주세요.
          </p>
          <div className="rounded-md bg-destructive/10 p-3">
            <p className="text-xs font-mono text-destructive break-all">
              {error.message || "Unknown error occurred"}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => reset()} className="w-full" variant="default">
            다시 시도
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
