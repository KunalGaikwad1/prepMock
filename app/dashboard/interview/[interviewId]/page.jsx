"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl text-teal-400">Lets Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex flex-col my-5 gap-5 ">
          <div className="flex flex-col p-5 rounded-lg border gap-5 ">
            <h2 className="text-lg text-white">
              <strong className="text-teal-400">Job Role/Job Position: </strong>
              {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg text-white">
              <strong className="text-teal-400">
                Job Description/Tech Stack:{" "}
              </strong>
              {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg text-white">
              <strong className="text-teal-400">Years of Experience: </strong>
              {interviewData?.jobExperience}
            </h2>
          </div>
          <div className="p-5 rounded-lg border border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center">
              <Lightbulb /> <strong>Information</strong>
            </h2>
            <h2>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                height: 500,
                width: 500,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 rounded-lg border bg-black text-white" />
              <Button onClick={() => setWebCamEnabled(true)}>
                Enable Webcam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
          <Button className="bg-green-800">Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
