import React, { useState } from "react";

const images = [
  {
    id: "1",
    src: "./imgs/allison/nursery_props_concept.png",
    person: "allison",
    team: "art",
  },
  {
    id: "2",
    src: "./imgs/quiqui/colin_concept.png",
    person: "quiqui",
    team: "art",
  },
  {
    id: "3",
    src: "./imgs/quiqui/creepy_baby_concept.png",
    person: "quiqui",
    team: "art",
  },
  {
    id: "4",
    src: "./imgs/quiqui/gaga_concept.png",
    person: "quiqui",
    team: "art",
  },
  {
    id: "5",
    src: "./imgs/quiqui/mr_oomp_concept.png",
    person: "quiqui",
    team: "art",
  },
  {
    id: "6",
    src: "./imgs/kylie/glow_cave_concept.jpg",
    person: "kylie",
    team: "art",
  },
  {
    id: "7",
    src: "./imgs/kylie/maps_concept.jpg",
    person: "kylie",
    team: "art",
  },
];

export default function Art() {
  const [personFilter, setPersonFilter] = useState(null);
  const [teamFilter, setTeamFilter] = useState(null);

  const filteredImages = images.filter((img) => {
    return (
      (!personFilter || img.person === personFilter) &&
      (!teamFilter || img.team === teamFilter)
    );
  });

  const uniquePeople = [...new Set(images.map((img) => img.person))];
  const uniqueTeams = [...new Set(images.map((img) => img.team))];

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
