// Utility function to handle lazy loading images
export const handleImageLoad = (event) => {
  const img = event.target;
  img.classList.add('loaded');
};

// Intersection Observer for better lazy loading
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
};

const lazyLoadingUtils = { handleImageLoad, setupLazyLoading };
export default lazyLoadingUtils; 