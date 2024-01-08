import { useState } from 'react';

type CardsSectionsProps = {
  sectionOBJ: {
    imageUrl: string,
    altUrl: string,
    authorUrl: string,
    authorName: string,
    imageLink: string,
    section: string,
    pageToGo: string
  }
};

function CardsSections({ sectionOBJ }: CardsSectionsProps) {
  const [isHover, setIsHover] = useState(false);
  const { altUrl, authorName, authorUrl,
    imageLink, imageUrl, section, pageToGo } = sectionOBJ;

  return (
    <div className={ `${isHover && '-mb-8'}` }>
      <div>
        <img
          src={ imageUrl }
          alt={ altUrl }
          className={ `w-80 h-80 rounded ${isHover && 'opacity-50'} transition-all 
          ease-in-out duration-700` }
          onMouseEnter={ () => setIsHover(true) }
          onMouseLeave={ () => setIsHover(false) }
        />
      </div>
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

      {isHover && (
        <button
          onMouseEnter={ () => setIsHover(true) }
          className="text-xl relative bottom-44 text-black transition-all ease-in
          hover:underline hover:underline-offset-4 hover:text-purple_custom
          font-extrabold tracking-wide "
          data-aos="fade-up"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href={ pageToGo }
          >

            {section}
          </a>
        </button>
      )}
    </div>
  );
}

export default CardsSections;
