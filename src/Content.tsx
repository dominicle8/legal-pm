import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap';
import CheckmarkShield from './static/images/checkmark_shield.svg'
import Handshake from './static/images/handshake.svg'
import Office from './static/images/office.svg'
import Copyright from './static/images/copyright.svg'
import { LinkContainer } from 'react-router-bootstrap';

function Content() {
	return (
		<Container fluid className="content-container">
			<div style={{ background: "#f1f3f6"}}>
				<Row className="pt-5 pb-5 gy-3 narrow">
						<Col lg={12} className="text-center">
							<h1 style={{color: "#2b303b"}}>Protect Your Creative Work with Professional Legal Tools</h1>
						</Col>
						<Col lg={12} className="text-center p-3" style={{maxWidth: "900px", margin: "auto"}}>
							<h5 style={{ fontFamily: "sans-serif", color: "#626c84"}}>LegalTool Creator empowers content creators with accessible, professional-grade legal protection. From DMCA takedown notices to business formation, we make legal protection straightforward and affordable.</h5>
						</Col>
						<Col lg={12} className="text-center">
							<LinkContainer to="/dmca-takedown" style={{ fontWeight: "600", fontSize: "18px"}}>
								<Button type="submit" className="p-3">Start DMCA Protection Now</Button>
							</LinkContainer>
						</Col>
						<Col lg={12} className="text-center">
							<p style={{ color:'#626c84', fontSize: "14px"}}>Get your content protected in under 5 minutes</p>
						</Col>
				</Row>
			</div>

			<Row className="pt-5 pb-5 gy-5 narrow">
				<Col lg={12} className="text-center">
					<h2 style={{color: "#2b303b"}}>Complete Legal Protection Suite</h2>
					<h5 style={{ fontFamily: "sans-serif", color: "#626c84"}}>Everything you need to protect and grow your creative business, all in one professional platform</h5>
				</Col>
				<Col md={6}>
					<Card style={{height: "100%"}}>
						<Card.Body className="m-2">
							<Image className='rounded d-block mb-4 feature-logo' src={CheckmarkShield} style={{background: "#38486e"}}></Image>
							<Card.Title>DMCA Takedown Service</Card.Title>
							<Card.Text>
								Quickly remove stolen content from major platforms like YouTube, TikTok, and Instagram with our streamlined takedown notice system. Professional legal formatting ensures maximum effectiveness.
							</Card.Text>
							<LinkContainer to="/dmca-takedown">
								<Button variant="outline-dark" className='card-button'>Get Started</Button>
							</LinkContainer>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card style={{height: "100%"}}>
						<Card.Body className="m-2">
							<Image className='rounded d-block mb-4 feature-logo' src={Handshake} style={{background: "#1e7dfa"}}></Image>
							<Card.Title>Brand Deal Contracts</Card.Title>
							<Card.Text>
								Generate professional sponsorship and collaboration agreements that protect your interests. Ensure fair payment terms and clear deliverables for every partnership.
							</Card.Text>
							<LinkContainer to="/brand-contracts">
								<Button variant="outline-dark" className='card-button'>Get Started</Button>
							</LinkContainer>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card style={{height: "100%"}}>
						<Card.Body className="m-2">
							<Image className='rounded d-block mb-4 feature-logo' src={Copyright} style={{background: "#2dab5b"}}></Image>
							<Card.Title>Copyright Checker</Card.Title>
							<Card.Text>
								Scan the web to find unauthorized use of your content across platforms. Get detailed reports and take immediate action to protect your intellectual property rights.
							</Card.Text>
							<LinkContainer to="/copyright">
								<Button variant="outline-dark" className='card-button'>Get Started</Button>
							</LinkContainer>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card style={{height: "100%"}}>
						<Card.Body className="m-2">
							<Image className='rounded d-block mb-4 feature-logo' src={Office} style={{background: "#f6a822"}}></Image>
							<Card.Title>1-Step LLC Wizard</Card.Title>
							<Card.Text>
								Form your business entity in minutes with our guided setup process. Protect your personal assets and establish credibility with brands and clients.
							</Card.Text>
							<LinkContainer to="/llc-setup">
								<Button variant="outline-dark" className='card-button'>Get Started</Button>
							</LinkContainer>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			
			<div style={{ background: "#f1f3f6"}}>
				<Row className="pt-5 pb-5 gy-3 narrow">
						<Col lg={12} className="text-center">
							<h1 style={{color: "#2b303b"}}>Trusted by Content Creators Worldwide</h1>
						</Col>
						<Col lg={4} className="text-center p-3">
							<h1 style={{color: "#2b303b"}}>10,000+</h1>
							<p style={{color: "#626c84"}}>Successful Takedowns</p>
						</Col>
						<Col lg={4} className="text-center p-3">
							<h1 style={{color: "#2b303b"}}>5,000+</h1>
							<p style={{color: "#626c84"}}>Protected Creators</p>
						</Col>
						<Col lg={4} className="text-center p-3">
							<h1 style={{color: "#2b303b"}}>98%</h1>
							<p style={{color: "#626c84"}}>Success Rate</p>
						</Col>
						<Col lg={12} className="text-center p-3" style={{maxWidth: "900px", margin: "auto"}}>
							<h5 style={{ fontFamily: "sans-serif", color: "#626c84"}}>Join thousands of creators who have successfully protected their content and grown their businesses with professional legal tools.</h5>
						</Col>
						<Col lg={12} className="text-center">
							<LinkContainer to="/dmca-takedown" style={{ fontWeight: "600", fontSize: "18px"}}>
								<Button type="submit" className="p-3" style={{ fontWeight: "600", fontSize: "18px"}} >Protect Your Content Today</Button>
							</LinkContainer>
						</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Content;