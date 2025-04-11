import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.TopNav()],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/eysu35/",
      "LinkedIn": "https://www.linkedin.com/in/ellen-su-4384221a6/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.PageTitle(),
    // Component.Breadcrumbs(),
    // Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
  ],
  left: [
    // Component.PageTitle(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
    Component.TableOfContents(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    // Component.Darkmode({displayClass: "hidden"}),
    Component.PageTitle(),
    // Component.Breadcrumbs(), 
    // Component.ArticleTitle(), 
    Component.ContentMeta()],
  left: [
    // Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
