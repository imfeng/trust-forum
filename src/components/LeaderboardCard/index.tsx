import Image from "next/image";

interface LeaderboardCardProps {
  ranking: number;
  name: string;
  score: number;
  image: string;
}

export default function LeaderboardCard({
  ranking = 1,
  name = "Tai Man",
  score = 599,
  image = "/peter.avif",
}: LeaderboardCardProps) {
  return (
    <div className="bg-[#2D2D2D] rounded-xl py-3 px-5 flex items-center">
      {/* Ranking */}
      <span className="text-sm font-semibold min-w-[24px] text-[#B7B1E2]">
        {ranking}
      </span>

      {/* Profile Image of user, rounded */}
      <Image
        src={image}
        alt={`My profile`}
        width={40}
        height={40}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* User name */}
      <span className="flex-1 text-md ml-2 text-white font-bold">{name}</span>

      {/* Score of user, aligned right */}
      <div className="font-medium text-primary mr-4 leading-none flex flex-col">
        <p className="text-sm text-[#B7B1E2] leading-none">Score</p>
        <p className="text-lg text-primary leading-none">{score}</p>
      </div>

      {/* Score of user, aligned right */}
      <div className="font-medium text-primary mr-4 leading-none flex flex-col">
        <p className="text-sm text-[#B7B1E2] leading-none">WP</p>
        <p className="text-lg text-primary leading-none">{12 / 40}</p>
      </div>
    </div>
  );
}
