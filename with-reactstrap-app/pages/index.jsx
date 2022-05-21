import Head from 'next/head'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
} from 'reactstrap'

export default function Home() {
  return (
    <div class = "bg-pink">
    <Container className="md-container">
      
      <Head>
        <title>Cocoon</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container >
        <img src="/SVG/cocoon-text-center-01.png" class="center"/>
        <img src="/SVG/subtext-centered-01.png" class="center"/>
        <Container className="sm-container">
          <Row class="center-text-white" >

            
            <h5 class = "text-white">the future of communities</h5>
            <p class = "text-white">launching at activate miami</p>
            <Container className="sm-container"></Container>
            <Button color="primary" href="https://twitter.com/CocoonProtocol">
                    Stay in touch &rarr;
                  </Button>
            
          </Row>

        </Container>

        <Container className="bg-container"></Container>


      </Container>

      <footer className="cntr-footer">
        <a
          href="https://twitter.com/blu3dao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/blu3daologo.png" alt="Blu3 Dao Logo" className="sml-logo" />
        </a>
      </footer>
    </Container>
    </div>
  )
}
