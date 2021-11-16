import * as React from "react"
import { Link } from "gatsby"

// markup
const TestPage2 = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      Test page 2
      <Link to="/about">Go about</Link>.
      <Link to="/new">Go new</Link>.
      <Link to="/home">Go home</Link>.
    </div>
  )
}

export default TestPage2