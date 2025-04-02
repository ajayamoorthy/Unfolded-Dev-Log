import { Chrono } from "react-chrono";

const items = [{}];

const DevLog = () => {
  return (
    <Chrono
      items={[
        {
          title: "April 2, 2025",
          cardTitle: "First Progress Update",
          cardDetailedText: [
            "Tech: The current build in Unreal Engine has a simple first pass of the projectile attack system we plan to use, worked on by Lada. A functional first pass of the portal level traversal system has also been added to the game, worked on by Ananya.",
            "Art: Concept art for our magical boy main character, enemies, and NPCs was drawn by Quiqui. Prop concept art, main character 3d model blockout, and NPC 3d model blockout has been worked on by Allison. Concept art for the game map and implementation of a graybox level in the game engine was done by Kylie.",
          ],
        },
      ]}
      theme={{
        cardBgColor: "#4F518C",
        cardDetailsBackGround: "",
        cardDetailsColor: "", //white body text
        cardMediaBgColor: "",
        //cardSubtitleColor: "",
        cardTitleColor: "#DABFFF",
        //detailsColor: "",
        iconBackgroundColor: "",
        nestedCardBgColor: "",
        nestedCardDetailsBackGround: "",
        nestedCardDetailsColor: "",
        nestedCardSubtitleColor: "",
        nestedCardTitleColor: "",
        primary: "#DABFFF", //the timeline color
        secondary: "", //date timeline field
        //textColor: "",
        titleColor: "#DABFFF",
        titleColorActive: "#DABFFF",
        toolbarBgColor: "#4F518C",
        toolbarBtnBgColor: "#907AD6",
        toolbarTextColor: "#FFFFFF",
      }}
      mode="VERTICAL"
    />
  );
};

export default DevLog;

/* <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">DevLog Page</h1>
      <p>Under Construction!</p>
      <img
        src="./src/assets/warningsign.png"
        alt="Warning Sign"
        className="mx-auto w-1/3 max-w-[200px] h-auto"
      ></img>
    </div> */
