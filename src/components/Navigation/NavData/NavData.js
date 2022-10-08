export const menuItems = [
    {
        text: 'Home',
        pathname: '/app/home'
    },
    {
        text: 'About ADS',
        pathname: '/app/PageAbout'
    },
    {
        text: 'Getting Started',
        pathname: '/app/PageGettingStarted'
    },
    {
        text: 'Design Kit',
        pathname: '/app/PageDesignKit'
    },

    {
        text: 'Tutorials',
        pathname: '',
        menuItems: [
            {
                text: 'Videos',
                pathname: '/app/PageTutorialsVideos'
            },
            {
                text: 'Documents',
                pathname: '/app/PageTutorialsDocuments'
            },
            {
                text: 'Live Sessions',
                pathname: '/app/PageTutorialsSessions'
            },
            {
                text: 'Activities',
                pathname: '/app/PageTutorialsActivities'
            }
        ]
    },
    {
        text: 'Resources',
        pathname: '/app/PageResources'
    },
    {
        text: 'Help',
        pathname: '/app/PageHelp'
    }
]
