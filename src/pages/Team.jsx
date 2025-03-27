import TeamCard from "../components/TeamCard";

const techTeam = [
  {
    name: "Ananya Jayamoorthy",
    pronouns: "she/her",
    role: "Programmer",
    imgSrc: "./src/assets/4-small.png",
    skills: ["skill", "skill", "skill"],
  },
  {
    name: "Lada DiMascolo",
    pronouns: "they/them",
    role: "Programmer",
    imgSrc: "./src/assets/4-small.png",
    skills: ["skill", "skill", "skill"],
  },
  {
    name: "Luca Wol",
    pronouns: "they/them",
    role: "Programmer",
    imgSrc: "./src/assets/4-small.png",
    skills: ["skill", "skill", "skill"],
  },
];

const artTeam = [
  {
    name: "Allison Nguyen",
    pronouns: "she/her",
    role: "Artist",
    imgSrc: "./src/assets/4-small.png",
    skills: ["skill", "skill", "skill"],
  },
  {
    name: "Kylie Beaudry",
    pronouns: "she/her",
    role: "Artist",
    imgSrc: "./src/assets/4-small.png",
    skills: ["skill", "skill", "skill"],
  },
  {
    name: "Quiqui Donahue",
    pronouns: "he/him",
    role: "Artist",
    imgSrc: "./src/assets/4-small.png",
    skills: ["skill", "skill", "skill"],
  },
];

const Team = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">Team Page</h1>
      <p className="text-2xl py-6">Tech Team</p>

      <div className="flex flex-wrap justify-center">
        {techTeam.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            pronouns={member.pronouns}
            role={member.role}
            imgSrc={member.imgSrc}
            skills={member.skills}
          />
        ))}
      </div>

      <p className="text-2xl py-6">Art Team</p>
      <div className="flex flex-wrap justify-center">
        {artTeam.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            pronouns={member.pronouns}
            role={member.role}
            imgSrc={member.imgSrc}
            skills={member.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
