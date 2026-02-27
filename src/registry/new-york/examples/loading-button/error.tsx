import { LoadingButton } from "@/registry/new-york/items/loading-button/components/loading-button"

const serverAction = async () => {
  // Simulate a server action
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    error: true,
    message: "Something went wrong. Please try again later.",
  }
}

export function ErrorLoadingButton() {
  return (
    <LoadingButton variant="destructive" action={serverAction}>
      Do error action
    </LoadingButton>
  )
}
