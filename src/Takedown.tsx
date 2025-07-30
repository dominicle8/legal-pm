import { Image, Card, Col, Container, Row} from 'react-bootstrap';
import DocumentIcon from './static/images/document_color.svg'
import SendIcon from './static/images/send_color.svg'
import CheckmarkCircle from './static/images/checkmark_circle_color.svg'

function Takedown() {
	return (
		<Container fluid className="content-container">
			<div style={{ background: "#fcfcfc"}}>
				<Row className="pt-5 pb-5 gy-3 narrow">
					<iframe height={"900px"} src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__ghHIfpUNDlNSDRQTFo3R0xaS05UQklKNjhVVjJGUC4u&embed=true" style={{border: "none", maxWidth: "100%", maxHeight: "100vh" }} allowFullScreen> </iframe>
				</Row>
			</div>
			<div style={{ background: "#f1f3f6"}}>
				<Row className="pt-5 pb-5 gy-3 narrow justify-content-center"  style={{maxWidth: "900px"}}>
					<Col md={12} className="text-center pb-4">
						<h1 style={{color: "#2b303b"}}>What Happens Next?</h1>
					</Col>
					<Col md={4} className="text-center">
						<Card style={{height: "100%"}}>
							<Card.Body className="m-2">
								<Image className='rounded feature-logo' src={DocumentIcon} style={{fill: "#38486e"}}></Image>
								<Card.Title style={{fontFamily:'Inter', fontWeight: "normal"}}>Review & Verification</Card.Title>
								<Card.Text>
									Our legal team reviews your submission for completeness and accuracy within 2 hours.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="text-center">
						<Card style={{height: "100%"}}>
							<Card.Body className="m-2">
								<Image className='rounded feature-logo' src={SendIcon} style={{fill: "#38486e"}}></Image>
								<Card.Title style={{fontFamily:'Inter', fontWeight: "normal"}}>Notice Delivery</Card.Title>
								<Card.Text>
									We send the formal DMCA takedown notice to the platform and content host.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="text-center">
						<Card style={{height: "100%"}}>
							<Card.Body className="m-2">
								<Image className='rounded feature-logo' src={CheckmarkCircle} style={{fill: "#38486e"}}></Image>
								<Card.Title style={{fontFamily:'Inter', fontWeight: "normal"}}>Content Removal</Card.Title>
								<Card.Text>
									Most platforms remove infringing content within 24-48 hours of receiving our notice.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Takedown;