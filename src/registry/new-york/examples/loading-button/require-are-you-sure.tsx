import { LoadingButton } from "@/registry/new-york/items/loading-button/components/loading-button"

const serverAction = async () => {
  // Simulate a server action
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { error: false }
}

export function AreYouSureLoadingButton() {
  return (
    <LoadingButton
      action={serverAction}
      requireAreYouSure
      areYouSureDescription="I can put anything I want here."
    >
      Do extra secure action
    </LoadingButton>
  )
}
