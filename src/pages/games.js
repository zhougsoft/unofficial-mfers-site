import React from 'react'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ExtLink from '../components/ExtLink'

const GamesPage = () => {
    return (
        <Layout pageTitle="games | unofficial mfers">
            <PageContainer>
                <div className="games-wrapper">
                    <h1 className="games-heading">games</h1>
                    <p>
                        <ExtLink href="https://twitter.com/outerlumen/status/1604564631124672512">
                            mfer blaster ↗
                        </ExtLink>
                    </p>
                </div>
            </PageContainer>
        </Layout>
    )
}

export default GamesPage
