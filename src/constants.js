import d_mfers from './assets/images/3d_mfers.png'
import end_of_sartoshi from './assets/images/end_of_sartoshi.png'
import mfer_904 from './assets/images/mfer_904.png'
import mfer_6529_tweet from './assets/images/mfer_6529_tweet.png'
import mfer_aheads from './assets/images/mfer_aheads.png'
import mfer_creyzies from './assets/images/mfer_creyzies.png'
import mfer_marketplace from './assets/images/mfer_marketplace.png'
import mfer_tattoo_tweet from './assets/images/mfer_tattoo_tweet.png'
import mfer_tattoo_video_nft from './assets/images/mfer_tattoo_video_nft.png'
import mfers_contract from './assets/images/mfers_contract.png'
import mfers_discord from './assets/images/mfers_discord.png'
import mfers_mint_website from './assets/images/mfers_mint_website.png'
import mfers_sketch from './assets/images/mfers_sketch.png'
import mfers_timesquare from './assets/images/mfers_timesquare.png'
import mfer_returns from './assets/images/mfer_returns.png'

// links
export const DISCORD_LINK = 'https://discord.gg/unofficialmfers'
export const TWITTER_LINK = 'https://twitter.com/unofficialmfers'
export const OPENSEA_LINK = 'https://opensea.io/collection/mfers'
export const ETHERSCAN_LINK =
	'https://etherscan.io/address/0x79FCDEF22feeD20eDDacbB2587640e45491b757f'
export const TREASURY_LINK =
	'https://etherscan.io/address/0x21130e908bba2d41b63fbca7caa131285b8724f8'
export const SNAPSHOT_LINK = 'https://snapshot.org/#/unofficialmfers.eth'
export const WHAT_ARE_MFERS_LINK =
	'https://mirror.xyz/sartoshi.eth/QukjtL1076-1SEoNJuqyc-x4Ut2v8_TocKkszo-S_nU'
export const MFERPEDIA =
	'https://zhoug.notion.site/mferpedia-d0c1ed16cc5a4214821158ef032eeb41'
// lists
// export const TREASURY_SIGNERS = [
// 	{
// 		name: 'masterchan',
// 		twitter: 'https://twitter.com/masterchanx',
// 	},
// 	{
// 		name: 'metabananas',
// 		twitter: 'https://twitter.com/metabananas',
// 	},
// 	{
// 		name: 'lexito',
// 		twitter: 'https://twitter.com/lexnfts',
// 	},
// 	{
// 		name: 'mleejr',
// 		twitter: 'https://twitter.com/mleejr',
// 	},
// ]

export const TREASURY_SIGNER_ALUMNI = [
	{
		name: 'imp0ster',
		twitter: 'https://twitter.com/imp0ster',
	},
	{
		name: 'zhoug',
		twitter: 'https://twitter.com/zhougsoft',
	},
	{
		name: 'kml',
		twitter: 'https://twitter.com/kmldot',
	},
	{
		name: 'mleejr',
		twitter: 'https://twitter.com/mleejr',
	},
	{
		name: 'masterchan',
		twitter: 'https://twitter.com/masterchanx',
	},
	{
		name: 'metabananas',
		twitter: 'https://twitter.com/metabananas',
	}
]

// TODO: add showcase mfers
export const CAROUSEL_IMGS_TOP = ['3191.png', '7332.png']
export const CAROUSEL_IMGS_BOTTOM = ['3191.png', '7332.png']

export const TIMELINE_EVENTS = [
	{
		title: 'November 29, 2021',
		cardTitle: 'Contract Deployed',
		url: 'https://etherscan.io/address/0x79fcdef22feed20eddacbb2587640e45491b757f',
		cardDetailedText:
			'mfers contract deployed on the blockchain (block 13711155) by sartoshi',
		media: {
			name: 'mfer contract',
			source: {
				url: mfers_contract,
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
				url: mfers_mint_website,
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
				url: d_mfers,
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
				url: mfers_discord,
			},
			type: 'IMAGE',
		},
	},
	,
	{
		title: 'january 5 2022',
		cardTitle: 'mfers ahead are deployed',
		url: 'https://twitter.com/MfersAhead',
		cardDetailedText:
			'mfers ahead, a derivative, are deployed by @Metabananas: the first piece is an ahead version of sartoshi_nft pfp. total supply of 420',
		media: {
			name: 'mfers ahead',
			source: {
				url: mfer_aheads,
			},
			type: 'IMAGE',
		},
	},
	,
	{
		title: 'january 13 2022',
		cardTitle: 'the first mfer tattoo',
		url: 'https://twitter.com/the_imp0ster/status/1481473560564621312?t=RMvl4IgKix-Tnt4TUJnzqg&s=19',
		cardDetailedText:
			'@the_imp0ster gets an mfer tattoo (yeah, for real and has been recorded) : the video is auctioned on OpenSea to start the unofficial mfers treasury',
		media: {
			name: 'mfers tattoo tweet',
			source: {
				url: mfer_tattoo_tweet,
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
				url: mfer_tattoo_video_nft,
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
				url: mfers_timesquare,
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
				url: mfer_904,
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
				url: mfer_6529_tweet,
			},
			type: 'IMAGE',
		},
	},
	,
	{
		title: 'april 8 2022',
		cardTitle: 'sketchy mfers is deployed',
		url: 'https://opensea.io/collection/sketchymfers',
		cardDetailedText:
			'sketchy mfers, a derivative, are deployed by a collective of mfers artists and dev @jellopeas, sodasoondae and @zhoug0x',
		media: {
			name: 'mfers sketch',
			source: {
				url: mfers_sketch,
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
			'first companion collection is airdropped to all mfer holders : CREYZIES by @reylarsdam',
		media: {
			name: 'mfers creyzies',
			source: {
				url: mfer_creyzies,
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
				url: end_of_sartoshi,
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
				url: mfer_marketplace,
			},
			type: 'IMAGE',
		},
	},
	{
		title: 'january 1 2023',
		cardTitle: 'sartoshi returns',
		url: 'https://twitter.com/sartoshi_rip',
		cardDetailedText: 'Sartoshi returns as @sartoshi_rip',
		media: {
			name: 'mfers returns',
			source: {
				url: mfer_returns,
			},
			type: 'IMAGE',
		},
	},
]

export const MFERCOIN_MIRROR =
	'https://mirror.xyz/sartoshi.eth/gTS1jOL9JdfbO2--rTIMiGo5SmovIbxyPR7xIJJCxUo'

export const MFERCOIN_WP_IPFS =
	'https://ipfs.io/ipfs/QmRB2uGqNiwX8piYCNLmNK234BTcXksDfobt7UDfPFUzFa/mfercoin.pdf'

export const MFERCOIN_CONTRACT =
	'https://basescan.org/address/0xe3086852a4b125803c815a158249ae468a3254ca'

export const MFERCOIN_UNISWAP =
	'https://app.uniswap.org/explore/tokens/base/0xe3086852a4b125803c815a158249ae468a3254ca'

export const MFERCOIN_DEXSCREENER =
	'https://dexscreener.com/base/0xb08a99ab559e5456907278727a3b0d968c0a313b'

export const MFERCOIN_OKX =
	'https://www.okx.com/web3/dex-swap#inputChain=8453&inputCurrency=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&outputChain=8453&outputCurrency=0xe3086852a4b125803c815a158249ae468a3254ca'


export const WHATAREMFERS_FRENCH = 'https://paragraph.xyz/@sartocratesbased.eth/que-sont-les-mfers'

export const WHATAREMFERS_ITALIAN = 'https://paragraph.xyz/@sartocratesbased.eth/che-cosa-sono-gli-mfers'

export const WHATAREMFERS_FARSI = 'https://paragraph.xyz/@sartocratesbased.eth/mfers-chyh%D8%9F'

export const WHATAREMFERS_TURKISH = 'https://paragraph.xyz/@sartocratesbased.eth/mfers-nedir'

export const WHATAREMFERS_KOREAN = 'https://paragraph.xyz/@sartocratesbased.eth/%EC%8A%88%EB%B2%8C%EB%9F%BC%EB%93%A4%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80'

export const WHATAREMFERS_DUTCH = 'https://paragraph.xyz/@sartocratesbased.eth/wat-zijn-mfers'

export const SARTOCRATES_FARCASTER = 'https://warpcast.com/sartocrates'
