import Image from 'next/image'
import svgDiscordLogo from '../public/images/svg/discord-logo.svg'
import svgEtherscanLogo from '../public/images/svg/etherscan-logo.svg'
import svgTwitterLogo from '../public/images/svg/twitter-logo.svg'

const Icon = ({ src, alt, ...props }) => (
	<div {...props}>
		<Image src={src} alt={alt} layout="responsive" />
	</div>
)

export const DiscordIcon = ({ alt, ...props }) => (
	<Icon src={svgDiscordLogo} alt="Discord logo icon" {...props} />
)

export const EtherscanIcon = ({ alt, ...props }) => (
	<Icon src={svgEtherscanLogo} alt="Etherscan logo icon" {...props} />
)

export const TwitterIcon = ({ ...props }) => (
	<Icon src={svgTwitterLogo} alt="Twitter logo icon" {...props} />
)
