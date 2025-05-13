document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("youtubeFrame");
  const closeButton = document.querySelector(".close-button");

  // Replace these with your actual YouTube video IDs
  const videoIds = [
    "IvSLj2fKqZo",
    "VR8xJTNvp3M",
    "g85WsxE1gAU",
    "u7fbqWxeq4I",
    "fZLLqapzxRQ",
    "iaQBQp5tgcw",
    "eV3x4E-hp5w",
    "LFOx-vmYrts",
    "dxC3skB_qoQ",
    "QipIufCH3rw",
    "o7-PNsycv2A",
    "pn_ZW47s5iE"
  ];

  // Get all thumbnails
  const previews = document.querySelectorAll(".video_preview");

  previews.forEach((preview, index) => {
    preview.addEventListener("click", () => {
      const videoId = videoIds[index];
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
      modal.style.display = "block";
    });
  });

  // Close modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});
