import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss';
import fg from 'fast-glob';

import path from 'path';

/**
 * Pega os arquivos que serão compilados
 *
 * @param {string} directory - pasta onde serão buscados
 * @param {Array<string>} extensions - extensões que serão buscadas
 * @param {Array<string>} exclude - arquivos que serão excluídos
 * @returns
 */
function getEntries(directory, extensions, exclude) {
    const entries = {};
    extensions = Array.isArray(extensions) ? extensions : [extensions];
    const files = fg.sync(`${directory}/**/*.+(${extensions.join('|')})`, {
        ignore: exclude
    });
    files.forEach((file) => {
        const staticPath = path.relative(directory, file);
        const entry = staticPath.replace(/\.(js|css)$/, '');

        if (exclude && exclude.includes(entry)) return;

        entries[entry] = path.resolve(__dirname, file);
    });
    return entries;
}

export default defineConfig({
    plugins: [
        laravel({
            input: getEntries('./resources', ['js', 'css']),
            refresh: true,
        }),
        tailwindcss('./tailwind.config.js')
    ],
});
