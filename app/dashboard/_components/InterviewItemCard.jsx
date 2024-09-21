import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function InterviewItemCard({ interview }) {
  const router = useRouter();
  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };
  const onFeedbackClick = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  };
  return (
    <div className="border shadow-sm rounded-lg p-3 text-white">
      <h2 className="font-bold text-primary text-white">
        {interview?.jobPosition}
      </h2>
      <h2 className="text-sm text-white">
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className="text-xs text-gray-400">
        Created At :{interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          size="sm"
          variant="outline"
          className="bg-green-300 w-full text-black hover:bg-black hover:text-white"
          onClick={onFeedbackClick}
        >
          Feedback
        </Button>
        <Button
          size="sm"
          className="w-full bg-green-300 hover:text-white text-black hover:bg-black"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewItemCard;
