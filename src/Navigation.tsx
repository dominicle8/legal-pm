import { Image, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { type MouseEvent, useEffect, useState } from 'react';
import LegalLogo from './static/images/legal_logo.png'

function Navigation() {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const showDropdown = () => {
		setShow(true);
	}
	const hideDropdown = () => {
		setShow(false);
	}

	const onClick = (ev : MouseEvent<HTMLElement>) => {
		console.log("click")
		let element = ev.target as HTMLElement;
		if(element.id === "basic-nav-dropdown"){
			navigate('/#pillars');
		}
		if(!isMobile){
			setShow(false);
		} else {
		}
	}
	const forceNavigation = () => {
		navigate('/#team');
	}

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
	
	const handleResize = () => {
		if (window.innerWidth < 768) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	return (
		<Navbar collapseOnSelect expand="md" className='ps-3 pe-3 primary-bg navbar-dark' style={{zIndex: "9000"}}>
			<Nav className="me-auto d-flex flex-row d-md-none">
				<LinkContainer to="/" style={{margin:0}}>
					<Navbar.Brand className="navbar-brand">
						<Image src={LegalLogo} style={{width: 40}}></Image>
					</Navbar.Brand>
				</LinkContainer>
				<LinkContainer to="/">
					<Nav.Link href="/" className="navbar-header" style={{ fontFamily: "Merriweather"}} >
						LegalTool Creator
					</Nav.Link>
				</LinkContainer>
			</Nav>
			<Navbar.Toggle className="" aria-controls="navbar-nav" />
			<Navbar.Offcanvas id="navbar-nav" placement="end">
				<Offcanvas.Header closeButton className="pb-0">
					<Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
						LegalTool Creator
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body style={{}} className="">
					<Nav className="me-auto d-none d-md-flex flex-row">
						<LinkContainer to="/" style={{margin:0}}>
							<Navbar.Brand className="navbar-brand">
								<Image src={LegalLogo} style={{width: 60}}></Image>
							</Navbar.Brand>
						</LinkContainer>
						<LinkContainer to="/" className="">
							<Nav.Link className="navbar-header" style={{ fontFamily: "Merriweather"}}>
								LegalTool Creator
							</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav className="ma-auto">
						<Link className='navbar-item-padding navbar-hover navbar-hover nav-link' to="/#team" onClick={forceNavigation}>Our Team</Link>
						<Nav.Link href="#feedback" className="navbar-hover">Your Thoughts</Nav.Link>
					</Nav>
				</Offcanvas.Body>

			</Navbar.Offcanvas>
		</Navbar>
	);
}

export default Navigation;