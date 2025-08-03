

  const scrollContainer = document.getElementById("scroll-container");

  let scrollStep = 1; // how many pixels to scroll each frame
  let scrollDelay = 10 * 1000; // 10 seconds delay
  let direction = 1; // 1 = down, -1 = up

  function autoScroll() {
    let maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;

    scrollContainer.scrollBy({
      top: scrollStep * direction,
      behavior: "smooth"
    });

    if (scrollContainer.scrollTop >= maxScroll) {
      direction = -1;
    } else if (scrollContainer.scrollTop <= 0) {
      direction = 1;
    }
  }

  setInterval(autoScroll, scrollDelay);

