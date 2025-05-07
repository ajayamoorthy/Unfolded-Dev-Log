import React, { useState } from "react";

const images = [
  {
    id: "1",
    src: "./imgs/allison/nursery_props_concept.png",
    person: "allison",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "2",
    src: "./imgs/quiqui/colin_concept.png",
    person: "quiqui",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "3",
    src: "./imgs/quiqui/creepy_baby_concept.png",
    person: "quiqui",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "4",
    src: "./imgs/quiqui/gaga_concept.png",
    person: "quiqui",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "5",
    src: "./imgs/quiqui/mr_oomp_concept.png",
    person: "quiqui",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "6",
    src: "./imgs/quiqui/slime_concept.jpg",
    person: "quiqui",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "7",
    src: "./imgs/kylie/glow_cave_concept.jpg",
    person: "kylie",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "8",
    src: "./imgs/kylie/maps_concepts.jpg",
    person: "kylie",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "9",
    src: "./imgs/quiqui/env_assets_disp.png",
    person: "quiqui",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "10",
    src: "./imgs/quiqui/heart_enemy_disp1.png",
    person: "quiqui",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "11",
    src: "./imgs/quiqui/heart_enemy_disp2.png",
    person: "quiqui",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "12",
    src: "./imgs/kylie/gaga_turnaround_render.jpg",
    person: "kylie",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "13",
    src: "./imgs/kylie/gaga_topdown.jpg",
    person: "kylie",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "14",
    src: "./imgs/kylie/glicky.jpg",
    person: "kylie",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "15",
    src: "./imgs/kylie/rocks_assets.jpg",
    person: "kylie",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "16",
    src: "./imgs/kylie/tex_modular.jpg",
    person: "kylie",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "17",
    src: "./imgs/kylie/untex_modular.jpg",
    person: "kylie",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "18",
    src: "./imgs/allison/Baby_Back.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "19",
    src: "./imgs/allison/Baby_Front.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "20",
    src: "./imgs/allison/Baby_Side.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "21",
    src: "./imgs/allison/Baby_TopDown.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "22",
    src: "./imgs/allison/Player_Back.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "23",
    src: "./imgs/allison/Player_Front.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "24",
    src: "./imgs/allison/Player_Side.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "25",
    src: "./imgs/allison/Player_TopDown.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "26",
    src: "./imgs/allison/mr_oomp_turnaround.png",
    person: "allison",
    team: "art",
    sprint: "alpha",
  },
  {
    id: "27",
    src: "./imgs/kylie/graybox.png",
    person: "kylie",
    team: "art",
    sprint: "concept art",
  },
  {
    id: "28",
    src: "./imgs/quiqui/menu_art.png",
    person: "quiqui",
    team: "art",
    sprint: "beta",
  },
  {
    id: "29",
    src: "./imgs/quiqui/updatedHeart1.jpg",
    person: "quiqui",
    team: "art",
    sprint: "beta",
  },
  {
    id: "30",
    src: "./imgs/quiqui/updatedHeart1.jpg",
    person: "quiqui",
    team: "art",
    sprint: "beta",
  },
  {
    id: "31",
    src: "./imgs/allison/colin_halfturn.gif",
    person: "allison",
    team: "art",
    sprint: "beta",
  },
  {
    id: "32",
    src: "./imgs/allison/oomp_halfturn.gif",
    person: "allison",
    team: "art",
    sprint: "beta",
  },
  {
    id: "33",
    src: "./imgs/allison/baby_halfturn.gif",
    person: "allison",
    team: "art",
    sprint: "beta",
  },
];

export default function Art() {
  const [personFilter, setPersonFilter] = useState(null);
  const [teamFilter, setTeamFilter] = useState(null);
  const [sprintFilter, setSprintFilter] = useState(null);

  const filteredImages = images.filter((img) => {
    return (
      (!personFilter || img.person === personFilter) &&
      (!teamFilter || img.team === teamFilter) &&
      (!sprintFilter || img.sprint === sprintFilter)
    );
  });

  const uniquePeople = [...new Set(images.map((img) => img.person))];
  const uniqueTeams = [...new Set(images.map((img) => img.team))];
  const uniqueSprints = [...new Set(images.map((img) => img.sprint))];

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <select
          className="p-2 border rounded"
          value={personFilter ?? ""}
          onChange={(e) => setPersonFilter(e.target.value || null)}
        >
          <option value="">All People</option>
          {uniquePeople.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={teamFilter ?? ""}
          onChange={(e) => setTeamFilter(e.target.value || null)}
        >
          <option value="">All Teams</option>
          {uniqueTeams.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={sprintFilter ?? ""}
          onChange={(e) => setSprintFilter(e.target.value || null)}
        >
          <option value="">All Sprints</option>
          {uniqueSprints.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}

/* const Art = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">Art Page</h1>
      <p>Under Construction!</p>
      <img
        src="./imgs/warningsign.png"
        alt="Warning Sign"
        className="mx-auto w-1/3 max-w-[200px] h-auto"
      ></img>
    </div>
  );
};

export default Art; */
