import * as React from "react"
import { Link } from "gatsby"

// markup
const TestPage3 = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      Test page 3
      <Link to="/about">Go about</Link>.
      <Link to="/new">Go new</Link>.
      <Link to="/home">Go home</Link>.
    </div>
  )
}

export default TestPage3