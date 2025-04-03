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
            "The beginning! The Unreal project for Unfolded was created in Unreal Engine, with the goal of making a top-down, dungeon crawler-esque game. Basic narrative and general mechanics were decided upon, the details of which can be found under the design tab of this website. Visual motifs and themes were developed and passed to the art team to work on. The breakdown of work for each team was as follows:",
            "Tech:",
            "Lada worked on mapping the player movement controls and the projectile attacks that fire from the player when the user presses “E”.",
            "Anu worked on creating a portal traversal system that would take the player character from one part of the game map to another.",
            "Luca worked on making a basic enemy that when clicked on loses health.",
            "---",
            "Art:",
            "Kylie worked on the concept art for the game’s map and environments and created the graybox environment for the game. This was implemented into the Unreal project.",
            " Quiqui worked on concept art for the main player character, the enemies, and the NPCs. He also worked on environmental assets for the game.",
            "Allison worked on concept art for some environmental assets and made significant progress sculpting and creating clothing for the main player character.",
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
