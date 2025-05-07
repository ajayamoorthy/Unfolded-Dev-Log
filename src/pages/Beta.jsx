import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "../components/Button";
import PlaytestingReport from "../assets/files/Unfolded Playtesting Report.pdf";

const Beta = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10"></h1>
      <h1 className="text-3xl font-bold text-center mb-10">Beta Release</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-full lg:w-1/2">
          {/* <video
            src="/demo.mp4"
            controls
            className="w-full rounded-xl shadow-lg"
          /> */}
          <img
            src="./imgs/kylie/gaga_turnaround_render.jpg"
            alt="Alpha Preview"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left mx-auto">
          <h2 className="text-2xl font-bold mb-4">Build State</h2>
          <p className="body-1 mb-6 text-n-2">Build Info to be Updated.</p>

          <h2 className="text-2xl font-bold mb-4">Game Controls</h2>
          <p className="body-1 mb-6 text-n-2">
            WASD - controls the player's movements (up, left, down, right)
          </p>
          <p className="body-1 mb-6 text-n-2">
            Left Mouse Button - fire projectiles at enemies
          </p>
          <p className="body-1 mb-6 text-n-2">
            E - Interact with Dialogue Bubbles
          </p>

          <Button className="text-2xl">
            <a
              href="https://drive.google.com/drive/folders/1rJ45z04mnQlRbk9ttfihgNQpH5a9FrPr?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beta Download
            </a>
          </Button>
          <Button className="text-2xl">
            <a
              href="https://www.canva.com/design/DAGmmmy_Y70/wTHLy-Xm4aJDfyeR6gLL-g/view?utm_content=DAGmmmy_Y70&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h831cf316be"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Presentation
            </a>
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button className="mt-10 text-2xl">
          <a href={PlaytestingReport} target="_blank" rel="noopener noreferrer">
            Download Playtesting Report Doc
          </a>
        </Button>
      </div>
      <ButtonGradient />
    </div>
  );
};

export default Beta;
