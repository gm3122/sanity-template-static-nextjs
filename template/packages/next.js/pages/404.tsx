import { GetStaticPropsContext } from 'next'
import Link from 'core/Link'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

// force static generation despite the presence of getInitialProps in _app
export const getStaticProps = async (_context: GetStaticPropsContext) => {
  return { props: {} }
}

function NotFoundPage(): JSX.Element {
  return (
    <Container>
      <h1>Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link aria-label="Page d'accueil" href="/">
        <Button>Retour sur la page d'accueil</Button>
      </Link>
    </Container>
  )
}

export default NotFoundPage
