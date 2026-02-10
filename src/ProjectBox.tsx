import { Project } from './types';

interface Props {
	detail: Project;
	onClick: (id: number) => void;
}

export default function ProjectBox({
	detail: { id, title, image, description },
    onClick,
}: Props) {
	return (
        <a
            href={`./details/${id}`}
            onClick={event => {
                event.preventDefault();
                onClick(id);
            }}
            className="project-card"
        >
            <img src={"./assets/images/" + image} className="project-image"/>
            <div className="project-card-text-container">
                <div className="subheader-text project-title">{title}</div>
                <div className="body-text project-card-text">{description}</div>
            </div>
        </a>
	);
}