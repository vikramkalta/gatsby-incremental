import * as React from "react"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      hello world
      <Link to="/about">Go about</Link>.
      <Link to="/new">Go new</Link>.
      <Link to="/test-page1">Go test-page1</Link>.
      <Link to="/test-page2">Go test-page2</Link>.
      <Link to="/test-page3">Go test-page3</Link>.
      <Link to="/customers">Go to customers</Link>.
      <Link to="/leaf">Go to root</Link>.
    </div>
  )
}

export default IndexPage
