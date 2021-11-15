import * as React from "react"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      hello world
      <Link to="/about">Go about</Link>.
      <Link to="/new">Go new</Link>.
    </div>
  )
}

export default IndexPage
