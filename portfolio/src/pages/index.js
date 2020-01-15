import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "homepage" }}>
    <SEO
      title="Chad Austin White - UX/UI Designer"
      keywords={[`Chad White`, `UX/UI Designer`, `UX/UI`, `Product Design`]}
    />
  </Layout>
)

export default IndexPage
