# Claire Kim Personal Website

Source for Claire (Nayoung) Kim's academic and professional website.

Live site: <https://clairekim.info>

This site is built with [Jekyll](https://jekyllrb.com/) and GitHub Pages, based on the [academicpages](https://github.com/academicpages/academicpages.github.io) template.

## Site Content

- Homepage and research summary: `_pages/about.md`
- Profile and technical overview: `_pages/profile.md`
- Research projects: `_pages/projects.md`
- Development projects and demos: `_pages/devs.md`
- Publications: `_pages/publications.md`
- CV page: `_pages/cv.md`
- Talks: `_pages/talks.md`
- Resume and PDFs: `files/`
- Images and favicons: `images/`

## Local Development

Install Ruby and Bundler, then install the GitHub Pages/Jekyll dependencies:

```bash
bundle install
```

Run the site locally:

```bash
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000> in a browser. If you change `_config.yml`, restart the Jekyll server because config changes are not reloaded automatically.

## Common Updates

- Edit global site metadata, author links, analytics, and plugin settings in `_config.yml`.
- Edit top navigation in `_data/navigation.yml`.
- Add or update page content in `_pages/`.
- Replace `files/ClaireKim_resume.pdf` when updating the downloadable resume.
- Put new project/publication images in `images/` and reference them from page Markdown.
- Customize styles in `_sass/_custom.scss` and related Sass partials.

## Deployment

The repository is configured for GitHub Pages. Pushing changes to the publishing branch updates the live site after GitHub Pages finishes its Jekyll build.

The custom domain is configured in `CNAME`:

```text
clairekim.info
```

## Template

The site uses the academicpages Jekyll template. Template code is covered by the MIT license in `LICENSE`; personal content, images, PDFs, and profile materials belong to Claire (Nayoung) Kim unless otherwise noted.
