import { Col, Container, Row } from 'react-bootstrap';

function Holding() {
	return (
		<Container fluid className="content-container">
			<div style={{ background: "#f1f3f6"}}>
				<Row className="pt-5 pb-5 gy-3 narrow" style={{minHeight: "800px"}}>
					<Col lg={12}>
						<h1 style={{color: "#2b303b"}}>Check Back Later</h1>
						<p>We appreciate your interest in our product. Please check back at a later time.</p>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Holding;