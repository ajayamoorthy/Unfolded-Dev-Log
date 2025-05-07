import TeamCard from "../components/TeamCard";

const techTeam = [
  {
    name: "Ananya Jayamoorthy",
    pronouns: "she/her",
    role: "Programmer",
    imgSrc: "./imgs/4-small.png",
    pdfLink: "/assets/files/AnanyaJayamoorthyPortfolio.pdf",
    externalLink: "https://github.com/ajayamoorthy",
  },
  {
    name: "Lada DiMascolo",
    pronouns: "they/them",
    role: "Programmer",
    imgSrc: "./imgs/4-small.png",
    pdfLink: "/assets/files/Lada_Portfolio.pdf",
    externalLink: "https://ladadimascolo.carrd.co",
  },
  {
    name: "Luca Wol",
    pronouns: "they/them",
    role: "Programmer",
    imgSrc: "./imgs/4-small.png",
    externalLink: "https://github.com/m0renz0",
  },
];

const artTeam = [
  {
    name: "Allison Nguyen",
    pronouns: "she/her",
    role: "Artist",
    imgSrc: "./imgs/4-small.png",
    //externalLink: "https://portfolio.com/allison",
  },
  {
    name: "Kylie Beaudry",
    pronouns: "she/her",
    role: "Artist",
    imgSrc: "./imgs/4-small.png",
    externalLink: "https://kbeaudry3d.carrd.co/",
  },
  {
    name: "Quiqui Donahue",
    pronouns: "he/him",
    role: "Artist",
    imgSrc: "./imgs/4-small.png",
    //externalLink: "https://portfolio.com/quiqui",
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
            pdfLink={member.pdfLink}
            externalLink={member.externalLink}
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
            pdfLink={member.pdfLink}
            externalLink={member.externalLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
