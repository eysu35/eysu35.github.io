import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

/* Google Fonts */
// import url 
// import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

/* Global */
html{
  min-height: 100%;
  overflow: hidden;
}

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  // return (
  //   <h1 class={classNames(displayClass, "page-title")}>
  //     <a href={baseDir}>{title}</a>
  //   </h1>
  // )
  return (
    <h1 class={classNames(displayClass, "line-1 anim-typewriter")}>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

// PageTitle.css = `
// .page-title {
//   margin: 0;
// }
// `

PageTitle.css = `
// body{
//   height: calc(100vh - 8em);
//   padding: 4em;
//   color: rgba(255,255,255,.75);
//   font-family: 'Anonymous Pro', monospace;  
//   background-color: rgb(25,25,25);  
// }
.line-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
