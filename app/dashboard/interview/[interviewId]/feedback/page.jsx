"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };
  return (
    <div className="p-10">
      {feedbackList.length == 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">
            Congratulations!
          </h2>
          <h2 className="text-2xl font-bold text-white">
            Here is your Interview Feedback
          </h2>
          <h2 className="text-lg my-3 text-white">
            Your Overall Interview Rating <strong>7/10</strong>
          </h2>
          <h2 className="text-sm text-white">Check the Details Below</h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 bg-gray-200 w-full text-black flex gap-7 justify-between rounded-lg my-2 text-left">
                  Q. {item.question} <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating:</strong>
                      {item.rating}
                    </h2>
                    <h2 className="bg-red-50 text-sm text-red-900 p-2 border rounded-lg">
                      <strong>Your Answer:</strong>
                      {item.userAns}
                    </h2>
                    <h2 className="bg-green-50 text-sm text-green-900 p-2 border rounded-lg">
                      <strong>Correct Answer:</strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="bg-blue-50 text-sm text-blue-900 p-2 border rounded-lg">
                      <strong>Feedback:</strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Button
        className="hover:text-black hover:bg-white"
        onClick={() => router.replace("/dashboard")}
      >
        Go Home
      </Button>
    </div>
  );
}

export default Feedback;
