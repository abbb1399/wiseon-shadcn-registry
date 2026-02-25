"use client"

import { Button } from "@/components/ui/button"
import { LoadingSwap } from "@/registry/experimental/items/loading-swap/components/loading-swap"
import { useTransition } from "react"

export function LoadingButton() {
  const [isLoading, startTransition] = useTransition()

  return (
    <Button
      onClick={() => {
        startTransition(async () => {
          // 로딩 딜레이
          await new Promise(res => setTimeout(res, 1000))
        })
      }}
    >
      <LoadingSwap isLoading={isLoading}>클릭</LoadingSwap>
    </Button>
  )
}
