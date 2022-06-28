import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PrismicRichText } from "@prismicio/react"

const Page = props => (
  <Layout>
    <Seo title="Page three" />
    <PrismicRichText field={props.data.prismicPage.data.page_title.richText}/>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query PageQuery($id: String){
    prismicPage(id: {eq: $id}){
      data{
        page_title{
          text
          richText
        }
      }
    }
  }
`

export default Page
