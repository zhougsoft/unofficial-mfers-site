import React from "react"
import { Chrono } from "react-chrono";
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import { Container, Row, Col } from 'react-bootstrap'
import svgDiscord from '../assets/svg/discord-logo.svg'
import svgTwitter from '../assets/svg/twitter-logo.svg'
import svgOpensea from '../assets/svg/opensea-logo.svg'

  const Timeline = () => {
    const items = [
			{
				title: 'November 29, 2021',
				cardTitle: 'Contract Deployed',
				url: 'https://etherscan.io/address/0x79fcdef22feed20eddacbb2587640e45491b757f',
				cardDetailedText:
					'mfers contract deployed on the blockchain (block 13711155) by sartoshi',
				media: {
					name: 'dunkirk beach',
					source: {
						url: '/mfers_contract.png',
					},
					type: 'IMAGE',
				},
			},
			{
				title: 'november 30 2021',
				cardTitle: 'mint website https://mfers.art/ goes live',
				url: 'https://mfers.art/',
				cardDetailedText:
					'mfers public mint website https://mfers.art/ goes live with a total supply of 10021 (10000 mfers and 21 1of1s) at 4:20 pm with a mint price of 0.069 ETH',
				media: {
					name: 'mfers mint website',
					source: {
						url: '/mfers_mint_website.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'december 2 2021',
				url: 'https://discord.com/invite/unofficialmfers',
				cardTitle: 'The first derivative',
				cardDetailedText: '3dmfers are deployed by @scott_visual ',
				media: {
					name: '3d mfers',
					source: {
						url: '/3d_mfers.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'december 6 2021',
				cardTitle: 'a discord is born',
				url: 'https://discord.com/invite/unofficialmfers',
				cardDetailedText:
					'since there’s no roadmap or team behind, a group of mfers decide to start the unofficial official mfers discord',
				media: {
					name: 'mfers discord',
					source: {
						url: '/mfers_discord.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'january 5 2022',
				cardTitle: 'mfer aheads are deployed',
				url: 'https://twitter.com/MfersAhead',
				cardDetailedText:
					'mfers aheads, a derivative, are deployed by @Metabananas: the first piece is an ahead version of sartoshi_nft pfp, Metabananas continued to drop new aheads till reach 420 supply',
				media: {
					name: 'mfers ahead',
					source: {
						url: '/mfer_aheads.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'january 13 2022',
				cardTitle: 'the first mfer tatoo',
				url: 'https://twitter.com/the_imp0ster/status/1481473560564621312?t=RMvl4IgKix-Tnt4TUJnzqg&s=19',
				cardDetailedText:
					'@the_imp0ster gets an mfer tattoo (yeah, for real and has been recorded) : the video is auctioned on OpenSea to start the mfers treasury',
				media: {
					name: 'mfers tattoo tweet',
					source: {
						url: '/mfer_tattoo_tweet.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'january 20 2022',
				cardTitle: 'mfer tattoo video is purchased',
				url: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/989481343262162135973625137984185442493747395212978838963474744702392074241',
				cardDetailedText:
					'The above mentioned video is purchased by sartoshi for 3.069 ETH: The unofficial treasury is started',
				media: {
					name: 'mfers tattoo nft',
					source: {
						url: '/mfer_tattoo_video_nft.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'february 14 2022',
				cardTitle: 'mfers in timesquare',
				url: 'https://twitter.com/ag0ld_/status/1494737217318760448',
				cardDetailedText: 'mfers make it on a billboard in Times Square',
				media: {
					name: 'mfers times square',
					source: {
						url: '/mfers_timesquare	.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'march 4 2022',
				cardTitle: '80 eth sale',
				url: 'https://opensea.io/assets/ethereum/0x79fcdef22feed20eddacbb2587640e45491b757f/904',
				cardDetailedText: 'mfers #904 is sold for 80 ETH to punk6529',
				media: {
					name: 'mfers 80eth sale',
					source: {
						url: '/mfer_904.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'march 6 2022',
				cardTitle: 'punk 6529 sends mfer tweet',
				url: 'https://twitter.com/punk6529/status/1500567135642345472',
				media: {
					name: 'mfers 6529 tweet',
					source: {
						url: '/mfer_6529_tweet.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'april 8 2022',
				cardTitle: 'sketch mfers is deployed',
				url: 'https://opensea.io/collection/sketchymfers',
				cardDetailedText:
					'sketchtmfers, a derivative, are deployed by a collective of mfers artists and dev @jellopeas, sodasoondae and @zhoug0x',
				media: {
					name: 'mfers sketch',
					source: {
						url: '/mfers_sketch.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'april 20 2022',
				cardTitle: 'Creyzies is dropped',
				url: 'https://opensea.io/collection/creyzies',
				cardDetailedText:
					'first companion collection is airdropped to all mfers holder : CREYZIES by @reylarsdam',
				media: {
					name: 'mfers creyzies',
					source: {
						url: '/mfer_creyzies.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'june 9 2022',
				cardTitle: 'end of sartoshi goes live',
				url: 'https://opensea.io/collection/end-of-sartoshi',
				cardDetailedText:
					'sartoshi drops the open edition ‘end of sartoshi’ (EOS) just before to say gn and leave the space : the mfers next era officially begins',
				media: {
					name: 'mfers EOS',
					source: {
						url: '/end_of_sartoshi.png',
					},
					type: 'IMAGE',
				},
			},
			,
			{
				title: 'june 14 2022',
				cardTitle: 'mfer marketplace goes live',
				url: 'https://mfers.cool/',
				cardDetailedText:
					'Rarible release an ‘mfers community marketplace’ dedicated to the main collection and official companions CREYZIES and EOS with 0% platform fees : https://mfers.cool/',
				media: {
					name: 'mfers EOS',
					source: {
						url: '/mfer_marketplace.png',
					},
					type: 'IMAGE',
				},
			},
		]

    return (
			<Layout pageTitle="governance | unofficial mfers">
				<PageContainer>
					<Container
						style={{ paddingLeft: '0px', paddingRight: '0px', paddin: '0px' }}
					>
						<Row>
							<Col>
								<div>
									made by:
									<a href="https://twitter.com/anonChickenLegs">
										{' '}
										anonChickenLegs
									</a>
									<img src={svgTwitter}></img>
								</div>
							</Col>
						</Row>
						<Row>
							<Col
								className="d-flex justify-content-center"
								style={{ height: '75vh' }}
							>
								<Chrono items={items} mode="VERTICAL_ALTERNATING" enableOutline>
									<div className="chrono-icons">
										<img src={svgDiscord} alt="image1" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgDiscord} alt="image1" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgTwitter} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgOpensea} alt="image2" />
										<img src={svgOpensea} alt="image2" />
									</div>
								</Chrono>
							</Col>
						</Row>
					</Container>
				</PageContainer>
			</Layout>
		)
  }

  export default Timeline