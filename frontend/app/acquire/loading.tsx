import { Leaf } from "lucide-react"

export default function AcquireLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="text-center">
        <Leaf className="mx-auto h-12 w-12 animate-pulse text-green-600" />
        <h1 className="mt-4 text-xl font-medium text-green-800">Loading eco-friendly alternatives...</h1>
        <p className="mt-2 text-sm text-gray-500">
          We're preparing sustainable product suggestions for you
        </p>
      </div>
    </div>
  )
}

