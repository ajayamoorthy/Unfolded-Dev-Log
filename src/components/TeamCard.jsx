const TeamCard = ({ name, pronouns, role, imgSrc, skills }) => {
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
      <div className="px-6 pt-1 pb-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
