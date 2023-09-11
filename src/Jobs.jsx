import { Placement } from "../data";
import "./Jobs.css";

function Jobs() {
  return (
    <div className="w-[100%] h-auto min-h-[100vh] bg-[#f0fafb] flex flex-col items-center justify-center pt-[50px]">
      {Placement.map((jobs) => (
        <div
          key={jobs.id}
          className="w-[80%] h-[280px] md:h-[150px] bg-[#fff] flex flex-col md:flex-row md:items-center md:justify-between mb-[20px] pl-[25px] py-[10px] md:px-[20px] md:py-[10px] rounded-[15px]"
        >
          <div className="flex md:flex-row flex-col gap-[10px] items-start justify-start md:items-center md:justify-center">
            <img src={jobs.logo} alt="" />
            <div>
                <div className="flex gap-[10px]">
                <p className="text-[#619392] font-bold">{jobs.company}</p>
                {jobs.new && <p className="text-[#fff] bg-[#5fa9a8] font-bold rounded-[15px] px-[8px] py-[2px] text-[15px]">NEW!</p>}
                {jobs.featured && <p className="text-[#fff] bg-[#283734] font-bold rounded-[15px] px-[8px] py-[2px] text-[15px]">FEATURED</p>}
                </div>
            <p className="text-black font-bold text-[18px]">{jobs.position}</p>
           
            <ul className="flex gap-[30px]">
                <li className="text-[#a5abab]">{jobs.postedAt} </li>
                <li className="list-disc text-[#a5abab]">{jobs.contract}</li>
                <li className="list-disc text-[#a5abab]">{jobs.location}</li>
            </ul>
            </div>
            
          </div>
          <div className="w-[250px] h-[2px] bg-[#cacaca] md:hidden my-[20px]"></div>
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
