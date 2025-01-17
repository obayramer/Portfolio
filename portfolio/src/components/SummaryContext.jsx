import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { summarySelector } from "../store/selectors/selectors";
export default function SummaryContent() {
  const sum = useSelector(summarySelector);
  const openGit = () => {
    const userConfirm = window.confirm(
      "Bu sayfadan ayrılmak üzeresiniz.Devam etmek için lütfen onaylayın"
    );
    if (userConfirm) {
      window.open("https://github.com/obayramer");
    }
  };
  const openIn = () => {
    const userConfirm = window.confirm(
      "Bu sayfadan ayrılmak üzeresiniz.Devam etmek için lütfen onaylayın"
    );
    if (userConfirm) {
      window.open(" https://linkedin.com/in/ömer-bayram-0a712b249");
    }
  };

  return (
    <div className=" max-w-[955px] h-[375px] flex  gap-[83px] mb-[150px] max-md:flex-col max-sm:my-10">
      <div className="max-w-[530px] h-[375px] text-left flex flex-col justify-between flex-wrap gap-[83px ]  ">
        <h1 className="text-[#CBF281] font-bold mt-7">{sum.sumTitle}</h1>
        <p className="text-white text-2xl font-normal ">{sum.sumContent}</p>
        <div className="w-[278px] h-14 flex gap-3 items-center">
          <button
            className="flex items-center gap-[10px] w-[127px] h-[52px] border rounded-md px-3 pt-3 pb-5 bg-white text-[#4731D3] dark:bg-[#252128] dark:text-white"
            onClick={openGit}
          >
            <FontAwesomeIcon icon={faGithub} />
            Github
          </button>
          <button
            className="flex items-center gap-[10px] w-[127px] h-[52px] border rounded-md px-3 pt-3 pb-5 bg-white text-[#4731D3] dark:bg-[#252128] dark:text-white"
            onClick={openIn}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            Linkedin
          </button>
        </div>
      </div>

      <div className="w-[350px] h-[375px] max-lg:hidden ">
        <img
          className="w-full h-full object-cover border-0 rounded-[18px] "
          src="./photo.jpg"
          alt="profilePicture"
        />
      </div>
    </div>
  );
}