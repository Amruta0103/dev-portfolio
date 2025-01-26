import { useState } from "react";
import "./App.css";
import me from './assets/me.webp'
// import flyingComp from "./assets/galaxy.webp";
import Linkedin from "./assets/Linkedin.svg";
import Github from "./assets/Github.svg";
import Twitter from "./assets/Twitter.svg";
import File from "./assets/File.svg";
import idIcon from "./assets/idIcon.svg";
import flagIcon from "./assets/flagIcon.svg";
import linkIcon from "./assets/linkIcon.svg";
import folderIcon from "./assets/folderIcon.svg"
import courseCert from './assets/CourseraGoogleUXDesign.jpg';
import WorkCards from "./components/workCards";
// import Resume from "./assets/files/AmrutaDharap_2024.pdf";

function App() {
  const [tab, setTab] = useState('Home');
  // const downloadResume = () => {
  //   const pdfUrl = "./assets/files/AMRUTADHARAP_2024.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "AMRUTADHARAP_2024"; // specify the filename
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  // const downloadFile = (fileContent:any, fileName:any) => {
  //   // Create a Blob from the file content
  //   const blob = new Blob([fileContent], { type: 'text/plain' });
  //   const url = URL.createObjectURL(blob);

  //   // Create an anchor element to trigger the download
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = fileName; // Set the desired file name
  //   document.body.appendChild(link);

  //   // Trigger the download
  //   link.click();

  //   // Clean up
  //   link.remove();
  //   URL.revokeObjectURL(url);
  // };


  return (
    <div className="App z-0 relative flex flex-col justify-between items-center w-full h-screen max-h-screen text-greyBlack scroll-smooth">
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center h-full max-h-screen w-full">
        <div className="w-4/5 sm:w-3/5 h-4/5">
          { tab === 'Home' &&
            <div className="HomeTab flex flex-col justify-start sm:justify-around items-center w-full h-full mt-8 overflow-y-auto" style={{scrollbarWidth: 'none'}}>
              <div className="flex flex-col gap-5 items-center">
                <img src={me} className="w-[300px] rounded-3xl" alt="img"/>
                <div className="flex flex-col gap-3 justify-center items-center text-center max-h-[300px] py-3 sm:py-6">
                  <p className="font-fontJetMono text-[40px] sm:text-[52px] leading-[44px] sm:leading-[54px] text-[#000000b2]">Amruta Dharap</p>
                  <p className="font-fontRale text-xl leading-5 font-semibold text-[#0000009c]">UI / UX / FRONTEND</p>
                </div>
              </div>
            </div>
          }
          { tab === 'About' &&
            <div className="AboutTab flex flex-col gap-12 sm:gap-20 py-10 justify-around items-center w-full h-full overflow-y-auto" style={{scrollbarWidth: 'none'}}>
              <div id="Intro" className="flex flex-col gap-4 justify-center items-center w-full h-fit">
                <h2 className="font-fontJose font-[550]">Hello 👋</h2>
                <p className="font-fontJetMono text-center leading-6">I’m someone who loves solving problems through code and has a newfound passion for design. My focus is on building UIs that not only look good but also deliver smooth, intuitive user experiences.<br/><br/>
                Currently, I’m diving deeper into UX design, while sharpening my skills in coding, Hindustani Classical Violin playing, and Japanese language studies (because why not add some culture to creativity?). <br/><br/>
                This space is my journey, where I’ll document my growth and share my projects. 
                Whether it’s code, design, or a mix of both, I’m excited to learn and create cool stuff.</p>
              </div>
              <div id="Wins" className="flex flex-col gap-4 justify-center items-start w-full h-fit">
                <h3 className="font-fontJose font-[500]">Achievements</h3>
                <div className="w-fit sm:w-full h-fit">
                  <img src={courseCert} className="w-fit max-w-full lg:max-w-[900px]" alt="img"/>
                </div>
              </div>
            </div>
          }
          { tab === 'Works' &&
            <div className="WorksTab flex flex-col gap-6 py-10 justify-evenly items-center w-full h-full overflow-y-auto" style={{scrollbarWidth: 'none'}}>
              <h2 className="font-fontJose font-[550] py-2">Projects & Case Studies</h2>
                {/* <p className="w-full h-fit text-center font-[550] font-fontRale">
                  Work is in Progress!! <br/>
                  Updates will be posted soon! <br/>
                </p>
                <p className="w-full h-fit text-center font-medium font-fontRale">Meanwhile you can checkout <a href={'https://github.com/Amruta0103'} className="cursor-pointer underline"> my Github here</a> : &#41;
                </p> */}
                <WorkCards/>
                <p className="w-full h-fit text-center font-medium font-fontRale py-2 sm:py-4">My new projects with more <span className="font-semibold italic">design-focused</span> approach will be posted soon! Stay Tuned!!</p>
            </div>
          }
          { tab === 'Connect' &&
            <div className="ConnectTab flex flex-col justify-around items-center w-full h-full">
              <div className="flex flex-col justify-center items-center gap-5 w-3/4">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h2 className="font-fontJose font-[550]">Let's Connect</h2>
                  <p className="font-fontJetMono text-lg leading-[22px] text-center">Let’s connect, share ideas, and build something incredible together! 🌟</p>
                </div>
                <div className="flex gap-4 justify-center items-center w-fit p-2">
                  <a href={'https://www.linkedin.com/in/amruta-d-4366341b8/'} className="cursor-pointer">
                    <img src={Linkedin} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='LinkedIn'/>
                  </a>
                  <a href={'https://github.com/Amruta0103'} className="cursor-pointer">
                    <img src={Github} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='GitHub'/>
                  </a>
                  <a href={'https://x.com/AmrutaDharap'} className="cursor-pointer">
                    <img src={Twitter} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='X'/>
                  </a>
                  <a href={"https://drive.google.com/file/d/1UaTtg18td1BGG7S_YLgkW21OC16T2qYk/view?usp=drive_link"} className="cursor-pointer">
                    <img src={File} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 cursor-pointer" alt='Resume'/>
                  </a>
                </div>
              </div>
            </div>
          }         
        </div>
        <ul className="flex flex-row sm:flex-col p-4 gap-2 sm:gap-4 justify-center items-center font-fontJetMono w-full sm:w-1/5 bg-white bottom-0">
          <button onClick={()=> setTab('Home')} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
            <img src={idIcon} className="w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10" alt='idIcon'/>
          </button>
          <button onClick={()=> setTab('About')} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
          <img src={flagIcon} className="w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10" alt='flagIcon'/>
          </button>
          <button onClick={()=> setTab('Works')} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
          <img src={folderIcon} className="w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10" alt='folderIcon'/>
          </button>
          <button onClick={()=> setTab('Connect')} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
          <img src={linkIcon} className="w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10" alt='linkIcon'/>
          </button>
        </ul>
      </div>
    </div>
  )
}

export default App;
