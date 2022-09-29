import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
    <div className="about">
        <h1>About Page</h1>
        <p>This is an about page for the feedback app as created in react</p>
        <p>Version 1.0.0</p>

        <p>
            <a href="/">Back to Home</a>
        </p>
    </div>
    </Card>
  )
}

export default AboutPage