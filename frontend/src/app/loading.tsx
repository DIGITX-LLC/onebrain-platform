export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030205]">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm">Loading OneBrain...</p>
      </div>
    </div>
  );
}

