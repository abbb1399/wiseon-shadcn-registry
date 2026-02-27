"use client"

import { type ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { LoadingSwap } from "@/components/ui/loading-swap"

export function LoadingButton({
  isLoading,
  ...props
}: ComponentProps<typeof Button> & {
  isLoading: boolean
}) {
  return (
    <Button {...props} disabled={props.disabled ?? isLoading}>
      <LoadingSwap
        isLoading={isLoading}
        className="inline-flex items-center gap-2"
      >
        {props.children}
      </LoadingSwap>
    </Button>
  )
}
