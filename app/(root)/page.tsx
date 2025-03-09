import React from "react";
import HeaderHome from "./components/header";
import DownloadExam from "./components/downloadExam";
import DownloadCheat from "./components/downloadCheat";

export default function page() {
  return (
    <div>
      <header>
        <HeaderHome />
      </header>
      <main>
        <div className="flex justify-center mt-16 gap-20">
          <div className="flex flex-col gap-4">
            <DownloadExam />
            <DownloadCheat />
          </div>
          <div>
            <iframe
              src="https://drive.google.com/file/d/1Cokuedza4EQS4fBO57D35Ew_DKNr2t_0/preview"
              className="w-[71vh] h-[40vh] rounded-lg"
              allowFullScreen={true}
            />
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}
