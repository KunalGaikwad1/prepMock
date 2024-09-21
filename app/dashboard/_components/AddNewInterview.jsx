"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmitHandle = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt =
      "Job Position : " +
      jobPosition +
      ", Job Description: " +
      jobDesc +
      ", Years of Experience: " +
      jobExperience +
      " , Depends on Job Position , Job Description and Years of Experience give me " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview questions along with Answer in JSON Format give us question and answer field in JSON";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: MockInterview.mockId });

      console.log("Inserted Id: ", resp);
      if (resp) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("Error");
    }

    setLoading(false);
  };
  return (
    <div>
      <div
        className="p-10 bg-black border rounded-lg  hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center text-white">
          Add New Interview 🚀 +
        </h2>
      </div>
      <Dialog open={openDialog} className="bg-white">
        <DialogContent className="max-w-2xl bg-black">
          <DialogHeader>
            <DialogTitle className="text-2xl text-teal-400">
              Tell us More About Your Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmitHandle}>
                <div>
                  <h2 className="text-white">
                    Add Details About Your Job Position/Role, Job Description
                    and Years of Experience
                  </h2>
                  <div className="mt-7 my-3 ">
                    <label className="text-teal-400">
                      Job Role/Job Position
                    </label>
                    <Input
                      placeholder="Ex.Frontend Developer"
                      required
                      onChange={(e) => setJobPosition(e.target.value)}
                      className="text-white"
                    />
                  </div>
                  <div className=" my-3">
                    <label className="text-teal-400">
                      Job Description/ Tech Stack in Short
                    </label>
                    <Textarea
                      placeholder="Ex.React, Angular, NodeJS"
                      required
                      onChange={(e) => setJobDesc(e.target.value)}
                      className="text-white"
                    />
                  </div>
                  <div className="my-3">
                    <label className="text-teal-400">
                      Years of Experience?
                    </label>
                    <Input
                      placeholder="Ex.3"
                      type="number"
                      required
                      max="60"
                      onChange={(e) => setJobExperience(e.target.value)}
                      className="text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    onClick={() => setOpenDialog(false)}
                    className=" hover:bg-red-400 text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className=" hover:bg-green-400 text-white"
                  >
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        Generating From AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
