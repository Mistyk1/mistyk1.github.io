import { PageProps } from '../Navigator'; // Dépendance croisée, à éviter
import ProjectBox from '../ProjectBox';
import { projets } from '../data';

export default function Experiences({ navigate }: PageProps) {
	function handleThumbnailClick(id: number) {
		navigate('details', { id });
	}

	return (
		<div id="main-content">
			<div id="my-work-section">
				<span className="subheader-text">Mes projets</span>
				<div className="projects-container">
					{projets.map(exp => (
						<ProjectBox onClick={handleThumbnailClick} detail={exp} key={exp.id} />
					))}
				</div>
			</div>
		</div>
	);
}