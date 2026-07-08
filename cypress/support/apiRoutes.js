export const apiRoute = {
    //Articles
    deleteArticle: '/api/articles/API-Automation-56855',
    deleteFavoriteArticle: '/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/favorite',
    getArticles: '/api/articles?limit=10&offset=0',
    getArticlesAuthor: '/api/articles?author=MasterPiece&limit=10&offset=0',
    postCreateArticles: '/api/articles?author=bnm&limit=10&offset=0',
    createArticle: '/api/articles/',
    postFavoriteArticles: '/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/favorite',
    //Comments
    getComments: '/api/articles/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments',
    //Profile
    getFollowUnfollowProfile: '/api/profiles/Artem%20Bondar/follow',
    getFavoritePosts: '/api/articles?favorited=bnm&limit=10&offset=0',
    getProfile: '/api/profiles/bnm',
    putProfile: '/api/user',
    //Sign In
    postSignIn: '/api/users/login',
    postSignUp: '/api/users',
    getPopularTags: '/api/articles?tag=Test&limit=10&offset=0',
    getTags: '/api/tags'
};