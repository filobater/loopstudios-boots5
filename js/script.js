const creation = document.querySelector('.creation');

function responsive(media) {
  if (media.matches) {
    // If media query matches
    creation.innerHTML = `
    <div class="container">
    <div
      class="title-button d-flex justify-content-center align-items-center"
    >
      <h2>our creation</h2>
    </div>
    <div class="row mt-3">
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-deep-earth.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">deep earth</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-night-arcade.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Night arcade</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-soccer-team.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Soccer team VR</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-grid.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">
            the <br />
            grid
          </h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-from-above.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">From up above VR</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-pocket-borealis.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Pocket borealis</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-curiosity.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">The curiosity</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="content position-relative">
          <img
            src="images/mobile/image-fisheye.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Make it fisheye</h3>
        </div>
      </div>
    </div>
    <a href="#" class="btn creation-btn mt-4">see all</a>
  </div>
      `;
  } else {
    creation.innerHTML = `
    <div class="container">
    <div
      class="title-button d-flex justify-content-between align-items-center"
    >
      <h2>our creation</h2>
      <a href="#" class="btn creation-btn">see all</a>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="content position-relative">
          <img
            src="images/desktop/image-deep-earth.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">deep earth</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="content position-relative">
          <img
            src="images/desktop/image-night-arcade.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Night arcade</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="content position-relative">
          <img
            src="images/desktop/image-soccer-team.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Soccer team VR</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="content position-relative">
          <img
            src="images/desktop/image-grid.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">
            the <br />
            grid
          </h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="content position-relative">
          <img
            src="images/desktop/image-from-above.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">From up above VR</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="content position-relative">
          <img
            src="images/desktop/image-pocket-borealis.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Pocket borealis</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="content position-relative">
          <img
            src="images/desktop/image-curiosity.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">The curiosity</h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="content position-relative">
          <img
            src="images/desktop/image-fisheye.jpg"
            alt="creation photo"
            class="img-fluid"
          />

          <h3 class="text-uppercase">Make it fisheye</h3>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

const media = window.matchMedia('(max-width:767.98px)');
responsive(media);
media.addListener(responsive);
