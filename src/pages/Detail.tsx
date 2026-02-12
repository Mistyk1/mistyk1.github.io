import { Project } from '../types';

interface Props {
	detail: Project;
}

export default function Detail({
	detail: { title, image, links, description, details },
}: Props) {
    let linkHTML
    if (links.length > 0) {
        let linkText: any // Mauvais, à changer
        let idx = 0
        {links.map(linkObj => {
            let littleText
            if (idx == links.length) {
                littleText = (<p>et </p>)
            }
            else if (idx > 0) {
                littleText = (<p>, </p>)
            }
            linkText = linkText + (<p>{littleText}<a href={linkObj.link}>{linkObj.text}</a></p>)
            idx += 1
        })}
        linkHTML = <div className="subheader-text">Lien vers {linkText}</div>
    }

    let detailsHTML
    if (details.length > 0) (
        detailsHTML =
            <div id="project-details">
                <div className="subheader-text">Détails</div>
                <div className="project-details-content">
                {details.map(text => (
                    <div className="body-text">{text}</div>
                ))}
                </div>
            </div>
    )

	return (
        <div id="main-content">
            <div id="project-header">
                <div className="main-title">{title}</div>
                {linkHTML}
                <div className="body-text">{description}</div>
                <img className="project-header-image" src={"../assets/images/" + image}/>
            </div>

            {detailsHTML}
        </div>
	);
}