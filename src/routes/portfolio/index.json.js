import { getProjects } from './_projects.js';

let contents;

export function get(req, res) {
    if (!contents || process.env.NODE_ENV !== 'production') {
        const projects = getProjects()
            .filter(post => !post.metadata.draft)
            .sort((a, b) => {
                const aPos = a.metadata.position || 0;
                const bPos = b.metadata.position || 0;
                return aPos - bPos;
            })
            .map(({ slug, metadata }) => ({ slug, metadata }));

        contents = JSON.stringify(projects);
    }

    const headers = { 'Content-Type': 'application/json' };
	res.writeHead(200, headers);
	res.end(contents);
}