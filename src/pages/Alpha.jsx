//import UnfoldedAlpha from "../assets/files/UnfoldedAlpha.zip";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "../components/Button";

const Alpha = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Initial Releases</h1>

      <h1 className="text-3xl font-bold text-center mb-10">Playtest Release</h1>

      <div className="flex justify-center gap-4">
        <Button className="text-2xl">
          <a
            href="https://drive.google.com/drive/folders/1uruizFO4f95zkAnzAX928egRgixI3wSd?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Playtest Download
          </a>
        </Button>
        <Button className="text-2xl">
          <a
            href="https://forms.gle/5oKMmwjLYgJpPFcr7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Playtest Form
          </a>
        </Button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-10"></h1>
      <h1 className="text-3xl font-bold text-center mb-10">Alpha Release</h1>
      <h1 className="text-3xl font-bold text-center mb-10"></h1>
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

          <h2 className="text-2xl font-bold mb-4">Game Controls</h2>
          <p className="body-1 mb-6 text-n-2">
            WASD - controls the player's movements (up, left, down, right)
          </p>
          <p className="body-1 mb-6 text-n-2">
            Right Mouse Button - fire projectiles at enemies
          </p>

          <Button className="text-2xl">
            <a
              href="https://drive.google.com/drive/folders/1tjdSstgK0z4PfNwmKHa6jSELWwGjOmW9?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpha Download
            </a>
          </Button>
          <Button className="text-2xl">
            <a
              href="https://www.canva.com/design/DAGkpAtwEcY/2g1FS1pm2CBx_s74mhRe1Q/view?utm_content=DAGkpAtwEcY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h413733e145"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Presentation
            </a>
          </Button>
        </div>
      </div>

      <ButtonGradient />
    </div>
  );
};

export default Alpha;
