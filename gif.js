var loading = document.getElementById("loading");
function handleClick() {
  var searchKey = document.getElementById("search").value;
  console.log(searchKey);
  var giphyApi = "mDagJ7caU7tG0Ye8omFFTKQ2Vg3CEVP7";
  var giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${searchKey}&rating=g&limit=10&api_key=${giphyApi}`;

  fetch(giphyUrl)
    .then((respone) => {
      console.log(respone);
      return respone.json();
    })
    .then((res) => {
      let appendImages = ``;
      console.log(res.data[0].images.fixed_height.url);
      res.data.forEach((image, index) => {
        appendImages += `<div id="image-main">
            <div class="image">
                <img id="img${index}" src="${image.images.fixed_height.url}" alt="${image.type}">
            </div>
            <div class="social">
            <i class="fas fa-thumbs-up fa-lg" id="like${index}" onclick="handleLike(${index})"></i>
            <i class="fas fa-save fa-lg" id="save${index}" onClick="handleSave(${index})"></i>
            </div>
        </div>`;
      });
      loading.innerHTML = appendImages;
    })
    .catch((err) => console.log(err));

  //console.log(result);
}
function handleLike(index) {
  console.log("clicked");
  let like = document.querySelector(`#like${index}`);
  console.log(like);
  like.style.color = "#80ED99";
}
function handleSave(index) {
  let image = document.querySelector(`#img${index}`).getAttribute("src");
  let save = document.querySelector(`#save${index}`);
  console.log(image);
  localStorage.setItem("url", image);
  save.style.color = "#80ED99";
  // console.log(image);
}
