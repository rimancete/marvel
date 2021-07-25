// Timestamp
const ts = new Date().getTime();

// Public Key
const publicKey = '8fbb76c17d4297e8557785944264bfe4';
// Private Key
const privateKey = 'd1f9e8b182ee0036c9547d931af57490c93054ec';

// URL base para as requisições a API da Marvel
const baseURL = 'http://gateway.marvel.com/v1/public/';

// Necessário para carregar as imagens
const listImageExtension = '/standard_xlarge.jpg';
const detailImageExtension = '/standard_fantastic.jpg';

export {
  ts,
  publicKey,
  privateKey,
  baseURL,
  listImageExtension,
  detailImageExtension,
};

// public: Show / HideList OperationsExpand OperationsRaw
// GET / v1 / public / charactersFetches lists of characters.
//   GET / v1 / public / characters / { characterId }Fetches a single character by id.
//     GET / v1 / public / characters / { characterId } / comicsFetches lists of comics filtered by a character id.
//       GET / v1 / public / characters / { characterId } / eventsFetches lists of events filtered by a character id.
//         GET / v1 / public / characters / { characterId } / seriesFetches lists of series filtered by a character id.
//           GET / v1 / public / characters / { characterId } / storiesFetches lists of stories filtered by a character id.
//             GET / v1 / public / comicsFetches lists of comics.
//               GET / v1 / public / comics / { comicId }Fetches a single comic by id.
//                 GET / v1 / public / comics / { comicId } / charactersFetches lists of characters filtered by a comic id.
//                   GET / v1 / public / comics / { comicId } / creatorsFetches lists of creators filtered by a comic id.
//                     GET / v1 / public / comics / { comicId } / eventsFetches lists of events filtered by a comic id.
//                       GET / v1 / public / comics / { comicId } / storiesFetches lists of stories filtered by a comic id.
//                         GET / v1 / public / creatorsFetches lists of creators.
//                           GET / v1 / public / creators / { creatorId }Fetches a single creator by id.
//                             GET / v1 / public / creators / { creatorId } / comicsFetches lists of comics filtered by a creator id.
//                               GET / v1 / public / creators / { creatorId } / eventsFetches lists of events filtered by a creator id.
//                                 GET / v1 / public / creators / { creatorId } / seriesFetches lists of series filtered by a creator id.
//                                   GET / v1 / public / creators / { creatorId } / storiesFetches lists of stories filtered by a creator id.
//                                     GET / v1 / public / eventsFetches lists of events.
//                                       GET / v1 / public / events / { eventId }Fetches a single event by id.
//                                         GET / v1 / public / events / { eventId } / charactersFetches lists of characters filtered by an event id.
//                                           GET / v1 / public / events / { eventId } / comicsFetches lists of comics filtered by an event id.
//                                             GET / v1 / public / events / { eventId } / creatorsFetches lists of creators filtered by an event id.
//                                               GET / v1 / public / events / { eventId } / seriesFetches lists of series filtered by an event id.
//                                                 GET / v1 / public / events / { eventId } / storiesFetches lists of stories filtered by an event id.
//                                                   GET / v1 / public / seriesFetches lists of series.
//                                                     GET / v1 / public / series / { seriesId }Fetches a single comic series by id.
//                                                       GET / v1 / public / series / { seriesId } / charactersFetches lists of characters filtered by a series id.
//                                                         GET / v1 / public / series / { seriesId } / comicsFetches lists of comics filtered by a series id.
//                                                           GET / v1 / public / series / { seriesId } / creatorsFetches lists of creators filtered by a series id.
//                                                             GET / v1 / public / series / { seriesId } / eventsFetches lists of events filtered by a series id.
//                                                               GET / v1 / public / series / { seriesId } / storiesFetches lists of stories filtered by a series id.
//                                                                 GET / v1 / public / storiesFetches lists of stories.
//                                                                   GET / v1 / public / stories / { storyId }Fetches a single comic story by id.
//                                                                     GET / v1 / public / stories / { storyId } / charactersFetches lists of characters filtered by a story id.
//                                                                       GET / v1 / public / stories / { storyId } / comicsFetches lists of comics filtered by a story id.
//                                                                         GET / v1 / public / stories / { storyId } / creatorsFetches lists of creators filtered by a story id.
//                                                                           GET / v1 / public / stories / { storyId } / eventsFetches lists of events filtered by a story id.
//                                                                             GET / v1 / public / stories / { storyId } / seriesFetches lists of series filtered by a story id.

// Image Representations and Pathing
// The Marvel Comics API does not provide full paths to images.Instead, images are represented as a partial path to an image file and the canonical extension of that file.Developers may select from a set of image variants(predefined sizes and ratios) in order to best serve the presentation of their web site or application.

// To build a full image path from an image representation

// Take the "path" element from the image representation
// Append a variant name to the path element
// Append the "extension" element to the variant name
// For example, to display the image represented here:

// "thumbnail": {
//   "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73",
//     "extension": "jpg"
// }
// Take the path element: http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73
// Select an image variant name(see the full list below) and append the variant name to the path element: http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge
// Append the extension: http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg
// In order to make your web site or application load and respond quickly and preserve end - user bandwidth, we recommend using the smallest - sized image necessary to meet the needs our user interface.
// Image Variants
// The following named image sizes and ratios are available for you use products leveraging the Marvel API.We add new image sizes from time to time, so please check this page in the future.

// Portrait aspect ratio

// portrait_small	50x75px
// portrait_medium	100x150px
// portrait_xlarge	150x225px
// portrait_fantastic	168x252px
// portrait_uncanny	300x450px
// portrait_incredible	216x324px
// Standard(square) aspect ratio

// standard_small	65x45px
// standard_medium	100x100px
// standard_large	140x140px
// standard_xlarge	200x200px
// standard_fantastic	250x250px
// standard_amazing	180x180px
// Landscape aspect ratio

// landscape_small	120x90px
// landscape_medium	175x130px
// landscape_large	190x140px
// landscape_xlarge	270x200px
// landscape_amazing	250x156px
// landscape_incredible	464x261px
// Full size images
// detail	full image, constrained to 500px wide
// full - size image	no variant descriptor
