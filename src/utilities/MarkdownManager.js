import marked from 'marked';

export default function MarkdownManager() {
    this.parseMarkdown = function parseMarkdown(markdown) {
        const match = /---\n([\s\S]+?)\n---/.exec(markdown);
        const content = markdown.slice(match[0].length);
        const frontMatter = match[1];
        const metadata = {};

        frontMatter.split('\n')
            .forEach(pair => {
                const colonIndex = pair.indexOf(':');
                const key = pair.slice(0, colonIndex).trim();
                const value = pair.slice(colonIndex + 1).trim();
                metadata[key] = value;
            });

        return Object.freeze({ metadata, content });
    }

    this.render = function render(markdown) {
        return marked(markdown);
    }
}