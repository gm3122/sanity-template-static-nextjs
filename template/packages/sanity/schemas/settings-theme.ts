export default {
  name: 'themeSettings',
  title: 'Paramètres du thème',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'primaryColor',
      title: 'Couleur principale',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondaryColor',
      title: 'Couleur secondaire',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundColor',
      title: "Couleur d'arrière-plan",
      type: 'color',
      options: {
        disableAlpha: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backdropColor',
      title: "Couleur d'arrière-plan de la boîte de dialogue",
      type: 'color',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Thème',
      }
    },
  },
}
