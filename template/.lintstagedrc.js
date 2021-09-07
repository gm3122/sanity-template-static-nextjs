const micromatch = require('micromatch')
const prettier = require('prettier')
const _ = require('lodash')

const prettierLanguages = prettier.getSupportInfo().languages

const [prettierSupportedFilenames, prettierSupportedExtensions] = prettierLanguages
  .reduce(
    ([filenames, extensions], h) => [_.concat(filenames, h.filenames), _.concat(extensions, h.extensions)],
    [[], []],
  )
  .map((e) => e.filter(Boolean))

const addQuotes = (a) => `"${a}"`

module.exports = {
  '**/!(.env.*)': (filenames) => {
    const prettierFiles = micromatch(filenames, [
      ...prettierSupportedFilenames.map((filename) => `**/${filename}`),
      ...prettierSupportedExtensions.map((extension) => `**/*${extension}`),
      '**/.husky/*',
    ])
    const prettiers = prettierFiles.length > 0 ? [`prettier --write ${prettierFiles.map(addQuotes).join(' ')}`] : []

    return prettiers
  },
  '**/.env.*': (filenames) =>
    filenames.length > 0 ? [`prettier --write ${filenames.map(addQuotes).join(' ')} --parser sh`] : [],
  '**/package.json': 'sort-package-json',
}
