import { MdPalette, MdSettings } from 'react-icons/md'

import S from '@sanity/desk-tool/structure-builder'

const settings = S.list()
  .title('Paramètres')
  .items([
    S.listItem()
      .title('Générale')
      .icon(MdSettings)
      .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    S.listItem()
      .title('Thème')
      .icon(MdPalette)
      .child(S.document().schemaType('themeSettings').documentId('themeSettings')),
  ])

export default () =>
  S.list()
    .title('Content')
    .items([S.listItem().title('Paramètres').icon(MdSettings).child(settings)])
