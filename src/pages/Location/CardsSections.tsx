type CardsSectionsProps = {
  sectionOBJ: {
    imageUrl: string,
    altUrl: string,
    authorUrl: string,
    authorName: string,
    imageLink: string,
    section: string
  }
};

function CardsSections({ sectionOBJ }: CardsSectionsProps) {
  const { altUrl, authorName, authorUrl,
    imageLink, imageUrl, section } = sectionOBJ;

  return (
    <div>

      <img
        src={ imageUrl }
        alt={ altUrl }
        className="w-60 "
      />
      <div className="text-[10px] text-left">
        Foto de
        {' '}
        <a
          href={ authorUrl }
          target="_blank"
          rel="noreferrer"
          className="text-yellow_custon"
        >
          {authorName}
        </a>
        {' '}
        na
        {' '}
        <a
          href={ imageLink }
          target="_blank"
          rel="noreferrer"
          className="text-yellow_custon"
        >
          Unsplash
        </a>
      </div>
      <h3
        className="text-2xl text-purple_custom underline underline-offset-4"
      >
        {section}
      </h3>
    </div>
  );
}

export default CardsSections;
