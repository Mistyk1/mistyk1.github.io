interface Props {
	page: string;
	link: 'acceuil' | 'formations' | 'competences' | 'experiences' | 'projets' | 'details';
	onClick: (page: 'acceuil' | 'formations' | 'competences' | 'experiences' | 'projets' | 'details') => void;
}

export default function LinkArrow({
	page,
	link,
    onClick,
}: Props) {
	return (
        <a
            href={`./formations`}
            onClick={event => {
                event.preventDefault();
                onClick(link);
            }}
            className="button"
        >
            <span className="button-text">{page}</span>
            <img src="./assets/icons/arrow-right.svg" className="right-arrow-icon"/>
        </a>
	);
}