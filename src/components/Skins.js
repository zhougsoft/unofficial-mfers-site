import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import gnSartoshi from '../assets/images/gn.jpeg'
import skin_bull from '../assets/images/skin_bull.png'
import skin_bunny from '../assets/images/skin_bunny.png'
import skin_chicken from '../assets/images/skin_chicken.png'
import skin_dinosaur from '../assets/images/skin_dinosaur.png'
import skin_dragon from '../assets/images/skin_dragon.png'
import skin_kiki from '../assets/images/skin_kiki.png'
import skin_lizard_thing from '../assets/images/skin_lizard_thing.png'
import skin_lobster from '../assets/images/skin_lobster.png'
import skin_master_chan from '../assets/images/skin_master_chan.png'
import skin_mlee from '../assets/images/skin_mlee.png'
import skin_mtdew from '../assets/images/skin_mtdew.png'
import skin_pepe from '../assets/images/skin_pepe.png'
import skin_pickle_rick from '../assets/images/skin_pickle_rick.png'
import skin_power_ranger from '../assets/images/skin_power_ranger.png'
import skin_shark from '../assets/images/skin_shark.png'
import skin_tele_tubby1 from "../assets/images/skin_tele_tubby1.png"
import skin_tele_tubby2 from "../assets/images/skin_tele_tubby2.png"
import skin_tele_tubby3 from "../assets/images/skin_tele_tubby3.png"
import skin_tele_tubby4 from "../assets/images/skin_tele_tubby4.png"
import { createImgObject } from '../utils/utils'

const Skins = ({ handleSetImage, images }) => {
	const makeImgObjectAndHandleSetImage = async dataURL => {
		const imgObj = await createImgObject(images, dataURL, true)
		handleSetImage(imgObj)
	}

    const renderSkins = () => {
        const skins = [
					skin_bunny,
                    skin_bull,
					skin_chicken,
					skin_dinosaur,
					skin_dragon,
					skin_kiki,
					skin_lizard_thing,
					skin_lobster,
					skin_master_chan,
					skin_mlee,
					skin_mtdew,
					skin_pepe,
					skin_pickle_rick,
					skin_power_ranger,
					skin_shark,
					skin_tele_tubby1,
					skin_tele_tubby2,
					skin_tele_tubby3,
					skin_tele_tubby4,
				]
        
        return skins.map((skin) => {
            return (
                <Col
                    key={`${skin}`}
                    onClick={() => makeImgObjectAndHandleSetImage(skin)}
                >
                    <Card>
                        <Card.Img src={skin} />
                        <Card.Body>
                            <Card.Text>This mfer is the is cool as shit</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

	return (
		<Card.Body style={{"overflowY": "auto", height:"35vw"}}>
			<Card.Title>Skins (click to place on canvas)</Card.Title>
			<Row xs={1} md={2} className="g-4">
				{renderSkins()}
			</Row>
		</Card.Body>
	)
}

export default Skins
