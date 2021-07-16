export default {
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: '3',
      description: 'Décrivez votre site web pour les moteurs de recherche et les réseaux sociaux.',
    },
    {
      name: 'keywords',
      title: 'Mots clés',
      type: 'array',
      description: 'Ajoutez des mots-clés pour les moteurs de recherche qui décrivent votre site Web.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'author',
      title: 'Auteur du site',
      type: 'string',
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'width',
          title: 'Taille du logo',
          type: 'number',
          description: 'Taille en pixel',
        },
      ],
    },
    {
      name: 'siteUrl',
      title: 'URL du site',
      type: 'url',
      description: "L'adresse racine du site, ex: https://www.google.com/",
    },
  ],
}
