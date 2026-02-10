import { PageProps } from '../Navigator'; // Dépendance croisée, à éviter
import LinkArrow from '../LinkArrow';

export default function Acceuil({ navigate }: PageProps) {
	function handleArrowClick(page: 'acceuil' | 'formations' | 'competences' | 'experiences' | 'projets' | 'details') {
		navigate(page);
	}

	return (
		<div id="main-content">
            <div id="portfolio-header">
                <div id="portfolio-header-image-container">
                    <img src="./assets/images/moi.jpg" className="portfolio-header-image"/>
                </div>
                <div id="portfolio-header-text-container">
                    <div className="header-text">
                        <span className="main-title">Je suis Maxime Blot</span>
                        <div className="body-text">Je suis un étudiant en 3ème année de BUT informatique souhaitant devenir développeur dans le domaine du jeu-vidéo.</div>
                    </div>
                    <LinkArrow onClick={handleArrowClick} page='Formation' link='formations'/>
                    <LinkArrow onClick={handleArrowClick} page='Compétences' link='competences'/>
                    <LinkArrow onClick={handleArrowClick} page='Expériences' link='experiences'/>
                    <LinkArrow onClick={handleArrowClick} page='Projets' link='projets'/>
                </div>
            </div>

            <div id="about-section">
                <span className="subheader-text">À propos de moi</span>
                <div className="about-section-content">
                <div className="body-text">La passion pour l'informatique m'est venue dès ma jeunesse, lorsque j'ai découvert les jeux vidéo. Ils m'ont inspiré à vouloir en créer moi-même et à en faire une grande partie de ma vie. Depuis lors, j'ai tout fait pour me rapprocher de cet objectif.</div>
                <div className="body-text">J'ai appris les bases du développement avec Scratch, un logiciel de développement en ligne fonctionnant avec des briques représentant des bouts de code qu'on peut assembler pour créer un algorithme. Ensuite, j'ai réellement commencé à m'intéresser à l'informatique au lycée avec Python, puis j'ai continué à apprendre de nouveaux langages après le lycée.</div>
                <div className="body-text">J'ai d'abords appris le Java ainsi que l'HTML/CSS et le C durant ma première année de BUT, puis j'ai ensuite appris le Javascript et le C# avec ma deuxième année, enfin j'ai appris le Lua grâce à un projet personnel.</div>
                </div>
            </div>
        </div>
	);
}