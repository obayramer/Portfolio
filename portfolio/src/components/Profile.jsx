import { useSelector } from "react-redux";

import { basicInfoSelector } from "../store/selectors/selectors";
import BasicInfo from "./BasicInfo";
import AboutMe from "./AboutMe";

export default function Profile() {
  const info = useSelector(basicInfoSelector);
  return (
    <div className="bg-[#4731D3] w-screen min-h-[552px] flex flex-col justify-center items-center gap-6 dark:bg-[#171043] max-md:h-auto max-md:pt-5">
      <div className="w-[960px] text-left font-bold text-[#CBF281] max-lg:text-center mb-3">
        <h1>{info.profileTitle}</h1>
      </div>
      <div className="max-w-[960px] min-h-[290.68px] flex gap-[30px]  bg-transparent max-md:flex-col max-md:h-auto">
      <BasicInfo />
      <div className="w-[300px] h-[290.68px] flex items-stretch justify-center max-lg:hidden">
        <img
          className="object-cover rounded-[10px] shadow-custom1"
          src="./image.png"
          alt="image"
        />
      </div>
      <AboutMe />
    </div>
    </div>
  );
}