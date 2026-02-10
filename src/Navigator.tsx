import { useEffect, useState } from 'react';
import Acceuil from './pages/Acceuil';
import Experiences from './pages/Experiences';
import Projets from './pages/Projets';

type PageId = 'acceuil' | 'formations' | 'competences' | 'experiences' | 'projets' | 'details'; // enum des pages autorisées
interface PageParams {
	id?: number;
}
interface NavigationState {
	currentPage: PageId;
	params: PageParams;
}

export interface PageProps {
	navigate: (newPage: PageId, newParams?: PageParams) => void;
	params: PageParams;
}

export default function Navigator() {
	const [{ currentPage, params }, setNavigationState] = useState<NavigationState>({
		currentPage: 'acceuil',
		params: {},
	});

	function navigate(newPage: PageId, newParams: PageParams = {}) {
		setNavigationState({ currentPage: newPage, params: newParams });
	}

	switch (currentPage) {
		case 'acceuil':
			return <Acceuil navigate={navigate} params={params} />;
		case 'formations':
			return <Acceuil navigate={navigate} params={params} />;
			//return <Formations navigate={navigate} params={params} />;
		case 'competences':
			return <Acceuil navigate={navigate} params={params} />;
			//return <Competences navigate={navigate} params={params} />;
		case 'experiences':
			return <Experiences navigate={navigate} params={params} />;
		case 'projets':
			return <Projets navigate={navigate} params={params} />;
		case 'details':
			return <Acceuil navigate={navigate} params={params} />;
			//return <Details navigate={navigate} params={params} />;
	}
	return null;
}