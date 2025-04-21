import { Chrono } from "react-chrono";

const items = [{}];

const DevLog = () => {
  return (
    <Chrono
      items={[
        {
          title: "April 16, 2025",
          cardTitle: "Third Progress Update",
          cardDetailedText: [
            "This week was a crunch week as we prepared for our alpha release of the game. The focus was to get as much done in the engine as possible without causing the game to “break” while also getting our alpha presentation completed. The in-engine game is starting to match our vision as we have begun to implement the assets the art team has been working on. The baby boss room now has a bunch of environmental assets and our main player character model, Colin, has actually been added to the game!",
            "Enemies have now been added to the project and the default robot asset provided by Unreal has been replaced by the models the art team has developed. As of right now, the enemies can follow the player character and be attacked. The enemy attack mechanic has not been implemented yet, meaning Colin is immune to attacks. This will change, of course.",
            "The breakdown of work for each team was as follows:",
            "---",
            "Tech:",
            "Lada aided in implementing and retargeting the new main character player model, as well as building an updated Alpha build for our PAX submission.",
            "Anu started work on a dialogue/narrative system and also started work on a material that causes the environment walls to disappear when the camera gets too close.",
            "Luca created child blueprints for all the enemies, with all models implemented in game. The enemies have been placed in game for the player to interact with.",
            "---",
            "Art:",
            "Kylie finished sculpting one of the enemies as well as optimizing and rigging it. Any remaining work on arranging environmental assets in engine was also completed, as well as the modeling and retopo of Colin’s gun.",
            "Quiqui imported all his environmental assets to the engine. He also finished texturing the enemy he had sculpted and started texturing environmental assets.",
            "Allison implemented the player model and textures and retargeted animations from the default model to the player. She also began texturing and rigging the OoMP character as well as beginning to texture environment assets for the baby room.",
          ],
        },
        {
          title: "April 9, 2025",
          cardTitle: "Second Progress Update",
          cardDetailedText: [
            "At this stage of development, we have more functionality in the game. In Unreal Engine, in terms of tech we have a more advanced projectile firing system, where the player can control the direction of their projectile. The graybox has been implemented and portals (with updated materials) have been placed throughout the graybox. While we don’t have any enemies in the project yet, the enemy logic from the previous dev update has been expanded upon, with the temp enemies gaining the ability to follow the player if the player is in view. The enemies also take damage from the projectiles instead of mouse clicks.",
            "In terms of art, the player character, the baby enemy and the OoMP have all been modeled, sculpted, and assembled for texturing and rigging. The environmental assets are in the process of being modeled and most of the modular cave assets have been created. None of these pieces have been implemented in the engine, except for the updated, roofless graybox.",
            "The breakdown of work for each team was as follows:",
            "---",
            "Tech:",
            "Lada worked on retargeting the projectile to fire at mouse position. The projectile is also now mapped to “mouse right button” instead of “E”.",
            "Anu fixed a portal bug where teleporting screwed with the movement inputs. The portal now is one way only to prevent “ping pong” teleportation issues. Also created a material for the portal and started on the particle systems. Made a particle system for the glow cave environment where atmospheric particles float in the air.",
            "Luca worked on enemy pathfinding and when the player is in view the enemy starts to follow the player. The enemy now loses health when hit by the projectile instead of on click.",
            "---",
            "Art:",
            "Kylie finished creating most modular cave assets and primary texturing as well as UVing several of them. Sculpting one of the enemy models was started and nearly completed.",
            "Quiqui finished modeling and readying to texture one of the enemies. He also continued working on modeling environmental assets.",
            "Allison finished modeling, sculpting, and assembling the player character, baby enemy, and OoMP character for texturing and rigging.",
          ],
        },
        {
          title: "April 2, 2025",
          cardTitle: "First Progress Update",
          cardDetailedText: [
            "The beginning! The Unreal project for Unfolded was created in Unreal Engine, with the goal of making a top-down, dungeon crawler-esque game. Basic narrative and general mechanics were decided upon, the details of which can be found under the design tab of this website. Visual motifs and themes were developed and passed to the art team to work on. The breakdown of work for each team was as follows:",
            "---",
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
