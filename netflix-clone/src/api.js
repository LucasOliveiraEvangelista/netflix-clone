const API_KEY = "e4869f9f4de269eb7d756a22ab607546";

const categories =[
    {
        name: "trending",
        title: "Em alta",
        path: "/trending/all/week?api_key=e4869f9f4de269eb7d756a22ab607546&language=pt-BR",
        isLarge: true,
    },
    {
        name: "originals",
        title: "Originais Netfrickis",
        path: "/discover/tv?api_key=e4869f9f4de269eb7d756a22ab607546&with_networks=213",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated?api_key=e4869f9f4de269eb7d756a22ab607546&language=pt-BR",
        isLarge: false,
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("error getMovies: ", error);
    }
};

export default categories;