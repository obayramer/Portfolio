import ProjectContext from "./ProjectContext";
import { useSelector } from "react-redux";
import { projectsSelector } from "../store/selectors/selectors";

export default function Projects() {
  const projectsData = useSelector(projectsSelector);

  return (
    <div className="w-screen  bg-[#CBF281] flex flex-col items-center py-[44px] gap-4 dark:bg-[#1A210B]">
      <div className="w-[960px] text-left max-lg:text-center">
        <h1 className="text-[#4731D3] font-bold text-[48px] leadindg-[48px] dark:text-[#CBF281]">
          {projectsData.title}
        </h1>
      </div>
      <ProjectContext />
    </div>
  );
}