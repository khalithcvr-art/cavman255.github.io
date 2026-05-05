// Project gallery data
const galleryData = {
    sapia: {
        title: 'Sapia Al Ain Zoo',
        images: [
            'https://via.placeholder.com/800x600?text=Sapia+Al+Ain+Zoo+1',
            'https://via.placeholder.com/800x600?text=Sapia+Al+Ain+Zoo+2',
            'https://via.placeholder.com/800x600?text=Sapia+Al+Ain+Zoo+3'
        ]
    },
    hilalco: {
        title: 'Hilalco Abu Dhabi',
        images: [
            'https://via.placeholder.com/800x600?text=Hilalco+1',
            'https://via.placeholder.com/800x600?text=Hilalco+2',
            'https://via.placeholder.com/800x600?text=Hilalco+3'
        ]
    },
    qasr: {
        title: 'Qasr Al Watan',
        images: [
            'https://via.placeholder.com/800x600?text=Qasr+Al+Watan+1',
            'https://via.placeholder.com/800x600?text=Qasr+Al+Watan+2',
            'https://via.placeholder.com/800x600?text=Qasr+Al+Watan+3'
        ]
    },
    velodrome: {
        title: 'Velodrome Modern',
        images: [
            'https://via.placeholder.com/800x600?text=Velodrome+1',
            'https://via.placeholder.com/800x600?text=Velodrome+2',
            'https://via.placeholder.com/800x600?text=Velodrome+3'
        ]
    },
    opera: {
        title: 'Opera Back House',
        images: [
            'https://via.placeholder.com/800x600?text=Opera+Back+House+1',
            'https://via.placeholder.com/800x600?text=Opera+Back+House+2',
            'https://via.placeholder.com/800x600?text=Opera+Back+House+3'
        ]
    },
    burj: {
        title: 'Burj Vista',
        images: [
            'https://via.placeholder.com/800x600?text=Burj+Vista+1',
            'https://via.placeholder.com/800x600?text=Burj+Vista+2',
            'https://via.placeholder.com/800x600?text=Burj+Vista+3'
        ]
    },
    wade: {
        title: 'Wade Adams Dubai',
        images: [
            'https://via.placeholder.com/800x600?text=Wade+Adams+1',
            'https://via.placeholder.com/800x600?text=Wade+Adams+2',
            'https://via.placeholder.com/800x600?text=Wade+Adams+3'
        ]
    },
    modon: {
        title: 'Modon Abu Dhabi',
        images: [
            'https://via.placeholder.com/800x600?text=Modon+1',
            'https://via.placeholder.com/800x600?text=Modon+2',
            'https://via.placeholder.com/800x600?text=Modon+3'
        ]
    },
    broadway: {
        title: '8th Broadway London',
        images: [
            'https://via.placeholder.com/800x600?text=Broadway+1',
            'https://via.placeholder.com/800x600?text=Broadway+2',
            'https://via.placeholder.com/800x600?text=Broadway+3'
        ]
    },
    'santanna-island': {
        title: 'Santanna Enorme Island Hotel',
        images: [
            'https://via.placeholder.com/800x600?text=Santanna+Island+1',
            'https://via.placeholder.com/800x600?text=Santanna+Island+2',
            'https://via.placeholder.com/800x600?text=Santanna+Island+3'
        ]
    },
    'santanna-beach': {
        title: 'Santanna Enorme Beach Resort',
        images: [
            'https://via.placeholder.com/800x600?text=Santanna+Beach+1',
            'https://via.placeholder.com/800x600?text=Santanna+Beach+2',
            'https://via.placeholder.com/800x600?text=Santanna+Beach+3'
        ]
    },
    'ritz-bahrain': {
        title: 'Ritz Carlton Bahrain',
        images: [
            'https://via.placeholder.com/800x600?text=Ritz+Bahrain+1',
            'https://via.placeholder.com/800x600?text=Ritz+Bahrain+2',
            'https://via.placeholder.com/800x600?text=Ritz+Bahrain+3'
        ]
    }
};

let currentGallery = null;
let currentImageIndex = 0;

// Gallery functions
function openGallery(projectId) {
    const modal = document.getElementById('galleryModal');
    const galleryImage = document.getElementById('galleryImage');
    const imageCaption = document.getElementById('imageCaption');

    currentGallery = projectId;
    currentImageIndex = 0;

    const project = galleryData[projectId];
    if (project) {
        galleryImage.src = project.images[currentImageIndex];
        imageCaption.textContent = `${project.title} - Image ${currentImageIndex + 1} of ${project.images.length}`;
        modal.style.display = 'flex';
    }
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

function nextImage() {
    if (!currentGallery) return;
    const project = galleryData[currentGallery];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updateGalleryImage();
}

function previousImage() {
    if (!currentGallery) return;
    const project = galleryData[currentGallery];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updateGalleryImage();
}

function updateGalleryImage() {
    const galleryImage = document.getElementById('galleryImage');
    const imageCaption = document.getElementById('imageCaption');
    const project = galleryData[currentGallery];

    galleryImage.src = project.images[currentImageIndex];
    imageCaption.textContent = `${project.title} - Image ${currentImageIndex + 1} of ${project.images.length}`;
}

// Keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'Escape') closeGallery();
    }
});

// Close gallery when clicking outside image
document.addEventListener('click', (e) => {
    const modal = document.getElementById('galleryModal');
    if (e.target === modal) {
        closeGallery();
    }
});

// Project filtering
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.style.animation = 'slideIn 0.3s ease';
            }, 0);
        } else {
            card.classList.add('hidden');
        }
    });
}

// Toggle about section
function toggleAbout() {
    const aboutSection = document.getElementById('about-dropdown');
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
        setTimeout(() => {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        aboutSection.style.display = 'none';
    }
}

// Scroll to projects section
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
});
