import { Chrono } from "react-chrono";

const items = [{}];

const DevLog = () => {
  return (
    <Chrono
      items={[
        {
          title: "May 7, 2025",
          cardTitle: "Sixth and Final Progress Update",
          cardDetailedText: [
            "Welcome to the final Unfolded Dev Log!",
            "From the tech side, all of our menus have been fully implemented and finalized, including animations, updates to health bars, and implementing a few more UI elements such as “interact” and “controls”. New niagara systems have been implemented such as waterfalls, water, glow effects, and more. Lastly, the dialogue system has been fully implemented. The enemies have also been completed with their animations, attacks, and effects.",
            "On the art side, screens such as the main menu were illustrated, new enemy animations were completed, textures were adjusted, audio was implemented, and we now have a trailer! Our artists also completed the final presentation for the Unfolded beta release.",
            "The Beta release for this project has been created! Goodbye to IMGD 4000/4500.",
            "The breakdown of work for each team was as follows:",
            "---",
            "Tech:",
            "Lada implemented the main menu designed by quiqui and animated it, drew and implemented new Dialogue UI, implemented and animated a pause menu, created a cel shader for the game, created new footstep vfx, and implemented audio.",
            "Anu did a lot of tech art, including finalizing the Niagara System for the water, creating local volumetric fog, and a Niagara System based waterfall. She also wrote and implemented just under 100 lines of dialogue. The website was built and updated by her as well.",
            "Luca fully implemented the projectile system for the Gaga and Baby monster and implemented the animations for each enemy and added the health bar widget for both the player and the enemies.",
            "---",
            "Art:",
            "Kylie animated an attack animation for the demon enemy. She also found several mixamo animations for it as well as troubleshooting implementation of mixamo’s auto-rigged skeleton. Two stalagmite assets were implemented, major and accent lighting was tweaked, and materials for disappearing walls were placed and configured.",
            "Quiqui illustrated a title screen, animated the heart and made the trailer.",
            "Allison made adjustments to the Player and OoMP textures to better fit the lighting in-game. Allison also finished finding audio assets for the game. Allison rigged the heart enemy.",
          ],
        },
        {
          title: "April 29, 2025",
          cardTitle: "Fifth Progress Update",
          cardDetailedText: [
            "Now that playtesting was completed, we were able to update the level map that was broken before. We started over in a new .umap file and had one of our artists recreate the graybox while implementing the suggestions made to us in the playtesting forms. The environment was expanded and materials were added.",
            "Alongside the continued development of enemies, the tech team is also working on ironing out the game’s visual effects alongside the UI. This includes menus and credits alongside new fun visuals such as tentacles that react to the player.",
            "The art team is finalizing more environment and character details to tie the game together such as our player’s weapon and more assets for the environment. Additionally, rigs for other characters are being finished and audio implementation has begun.",
            "The breakdown of work for each team was as follows:",
            "---",
            "Tech:",
            "Lada added in a main menu level, created a pause menu, and created a temporary credits level along with continuing vfx.",
            "Anu started working with VFX and Niagara Systems in Engine. For this week, she implemented weird tentacle-like plants and decided on what effects would be added to the different environments to create the mood we were looking for. She started work on realistic water simulations and volumetric fog.",
            "Luca continued on working on projectiles and making a dash trail and UI elements to indicate player health.",
            "---",
            "Art:",
            "Kylie finished texturing Colin’s gun, rocks for the glow cave, as well as the staircase asset. The rerigged demon was also implemented into the engine with the intent of retargeting mixamo animations to it, but the retargeting had issues.",
            "Quiqui finished animating the 4 Baby animations. Quiqui also found and edited some audio for the boss fight.",
            "Allison finished the OoMP rig, textures, and a floating animation for when he appears in game. Allison also found audio assets for use in the game.",
          ],
        },
        {
          title: "April 22, 2025",
          cardTitle: "Fourth Progress Update: Prep for Playtesting Update",
          cardDetailedText: [
            "This week involved bug fixes and implementations in time for playtesting. The features that were included in the playtesting build are as follows:",
            "- Updated graybox",
            "- Wall-disappearing material added to some walls",
            "- All enemy variations have been implemented",
            "The art team has textured most assets.",
            "Our approach to designing playtesting questions was to create different categories and ask questions based on those categories. We chose to ask about general game experience, the gameplay mechanics, and the game experience. For more information on playtesting, head to the alpha page where you can check out the Playtesting Build and Playtesting Form.",
            "In terms of the playtesting build, we ran into an issue where the .umap file that holds the level we had been working does not properly update in between branches in GitHub. The workaround we are currently using involved us reverting to an older, unbroken save file and updating it with the most recent functionality to get a sufficient playtesting build.",
            "The breakdown of work for each team was as follows:",
            "---",
            "Tech:",
            "Lada made new projectile vfx to better match the game theme and added in new footstep shaders for the player.",
            "Anu made a variation of the wall-disappearing material that was “smoother” after receiving feedback that the existing material seemed too choppy. She also completed the dialogue system and hooked it up to objects in the level.",
            "Luca worked on implementing animations for enemies and a projectile system for the gaga and baby enemies as they are ranged enemies. They also added mechanics for the player to be damaged by enemies.",
            "---",
            "Art:",
            "Kylie finished texturing the demon enemy and creating a staircase asset. Final changes on collisions, especially for climbable objects, was also completed. The demon enemy was also rerigged due to earlier scaling issues.",
            "Quiqui finished texturing all his environmental assets.",
            "Allison imported updated textures for the baby enemy and imported environmental assets and textures for the baby room. The OoMP’s rig was also completed and textures are near complete.",
          ],
        },
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
