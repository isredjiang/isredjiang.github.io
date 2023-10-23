const e=JSON.parse('{"key":"v-ba3532b6","path":"/en/docs/222/basic/content.html","title":"Content","lang":"en-US","frontmatter":{"title":"Content","date":"2021-03-31T00:00:00.000Z"},"excerpt":"<h2 id=\\"blog\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#blog\\" aria-hidden=\\"true\\">#</a> Blog</h2>\\n<h3 id=\\"front-matter\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#front-matter\\" aria-hidden=\\"true\\">#</a> Front Matter</h3>\\n<p>Blog posts will be shown on <RouterLink to=\\"/\\">home page</RouterLink>. A post file should be identified by <code v-pre>layout: Post</code> in its front matter. An example front matter for a post looks like:</p>\\n<div class=\\"language-yaml ext-yml line-numbers-mode\\"><pre v-pre class=\\"language-yaml\\"><code><span class=\\"token punctuation\\">---</span>\\n<span class=\\"token key atrule\\">layout</span><span class=\\"token punctuation\\">:</span> Post  <span class=\\"token comment\\"># required</span>\\n<span class=\\"token key atrule\\">title</span><span class=\\"token punctuation\\">:</span> A Brief History of Time  <span class=\\"token comment\\"># post title (required)</span>\\n<span class=\\"token key atrule\\">subtitle</span><span class=\\"token punctuation\\">:</span> From the Big Bang to Black Holes  <span class=\\"token comment\\"># post subtitle (optional)</span>\\n<span class=\\"token key atrule\\">date</span><span class=\\"token punctuation\\">:</span> <span class=\\"token datetime number\\">2020-03-31</span>  <span class=\\"token comment\\"># publish date (optional)</span>\\n<span class=\\"token key atrule\\">author</span><span class=\\"token punctuation\\">:</span> Stephen Hawking  <span class=\\"token comment\\"># post author (optional, will use `themeConfig.personalInfo.name` as default if it is not specified)</span>\\n<span class=\\"token key atrule\\">useHeaderImage</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>  <span class=\\"token comment\\"># show header image in post or not (optional, default: false)</span>\\n<span class=\\"token key atrule\\">headerImage</span><span class=\\"token punctuation\\">:</span> /img/test.jpg  <span class=\\"token comment\\"># path to the header image (required, even if `useHeaderImage` is false, becasue header image would also be shown on home page)</span>\\n<span class=\\"token key atrule\\">headerMask</span><span class=\\"token punctuation\\">:</span> rgba(40<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">57</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">101</span><span class=\\"token punctuation\\">,</span> .4)  <span class=\\"token comment\\"># mask of the header image (optional)</span>\\n<span class=\\"token key atrule\\">headerImageCredit</span><span class=\\"token punctuation\\">:</span> Jeremy Fenske  <span class=\\"token comment\\"># source of the header image, like name of the author or website (optional, only works when \\"useHeaderImage: true\\")</span>\\n<span class=\\"token key atrule\\">headerImageCreditLink</span><span class=\\"token punctuation\\">:</span> https<span class=\\"token punctuation\\">:</span>//www.artstation.com/artwork/nLY0K  <span class=\\"token comment\\"># link to the source of the header image (optional, only works when \\"useHeaderImage: true\\")</span>\\n<span class=\\"token key atrule\\">catalog</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">false</span>  <span class=\\"token comment\\"># enable/disable catalog of the current page, can rewrite `themeConfig.catalog` (optional, default: true)</span>\\n<span class=\\"token key atrule\\">giscus</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">false</span>  <span class=\\"token comment\\"># enable/disable Giscus of the current page (optional, default: true)</span>\\n<span class=\\"token key atrule\\">hide</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>  <span class=\\"token comment\\"># hide this blog in the blog list of home page and tags page or not (optional, default: false)</span>\\n<span class=\\"token key atrule\\">tags</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># post tags (optional)</span>\\n  <span class=\\"token punctuation\\">-</span> space\\n  <span class=\\"token punctuation\\">-</span> physics\\n<span class=\\"token punctuation\\">---</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><div class=\\"custom-container warning\\"><svg viewBox=\\"0 0 25 25\\" xmlns=\\"http://www.w3.org/2000/svg\\" xml:space=\\"preserve\\" style=\\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2\\"><path d=\\"M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z\\" style=\\"fill:#f3cc2e;fill-rule:nonzero\\" transform=\\"matrix(.042 0 0 .042 0 -5.18)\\"/></svg><p class=\\"custom-container-title\\">WARNING</p>\\n<p><code v-pre>title</code> will be used as the first-level heading in a post, so <strong>DO NOT write a first-level heading in your post content</strong>.</p>\\n</div>\\n<div class=\\"custom-container tip\\"><svg viewBox=\\"0 0 25 25\\" xmlns=\\"http://www.w3.org/2000/svg\\" xml:space=\\"preserve\\" style=\\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2\\"><path d=\\"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z\\" style=\\"fill:#48b884;fill-rule:nonzero\\" transform=\\"matrix(.042 0 0 .042 0 -5.178)\\"/><path d=\\"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z\\" style=\\"fill:#48b884;fill-rule:nonzero\\" transform=\\"matrix(.042 0 0 .042 0 -5.178)\\"/></svg><p class=\\"custom-container-title\\">TIP</p>\\n<p>Posts that with <code v-pre>tags</code> item in front matter will be appear on <RouterLink to=\\"/tags/\\">tags page</RouterLink>.</p>\\n</div>\\n<h3 id=\\"url\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#url\\" aria-hidden=\\"true\\">#</a> URL</h3>\\n<p>If you would like the URL of a blog be shown in the form of <code v-pre>/post/year/month/day/post-title/</code>, just add this line to its front matter:</p>\\n<div class=\\"language-yaml ext-yml line-numbers-mode\\"><pre v-pre class=\\"language-yaml\\"><code><span class=\\"token punctuation\\">---</span>\\n<span class=\\"token key atrule\\">layout</span><span class=\\"token punctuation\\">:</span> Post\\n<span class=\\"token key atrule\\">title</span><span class=\\"token punctuation\\">:</span> A Brief History of Time\\n<span class=\\"token key atrule\\">date</span><span class=\\"token punctuation\\">:</span> <span class=\\"token datetime number\\">2020-03-31</span>\\n<span class=\\"token key atrule\\">permalinkPattern</span><span class=\\"token punctuation\\">:</span> /post/<span class=\\"token punctuation\\">:</span>year/<span class=\\"token punctuation\\">:</span>month/<span class=\\"token punctuation\\">:</span>day/<span class=\\"token punctuation\\">:</span>slug/\\n<span class=\\"token punctuation\\">---</span>\\n</code></pre><div class=\\"highlight-lines\\"><br><br><br><br><div class=\\"highlight-line\\">&nbsp;</div><br></div><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>See <a href=\\"https://v2.vuepress.vuejs.org/reference/frontmatter.html#permalinkpattern\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">here</a> for more details.</p>\\n<div class=\\"custom-container warning\\"><svg viewBox=\\"0 0 25 25\\" xmlns=\\"http://www.w3.org/2000/svg\\" xml:space=\\"preserve\\" style=\\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2\\"><path d=\\"M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z\\" style=\\"fill:#f3cc2e;fill-rule:nonzero\\" transform=\\"matrix(.042 0 0 .042 0 -5.18)\\"/></svg><p class=\\"custom-container-title\\">WARNING</p>\\n<p>When using this permalink pattern, you must <strong>specify the date</strong> in front matter or filename/dirname. See <a href=\\"https://v2.vuepress.vuejs.org/reference/frontmatter.html#permalinkpattern\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">here</a> for more details.</p>\\n</div>\\n<h3 id=\\"excerpt\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#excerpt\\" aria-hidden=\\"true\\">#</a> Excerpt</h3>\\n<p>In a blog markdown file, any content above the `</p>\\n","headers":[{"level":2,"title":"Blog","slug":"blog","children":[{"level":3,"title":"Front Matter","slug":"front-matter","children":[]},{"level":3,"title":"URL","slug":"url","children":[]},{"level":3,"title":"Excerpt","slug":"excerpt","children":[]}]},{"level":2,"title":"Documentation","slug":"documentation","children":[]},{"level":2,"title":"Markdown Syntax","slug":"markdown-syntax","children":[]},{"level":2,"title":"Containers","slug":"containers","children":[{"level":3,"title":"Link Card Container","slug":"link-card-container","children":[]},{"level":3,"title":"Other Containers","slug":"other-containers","children":[]}]}],"git":{},"readingTime":{"minutes":3,"words":429},"filePathRelative":"en/docs/222/basic/content.md"}');export{e as data};
