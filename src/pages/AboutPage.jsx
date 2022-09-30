import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
    <div className="about">
        <h1>About Page</h1>
        <p>This is an about page for the feedback app as created in react</p>
        <p>Version 1.0.0</p>

        <p>
            <Link to="/">Back to Home</Link>
        </p>
    </div>
    </Card>
  )
}

export default AboutPage