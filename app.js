/* ===================================================================
   CINEFLIX - MOVIE PORTAL ENGINE & INTERACTIVE LOGIC
   =================================================================== */

const SMARTLINK_URL = "https://www.profitableratecpmnetwork.com/a8ae4xuw?key=7eaa82a853f7a21b40becb096094e3fb";

// Movie Catalog
const MOVIES_DATABASE = [
  {
    id: 1,
    title: "Deadpool & Wolverine",
    year: 2024,
    genre: "Action",
    quality: "4K UHD",
    rating: "8.9",
    duration: "2h 08m",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
    desc: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, he must team up with an even more reluctant Wolverine."
  },
  {
    id: 2,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    quality: "4K UHD",
    rating: "8.8",
    duration: "2h 46m",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  },
  {
    id: 3,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    quality: "1080p HD",
    rating: "8.9",
    duration: "3h 00m",
    poster: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop",
    desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    genre: "Animation",
    quality: "4K UHD",
    rating: "8.7",
    duration: "2h 20m",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=600&auto=format&fit=crop",
    desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence."
  },
  {
    id: 5,
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Sci-Fi",
    quality: "4K HDR",
    rating: "8.4",
    duration: "3h 12m",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
    desc: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race."
  },
  {
    id: 6,
    title: "The Batman",
    year: 2022,
    genre: "Thriller",
    quality: "1080p HD",
    rating: "8.2",
    duration: "2h 56m",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=600&auto=format&fit=crop",
    desc: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
  },
  {
    id: 7,
    title: "John Wick: Chapter 4",
    year: 2023,
    genre: "Action",
    quality: "4K UHD",
    rating: "8.6",
    duration: "2h 49m",
    poster: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=600&auto=format&fit=crop",
    desc: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe."
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    quality: "4K IMAX",
    rating: "8.7",
    duration: "2h 49m",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
  },
  {
    id: 9,
    title: "Jawan: Extended Cut",
    year: 2023,
    genre: "Hindi",
    quality: "1080p HD",
    rating: "8.1",
    duration: "2h 50m",
    poster: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?q=80&w=600&auto=format&fit=crop",
    desc: "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society."
  },
  {
    id: 10,
    title: "Kalki 2898-AD",
    year: 2024,
    genre: "Hindi",
    quality: "4K UHD",
    rating: "8.5",
    duration: "3h 01m",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    desc: "A modern avatar of the Hindu god Vishnu is believed to have descended to the earth to protect the world from evil forces."
  },
  {
    id: 11,
    title: "A Quiet Place: Day One",
    year: 2024,
    genre: "Horror",
    quality: "1080p HD",
    rating: "7.8",
    duration: "1h 40m",
    poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
    desc: "A woman named Sam must survive an invasion in New York City by bloodthirsty alien creatures with ultrasonic sound hearing."
  },
  {
    id: 12,
    title: "Gladiator II",
    year: 2024,
    genre: "Action",
    quality: "4K UHD",
    rating: "8.4",
    duration: "2h 28m",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
    desc: "Years after witnessing the death of Maximus at the hands of his uncle, Lucius must enter the Colosseum after the emperors of Rome conquer his home."
  }
];

// Render Movie Cards
function renderMovies(movieList) {
  const container = document.getElementById("moviesGrid");
  if (!container) return;

  if (movieList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">
        <i class="fa-solid fa-film" style="font-size: 2.5rem; margin-bottom: 12px; color: #64748b;"></i>
        <p style="font-size: 1.1rem; font-weight: 600;">No movies found matching your query.</p>
        <p style="font-size: 0.85rem; margin-top: 6px;">Try searching for another title or click below to unlock full VIP catalog.</p>
        <a href="${SMARTLINK_URL}" target="_blank" rel="noopener noreferrer" class="btn-vip-stream" style="margin-top: 15px;">
          <i class="fa-solid fa-magnifying-glass"></i> Search In VIP Server
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = movieList.map(movie => `
    <div class="movie-card" onclick="openStreamModal('${escapeHtml(movie.title)}', '${movie.poster}', '${movie.genre}', '${movie.duration}', '${movie.rating}')">
      <div class="poster-wrap">
        <img src="${movie.poster}" alt="${movie.title}" class="poster-img" loading="lazy"/>
        <span class="card-badge-quality">${movie.quality}</span>
        <span class="card-badge-rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
        <div class="card-play-overlay">
          <div class="play-circle">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-title" title="${movie.title}">${movie.title}</div>
        <div class="movie-meta">
          <span class="movie-genre">${movie.genre}</span>
          <span>${movie.year}</span>
        </div>
        <a href="${SMARTLINK_URL}" target="_blank" rel="noopener noreferrer" class="card-quick-btn" onclick="event.stopPropagation();">
          <i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> Fast Stream
        </a>
      </div>
    </div>
  `).join("");
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\'");
}

// Modal Stream Player Controls
function openStreamModal(title, poster, genres, duration, rating) {
  const modal = document.getElementById("moviePlayerModal");
  if (!modal) return;

  document.getElementById("modalMovieTitle").innerText = title;
  document.getElementById("modalPlayerPoster").src = poster;
  document.getElementById("modalMovieGenres").innerText = genres;
  document.getElementById("modalMovieDuration").innerHTML = `<i class="fa-regular fa-clock"></i> ${duration}`;
  document.getElementById("modalMovieRating").innerHTML = `<i class="fa-solid fa-star"></i> ${rating}`;
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeStreamModal() {
  const modal = document.getElementById("moviePlayerModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function triggerSmartlinkStream() {
  window.open(SMARTLINK_URL, "_blank");
}

// Search and Filter Listeners
document.addEventListener("DOMContentLoaded", () => {
  renderMovies(MOVIES_DATABASE);

  // Search input
  const searchInput = document.getElementById("movieSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      const filtered = MOVIES_DATABASE.filter(m => 
        m.title.toLowerCase().includes(term) || 
        m.genre.toLowerCase().includes(term) ||
        m.desc.toLowerCase().includes(term)
      );
      renderMovies(filtered);
    });
  }

  // Genre filter tabs
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const genre = btn.getAttribute("data-genre");
      if (genre === "all") {
        renderMovies(MOVIES_DATABASE);
      } else {
        const filtered = MOVIES_DATABASE.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
        renderMovies(filtered);
      }
    });
  });

  // Nav category links
  const navLinks = document.querySelectorAll(".nav-link-item");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const cat = link.getAttribute("data-category");
      if (!cat) return;
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      if (cat === "all") {
        renderMovies(MOVIES_DATABASE);
      } else {
        const filtered = MOVIES_DATABASE.filter(m => m.genre.toLowerCase().includes(cat.toLowerCase()));
        renderMovies(filtered);
      }
    });
  });

  // Close modal when clicking outside dialog
  const modal = document.getElementById("moviePlayerModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeStreamModal();
      }
    });
  }
});
