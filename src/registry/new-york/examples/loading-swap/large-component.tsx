"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoadingSwap } from "@/registry/experimental/items/loading-swap/components/loading-swap"
import { useState } from "react"

export function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => setIsLoading(l => !l)} className="w-fit">
        로딩 toggle
      </Button>
      <Card className="w-96">
        <LoadingSwap isLoading={isLoading}>
          <CardHeader>
            <CardTitle>큰 컴포넌트</CardTitle>
            <CardDescription>어떤 컴포넌트든 감쌀 수 있습니다</CardDescription>
          </CardHeader>
        </LoadingSwap>
      </Card>
    </div>
  )
}
