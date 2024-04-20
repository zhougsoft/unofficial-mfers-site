import React from 'react'
import {
    MFERCOIN_MIRROR,
    MFERCOIN_WP_IPFS,
    MFERCOIN_CONTRACT,
    MFERCOIN_UNISWAP,
    MFERCOIN_DEXSCREENER,
    MFERCOIN_OKX
} from '../constants'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

import bluemfer from '../assets/images/bluemfer.png'

const MfercoinPage = () => {
    return (
        <Layout pageTitle="mfercoin | unofficial mfers">
            <PageContainer>
                <div className="mfercoin-wrapper">
                    <img src={bluemfer} alt="mfercoin mfer" />
                    <h1 className="mfercoin-heading">mfercoin ($mfer)</h1>


                    <h3 class="mfercoin-subheading">~ a peer-to-peer electronic mfer
                        system ~</h3>

                    <div class="mfercoin-links">


                        <p>
                            <ExtLink href={MFERCOIN_MIRROR}>
                                mirror article
                            </ExtLink>
                        </p>

                        <p>
                            <ExtLink href={MFERCOIN_WP_IPFS}>
                                whitepaper
                            </ExtLink>
                        </p>
                        <p>
                            <ExtLink href={MFERCOIN_CONTRACT}>
                                contract
                            </ExtLink>
                        </p>


                        <p>
                            <ExtLink href={MFERCOIN_UNISWAP}>
                                uniswap
                            </ExtLink>
                        </p>


                        <p>
                            <ExtLink href={MFERCOIN_DEXSCREENER}>
                                DexScreener
                            </ExtLink>
                        </p>
                        <p>
                            <ExtLink href={MFERCOIN_OKX}>
                                OKX
                            </ExtLink>
                        </p>

                    </div>





                </div>
            </PageContainer>
        </Layout>
    )
}

export default MfercoinPage
