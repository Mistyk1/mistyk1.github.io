interface Project {
	id: number,
	title: string;
	image: string;
	links: Link[];
	description: string;
	details: string[];
}

interface Link {
    text: string;
    link: string;
}

export type { Project, Link }