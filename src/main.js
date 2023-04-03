import TurndownService from 'turndown';

const generateObsidianUri = (title, content) => {
    if (!myVault || !dirToStore) {
        return;
    }

    const obsidianAdvancedUri = new URL('obsidian://advanced-uri');

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

    window.open(obsidianUri, '_blank');
};

main();
