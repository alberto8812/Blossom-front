export const CharacterDetailSkeleton = () => {
  return (
    <div className="max-w-md p-6 animate-pulse w-screen h-screen">
      <div className="flex items-center gap-2 mb-6">
        <div className="relative">
          {/* Avatar skeleton */}
          <div className="w-20 h-20 rounded-full bg-gray-200" />
          {/* Heart icon skeleton */}
          <div className="absolute -right-1 -bottom-1">
            <div className="w-6 h-6 rounded-full bg-gray-200" />
          </div>
        </div>
        {/* Name skeleton */}
        <div className="h-8 w-64 bg-gray-200 rounded" />
      </div>

      <div className="space-y-6">
        {/* Specie section skeleton */}
        <div>
          <div className="h-6 w-20 bg-gray-200 rounded mb-2" />
          <div className="h-5 w-32 bg-gray-200 rounded" />
        </div>

        {/* Status section skeleton */}
        <div>
          <div className="h-6 w-20 bg-gray-200 rounded mb-2" />
          <div className="h-5 w-32 bg-gray-200 rounded" />
        </div>

        {/* Occupation section skeleton */}
        <div>
          <div className="h-6 w-20 bg-gray-200 rounded mb-2" />
          <div className="h-5 w-32 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};
