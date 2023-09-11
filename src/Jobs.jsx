import { Placement } from "../data";
import "./Jobs.css";

function Jobs() {
  return (
    <div className="w-[100%] h-auto min-h-[100vh] bg-[#f0fafb] flex flex-col items-center justify-center pt-[50px]">
      {Placement.map((jobs) => (
        <div
          key={jobs.id}
          className="w-[80%] h-[150px] bg-[#fff] flex items-center justify-between mb-[20px] px-[20px] py-[10px]"
        >
          <div className="flex gap-[10px] items-center justify-center">
            <img src={jobs.logo} alt="" />
            <p>{jobs.position}</p>
          </div>
          <div className="flex gap-[10px]">
          {jobs.languages.map((language, index) => (
              <p key={index} className="text-[#619392] bg-[#eef7f6] px-[8px] py-[5px] font-bold">{language}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
