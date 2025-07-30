import React, { useState} from 'react';
import plus from '../static/images/plus.svg';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Image, Form, Card} from 'react-bootstrap';

interface TeamMemberProps {
	name: string;
	title: string;
	description: string;
}

function TeamMemberCard({name, title, description}: TeamMemberProps) {
	return (
		<Col md={4} className="p-3">
			<div style={{width: "100%", backgroundColor:"white"}} className="ratio ratio-1x1 darken-hover">
					<div style={{color:"black"}} className="d-flex justify-content-center align-items-center feature-container">
						<div className="text-center">
							<h3 style={{}} className="display-6"><b>{name}</b></h3>
							<p style={{}} className="lead">{description}</p>
						</div>
					</div>
			</div>
		</Col>
	);
}

export default TeamMemberCard;