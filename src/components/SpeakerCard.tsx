type SpeakerCardProps = {
  speaker: {
    id: number,
    firstName: string,
    lastName: string,
    avatar: string,
    currentAge: number
  }
};

function SpeakerCard({ speaker }: SpeakerCardProps) {
  const { avatar, currentAge, firstName, lastName } = speaker;

  return (
    <div
      className=" flex flex-col items-center gap-4"
      data-aos="fade-right"
      data-aos-once="true"
    >
      <img
        src={ avatar }
        alt={ `${firstName} ${lastName}` }
        className="h-44 rounded-full"
      />
      <div className="text-xl">
        <span>
          {lastName}
          ,
          {' '}
          {firstName}
        </span>
        {' '}
        <p className="text-sm">{currentAge}</p>
      </div>
    </div>
  );
}

export default SpeakerCard;
