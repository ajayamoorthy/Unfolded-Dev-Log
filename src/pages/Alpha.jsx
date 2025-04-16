//import UnfoldedAlpha from "../assets/files/UnfoldedAlpha.zip";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "../components/Button";

const Alpha = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Alpha Release</h1>

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

        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-4">Build State</h2>
          <p className="body-1 mb-6 text-n-2">
            The player can play as Colin, the magical boy. The enemy models have
            been implemented into the project, along with the work in progress
            environment. Player can teleport between the different locations in
            the graybox and attack the enemies and kill them.
          </p>

          <Button className="text-2xl">
            <a
              href="https://drive.google.com/file/d/1RnITgBqhNgkVFxfPxw9M-pW5NuaByf9e/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpha Download
            </a>
          </Button>
        </div>
      </div>

      <ButtonGradient />
    </div>
  );
};

export default Alpha;
