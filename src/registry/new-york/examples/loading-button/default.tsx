import { LoadingButton } from "@/registry/new-york/items/loading-button/components/loading-button"

const serverAction = async () => {
  // Simulate a server action
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { error: false }
}

export function DefaultLoadingButton() {
  return <LoadingButton action={serverAction}>Do default behavior</LoadingButton>
}
