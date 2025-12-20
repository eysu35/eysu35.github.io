import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Darkmode from "./Darkmode"

const TopNav: QuartzComponent = (props: QuartzComponentProps) => {
  const DarkmodeComponent = Darkmode()

  return (
    <div className="top-nav-wrapper">
      <nav className="top-nav">
        <div className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/Publications" className="nav-link">
            Publications
          </a>
          <a href="/Thoughts" className="nav-link">
            Thoughts
          </a>
          <a
            href="/Attachments/currCV.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>{" "}
        </div>
        <div className="nav-darkmode">
          <DarkmodeComponent {...props} />
        </div>
      </nav>
    </div>
  )
}

TopNav.css = `
.top-nav-wrapper {
  max-width: 800px;
  margin: 0 auto 1rem auto;
  padding: 0.5 1rem;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-links {
  display: flex;
  gap: 3rem;
}

.nav-link {
  font-size: 1rem;
  text-decoration: none;
  color: inherit;
  transition: text-decoration 0.2s ease;
}

.nav-link:hover {
  text-decoration: underline;
}

.nav-darkmode {
  display: flex;
  align-items: center;
}
`

export default (() => TopNav) satisfies QuartzComponentConstructor
