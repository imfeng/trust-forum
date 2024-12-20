"use client";

import ConfirmVoteModal from "@/components/ConfirmVoteModal";
import DebateComments from "@/components/DebateComments";
import Image from "next/image";
import { use, useState } from "react";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import { useGetPolls } from "@/apis/polls/queries/useGetPolls";

const debateComments = [
  {
    name: "Peter Pan",
    username: "peterpan0929",
    votedFor: "yes",
    avatarUrl: "/peter.avif",
    comment:
      "I believe humans are inherently good. We are born with empathy and compassion, though our experiences can shape how we express these innate qualities.",
    createdAt: new Date("2024-11-12"),
    isLiked: false,
  },
  {
    name: "Jane Smith",
    username: "itsjaneeeeee",
    votedFor: "no",
    avatarUrl: "/jane.png",
    comment:
      "I believe humans are inherently bad. If there weren't laws and regulations, we would have committed the worst crimes.",
    createdAt: new Date("2024-11-14"),
    isLiked: true,
  },
];

export default function PollsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const searchParams = useSearchParams();

  const { data: polls, isLoading } = useGetPolls();

  console.log(polls);

  const isVoted = searchParams.get("isVoted");

  const [selected, setSelected] = useState<null | string>(null);
  const [openModal, setOpenModal] = useState(false);

  const poll = polls?.find((poll) => poll.id == id);

  if (!poll) {
    return null;
  }

  return (
    <div>
      <div className="mx-auto py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Section */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="text-4xl font-bold text-white mb-6">{poll.title}</h1>

            <div className="mb-6 rounded-lg h-[500px] relative">
              <Image
                src={poll.image}
                fill
                alt="Poll Image"
                className="rounded-lg"
              />
            </div>

            <div className="text-gray-300 mb-6">
              <h3 className="text-xl text-primary font-bold">Description</h3>
              <p>{poll.description}</p>
            </div>

            {/* Debate Section */}
            <div>
              <h3 className="text-xl text-primary font-bold">Debate</h3>
              {isVoted === "true" ? (
                debateComments.map((comment) => (
                  <DebateComments
                    key={comment.username}
                    name={comment.name}
                    username={comment.username}
                    votedFor={comment.votedFor}
                    isLiked={comment.isLiked}
                    comment={comment.comment}
                    avatarUrl={comment.avatarUrl}
                    createdAt={format(comment.createdAt, "yyyy-MM-dd HH:mm")}
                  />
                ))
              ) : (
                <div className="text-white">Vote to see all comments!</div>
              )}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="col-span-12 md:col-span-3">
            <div className="bg-[#2D2D2D] rounded-lg p-6">
              {/* User Info */}
              <div className="flex items-center mb-6">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src="/john.avif"
                    fill
                    alt="User Avatar"
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="ml-3">
                  <div className="text-white font-semibold">John Doe</div>
                  <div className="text-gray-400 text-sm">@johndoe</div>
                </div>
              </div>

              {/* Poll Date */}
              <div className="mb-4">
                <div className="text-primary-purple flex items-center font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#808080]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  10/01/2023 - 17/01/2023
                </div>
              </div>

              {/* Vote Count */}
              <div className="mb-4">
                <div className="flex items-center text-primary-purple font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#808080]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  236 people voted
                </div>
                {/* Poll Bounty */}
                <div className="mt-3 flex items-center text-primary font-bold text-2xl">
                  <span className="text-xs">$</span>
                  <span className="">500</span>
                </div>
              </div>

              {/* Voting Section */}
              <div className="space-y-4">
                {/* YES */}
                <div
                  className={`relative flex items-center uppercase rounded-lg border border-solid ${
                    selected === "yes" || isVoted === "true"
                      ? "border-primary"
                      : "border-white"
                  }`}
                  onClick={() => {
                    if (!isVoted) {
                      const input = document.getElementById(
                        "yes"
                      ) as HTMLInputElement;
                      input.checked = true;
                      setSelected("yes");
                    }
                  }}
                >
                  {/* Progress Bar - YES */}
                  <div
                    className={`p-3 rounded-md overflow-hidden flex items-center ${
                      isVoted ? "w-[60%] bg-primary" : ""
                    }`}
                  >
                    {!isVoted && (
                      <input
                        type="radio"
                        id="yes"
                        name="vote"
                        className="appearance-none w-5 h-5 rounded-full border-2 border-white checked:border-primary relative mr-3
                    checked:before:content-[''] checked:before:absolute checked:before:w-3 checked:before:h-3 
                    checked:before:bg-primary checked:before:rounded-full checked:before:top-1/2 checked:before:left-1/2 
                    checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                        onChange={() => setSelected("yes")}
                      />
                    )}
                    <label
                      htmlFor="yes"
                      className={`font-bold ${
                        selected === "yes" && !isVoted
                          ? "text-primary"
                          : "text-white"
                      }`}
                    >
                      Yes
                    </label>
                  </div>
                  {/* Display voter count at the right */}
                  {isVoted === "true" && (
                    <span className="ml-auto pr-3 flex items-center text-[#808080] font-medium">
                      {/* user icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <p className="text-sm">123</p>
                    </span>
                  )}
                </div>
                {/* NO */}
                <div
                  className={`relative flex items-center uppercase rounded-lg border border-solid ${
                    selected === "no" && !isVoted
                      ? "border-primary-purple"
                      : "border-white"
                  }`}
                  onClick={() => {
                    if (!isVoted) {
                      const input = document.getElementById(
                        "no"
                      ) as HTMLInputElement;
                      input.checked = true;
                      setSelected("no");
                    }
                  }}
                >
                  {/* Progress Bar - NO */}
                  <div
                    className={`p-3 rounded-md overflow-hidden flex items-center ${
                      isVoted === "true" ? "w-[40%] bg-primary-purple" : ""
                    }`}
                  >
                    {!isVoted && (
                      <input
                        type="radio"
                        id="no"
                        name="vote"
                        className="appearance-none w-5 h-5 rounded-full border-2 border-white checked:border-primary-purple relative mr-3
                    checked:before:content-[''] checked:before:absolute checked:before:w-3 checked:before:h-3 
                    checked:before:bg-primary-purple checked:before:rounded-full checked:before:top-1/2 checked:before:left-1/2 
                    checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                        onChange={() => setSelected("no")}
                      />
                    )}
                    <label
                      htmlFor="no"
                      className={`font-bold ${
                        selected === "no" && !isVoted
                          ? "text-primary-purple"
                          : "text-white"
                      }`}
                    >
                      No
                    </label>
                  </div>
                  {/* Display voter count at the right */}
                  {isVoted === "true" && (
                    <span className="ml-auto pr-3 flex items-center text-[#808080] font-medium">
                      {/* user icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <p className="text-sm">123</p>
                    </span>
                  )}
                </div>

                {isVoted !== "true" && (
                  <button
                    className={`w-full py-2 rounded-md font-bold text-xl ${
                      selected
                        ? "bg-primary text-black"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!selected}
                    onClick={() => setOpenModal(true)}
                  >
                    Vote Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!!selected && (
        <ConfirmVoteModal
          openModal={openModal}
          setOpen={setOpenModal}
          votedFor={selected}
        />
      )}
    </div>
  );
}
