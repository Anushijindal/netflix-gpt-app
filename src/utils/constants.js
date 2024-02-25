export const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PROFILE_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkg-qvEdE_G0UqfM3gE_PIb7gHIFi1OtAgnSyIWG9Df2ar6BBYVeTM-UULzeWYooBLyc&usqp=CAU";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };
export const POSTER_URL="https://image.tmdb.org/t/p/w500";
export const BACKGROUND_URL="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const SUPPORTED_LANG=[
  {identifier: "en", langName:"English",},
  {identifier: "hindi", langName:"Hindi",},
  {identifier: "spanish", langName:"Spanish",},
  {identifier: "french", langName:"French",},
];
export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY; 


