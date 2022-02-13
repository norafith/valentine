function getGifUrl() {
  let gifPromise = fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=rH7weOXUDP7KGMcPiPk1WWmt6ZSCJHNz&tag=love+you+chippythedog&rating=g"
  );
  return gifPromise
    .then((response) => response.json())
    .then((response) => response.data.images.original.url);
}

export { getGifUrl };
