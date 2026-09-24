$(function () {
  let debounceTimeout = null;
  $("#searchInput").on("input", function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => getMovie($(this).val().trim()), 500);
  });

  $("#showMore").on("click", function (e) {
    e.preventDefault();
    onShowMoreClicked();
  });

  $("form").on("submit", (e) => e.preventDefault());
});

function getMovie(title) {
  if (!title) return;

  onBeforeSend();
  fetchMovieFromApi(title);
}

function onBeforeSend() {
  showComponent("#waiting");
  hideComponent("#movie");
  hideComponent("#notFound");
  hideComponent("#error");
  hideComponent("#extended");
}

function fetchMovieFromApi(title) {
  axios
    .get(`https://www.omdbapi.com/?t=${title}&apikey=thewdb`)
    .then((response) => {
      handleResults(response.data);
    })
    .catch((error) => {
      console.error("Error fetching movie data:", error.message);
      onApiError();
    })
    .finally(() => hideComponent("#waiting"));
}

function handleResults(data) {
  if (data.Response === "True") {
    render(data);
  } else {
    showComponent("#notFound");
  }
}

function render(data) {
  const poster = data.Poster !== "N/A" ? data.Poster : "./img/no-poster.img";

  $("#image").attr({ src: poster, alt: data.Title });
  $("#imdbId").attr("href", `https://www.imdb.com/title/${data.imdbID}`);
  $("#title").text(data.Title);
  $("#year").text(`Έτος Παραγωγής: ${data.Year}`);
  $("#runtime").text(`Διάρκεια: ${data.Runtime}`);
  $("#genre").text(`Είδος: ${data.Genre}`);
  $("#imdbRating").text(data.imdbRating);
  $("#plot").text(data.Plot);
  $("#director span").text(data.Director);
  $("#actors span").text(data.Actors);
  $("#production span").text(data.Production);
  $("#boxOffice span").text(data.BoxOffice);
  $("#language span").text(data.Language);
  $("#rated span").text(data.Rated);

  showComponent("#movie");
}

function onShowMoreClicked() {
  $("#extended").slideToggle(1000);
}

function showComponent(component) {
  return $(component).removeClass("hidden");
}

function hideComponent(component) {
  return $(component).addClass("hidden");
}

function onApiError() {
  showComponent("#error");
}
