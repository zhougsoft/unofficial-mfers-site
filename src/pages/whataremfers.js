import React from 'react'
import {
    WHAT_ARE_MFERS_LINK,
    WHATAREMFERS_FRENCH,
    WHATAREMFERS_ITALIAN,
    WHATAREMFERS_FARSI,
    WHATAREMFERS_TURKISH,
    WHATAREMFERS_DUTCH,
    WHATAREMFERS_KOREAN,
    SARTOCRATES_FARCASTER
} from '../constants'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

import whataremfers from '../assets/images/whataremfers.png'

const WhatAreMfersPage = () => {
    return (
        <Layout pageTitle="what are mfers | unofficial mfers">
            <PageContainer>
                <div className="whataremfers-wrapper">
                    <img src={whataremfers} alt="mfercoin mfer" />
                    <h1 className="whataremfers-heading">what are mfers?</h1>



                    <div class="whataremfers-links">


                        <p>
                            <ExtLink href={WHAT_ARE_MFERS_LINK}>
                                what are mfers? - sartoshi ↗
                            </ExtLink>
                        </p>

                        <h3 class="whataremfers-subheading">translations</h3>

                        <p>"what are mfers" has been translated into several languages by mfers around the world, led and compiled by mfer sartocrates.
                        </p>

                        <p>
                            <ExtLink href={WHATAREMFERS_FRENCH}>
                                french ↗
                            </ExtLink>
                        </p>
                        <p>
                            <ExtLink href={WHATAREMFERS_ITALIAN}>
                                italian ↗
                            </ExtLink>
                        </p>
                        <p>
                            <ExtLink href={WHATAREMFERS_FARSI}>
                                farsi ↗
                            </ExtLink>
                        </p>
                        <p>
                            <ExtLink href={WHATAREMFERS_TURKISH}>
                                turkish ↗
                            </ExtLink>
                        </p>
                        <p>
                            <ExtLink href={WHATAREMFERS_KOREAN}>
                                korean ↗
                            </ExtLink>
                        </p>
                        <p>
                            <ExtLink href={WHATAREMFERS_DUTCH}>
                                dutch ↗
                            </ExtLink>
                        </p>


                    </div>





                </div>
            </PageContainer>
        </Layout>
    )
}

export default WhatAreMfersPage
