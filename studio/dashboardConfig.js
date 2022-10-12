export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63474885574751163e03384d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-q67to9ec',
                  apiId: 'e7c2a5c9-54ab-4292-8d86-71492db4411e'
                },
                {
                  buildHookId: '6347488595466913f4e2f2b4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-xh1i9edr',
                  apiId: 'fe3293d6-fbb5-4a33-842a-b31c34aea96a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kinto55/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-xh1i9edr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
