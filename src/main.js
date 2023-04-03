import TurndownService from 'turndown';

const generateObsidianUri = (title, content) => {
    const obsidianAdvancedUri = new URL('obsidian://advanced-uri');

    if (!myVault || !dirToStore) {
        window.location.href = obsidianAdvancedUri.toString();
        return null;
    }

    const fileName = `${title.replace(/\r?\n/g, '')}.md`;

    const params = {
        vault: myVault,
        filepath: `${dirToStore}/${fileName}`,
        data: content,
    };

    obsidianAdvancedUri.search = new URLSearchParams(params).toString();

    return obsidianAdvancedUri;
};

const main = () => {
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(document.body);

    const title = document.title;

    const obsidianUri = generateObsidianUri(title, markdown);

    window.location.href = obsidianUri.toString();
};

export const jsResult = main();
