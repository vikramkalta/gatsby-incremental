import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import LazyThumb from "../components/lazy-thumb"

export default function CustomerCase() {
  const data = useStaticQuery(graphql`
      query CustomerCaseQuery { 
        csCustomersPage {
          customer_case_studies_section {
            header
            copy
            cta {
              link
              text
            }
            logos {
              link
              logo {
                color_logo {
                  url
                }
              }
            }
          }
          customer_care_section {
            header
            background_image {
              url
            }
            copy
            cta {
              text
              link
            }
          }
        }
      }
      `)
  console.log('data.csCustomersPage.customer_case_studies_section.logos', data.csCustomersPage.customer_case_studies_section.logos)
  return (
    <div className="customer-case padding-top">
      <div className="panels">
        <div className="left-pane">
          <div className="inner max-width">
            <h2>{data.csCustomersPage.customer_case_studies_section.header}</h2>
            <p>{data.csCustomersPage.customer_case_studies_section.copy}</p>
            <a className="button hover-orange" href={data.csCustomersPage.customer_case_studies_section.cta.link}>{data.csCustomersPage.customer_case_studies_section.cta.text}</a>
            <div className="logo-garden">
              {data.csCustomersPage.customer_case_studies_section.logos.map((logo, idx) => (
                <a href={logo.link} key={idx}>
                  {logo.logo.map((img, index) => (
                    <LazyThumb
                      key={"logo-" + index}
                      src={img.color_logo ? img.color_logo.url : ''}
                      className="logo" />
                  ))}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="right-pane">
          {/* <LazyThumb className="bg-image" src={data.csCustomersPage.customer_care_section.background_image.url ? data.csCustomersPage.customer_care_section.background_image.url : ""} /> */}
          <div className="inner">
            <h2>{data.csCustomersPage.customer_care_section.header}</h2>
            <p>{data.csCustomersPage.customer_care_section.copy}</p>
            <a className="button hover-orange" href={data.csCustomersPage.customer_care_section.cta.link}>{data.csCustomersPage.customer_care_section.cta.text}</a>
          </div>
        </div>
      </div>
    </div>
  )
}