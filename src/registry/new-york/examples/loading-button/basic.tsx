"use client"

import { useTransition } from "react"
import { LoadingButton } from "@/registry/new-york/items/loading-button/components/loading-button"

export function BasicLoadingButton() {
  const [isLoading, startTransition] = useTransition()

  function handleClick() {
    startTransition(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    })
  }

  return (
    <LoadingButton isLoading={isLoading} onClick={handleClick}>
      클릭
    </LoadingButton>
  )
}
