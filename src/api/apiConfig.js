const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ababbd1a8fbd48ec97913a3c55f24a9f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;