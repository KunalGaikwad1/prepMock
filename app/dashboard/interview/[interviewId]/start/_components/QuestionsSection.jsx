import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({ MockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Your browser does not support text to speech.");
    }
  };

  return (
    MockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {MockInterviewQuestion &&
            MockInterviewQuestion.map((question, index) => (
              <h2
                className={`rounded-full p-2 bg-teal-400 text-xs md:text-sm text-center cursor-pointer
            ${activeQuestionIndex == index && " bg-green-900 text-white"}
            `}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg text-teal-400">
          {MockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2
          className="cursor-pointer text-white"
          onClick={() =>
            textToSpeech(MockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />

        <div className="border rounded-lg p-5 bg-yellow-100 my-20">
          <h2 className="gap-2 items-center flex text-black">
            <Lightbulb />
            <strong>NOTE:</strong>
          </h2>
          <h2 className="my-2 text-sm">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
