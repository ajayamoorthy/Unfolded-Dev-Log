import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "../components/Button";

const Beta = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">Beta Page</h1>
      <h1 className="text-3xl font-bold text-center mb-10">Beta Release</h1>

      <div className="w-full lg:w-1/2 text-left mx-auto">
        <h2 className="text-2xl font-bold mb-4">Build State</h2>
        <p className="mb-6 text-gray-500">Build Info to be Updated.</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Game Controls</h2>
      <p className="mb-6 text-gray-500">
        WASD - controls the player's movements (up, left, down, right)
      </p>
      <p className="mb-6 text-gray-500">
        Left Mouse Button - fire projectiles at enemies
      </p>
      <p className="mb-6 text-gray-500">E - Interact with Dialogue Bubbles</p>

      <div className="mt-8 flex flex-col items-center gap-4">
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
            href="https://www.canva.com/design/DAGmmmy_Y70/wTHLy-Xm4aJDfyeR6gLL-g/view?utm_content=DAGmmmy_Y70&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h831cf316be"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Presentation
          </a>
        </Button>
      </div>
      <ButtonGradient />
    </div>
  );
};

export default Beta;
