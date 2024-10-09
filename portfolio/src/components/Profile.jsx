import { useSelector } from "react-redux";
import ProfileContext from "./ProfileContext";
import { basicInfoSelector } from "../store/selectors/selectors";

export default function Profile() {
  const info = useSelector(basicInfoSelector);
  return (
    <div className="bg-[#4731D3] w-screen min-h-[552px] flex flex-col justify-center items-center gap-6 dark:bg-[#171043] max-md:h-auto max-md:pt-5">
      <div className="w-[960px] text-left font-bold text-[#CBF281] max-lg:text-center mb-3">
        <h1>{info.profileTitle}</h1>
      </div>
      <ProfileContext />
    </div>
  );
}