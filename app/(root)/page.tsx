import React from "react";
import HeaderHome from "./components/header";
import DownloadExam from "./components/downloadExam";
import DownloadCheat from "./components/downloadCheat";
import Fqa from "./components/fqa";
import ContactUs from "./components/contactUs";

export default function page() {
  return (
    <div>
      <header>
        <HeaderHome />
      </header>
      <main>
        <div className="flex justify-center items-center mt-16 flex-col gap-8 lg:gap-20 lg:flex-row">
          <div className="flex flex-col gap-4 max-lg:flex-row max-sm:flex-col max-sm:w-full px-4">
            <DownloadExam />
            <DownloadCheat />
          </div>
          <div>
            <iframe
              src="https://drive.google.com/file/d/1Cokuedza4EQS4fBO57D35Ew_DKNr2t_0/preview"
              className="w-[71vh] h-[40vh] rounded-lg max-sm:w-screen max-sm:rounded-none "
              allowFullScreen={true}
            />
          </div>
        </div>
        <div className="flex justify-center mt-16 pb-12 ">
          <div className="w-[110vh] px-4 flex flex-col gap-2">
            <ContactUs />
            <h1 className="text-2xl max-sm:text-xl font-semibold mt-8">
              Pertanyaan yang sering ditanyakan
            </h1>
            <Fqa></Fqa>
          </div>
        </div>
      </main>
    </div>
  );
}
