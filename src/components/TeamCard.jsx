const TeamCard = ({ name, pronouns, role, imgSrc, pdfLink, externalLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-500 p-6 m-4 text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full border-4 border-white object-cover"
        src={imgSrc}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-white text-base mb-1">{pronouns}</p>
        <p className="text-white text-base">{role}</p>
      </div>
      <div className="px-6 pt-4 flex justify-center gap-4 flex-wrap">
        {externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 font-semibold py-2 px-4 rounded shadow hover:bg-purple-100 transition"
          >
            More Info
          </a>
        )}
        {pdfLink && (
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 font-semibold py-2 px-4 rounded shadow hover:bg-purple-100 transition"
          >
            Portfolio PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
