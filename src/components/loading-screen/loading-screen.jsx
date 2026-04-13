export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-brand-herb-200 border-t-brand-herb rounded-full animate-spin" />
        <p className="text-sm text-gray-400 font-sans">Loading...</p>
      </div>
    </div>
  )
}