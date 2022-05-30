export const useProjectLists = () => {
    const projectsLists = [
        {
            id: 1,
            projectName: "Portfolio",
            projectLink: "https://github.com/Venktesh98/Portfolio",
            projectImage: process.env.PUBLIC_URL + "/assets/portfolio.jpg"
        },
        {
            id: 2,
            projectName: "Covid-19 Tracker",
            projectLink: "https://github.com/Venktesh98/Covid-19-Tracker",
            projectImage: process.env.PUBLIC_URL + "/assets/covid-19.jpg"
        },
        {
            id: 3,
            projectName: "BooksApp",
            projectLink: "https://github.com/Venktesh98/BooksApp-Client",
            projectImage: process.env.PUBLIC_URL + "/assets/books-app.jpg"
        },
        {
            id: 4,
            projectName: "GrabYourRoom",
            projectLink: "https://github.com/Venktesh98/GrabYourRoom-With-Rest-Api-Frontend",
            projectImage: process.env.PUBLIC_URL + "/assets/grab-your-room.jpg"
        },
        {
            id: 5,
            projectName: "Comfy-Ecommerce",
            projectLink: "https://github.com/Venktesh98/Javascript-Ecommerce",
            projectImage: process.env.PUBLIC_URL + "/assets/js-comfy.jpg"
        },
        {
            id: 6,
            projectName: "CrickHeroes",
            projectLink: "https://gitlab.com/Venkyso/crickheroes-task",
            projectImage: process.env.PUBLIC_URL + "/assets/crickheroes.jpg",
            isProjectInGitlab: true
        }
    ]

    return projectsLists
}