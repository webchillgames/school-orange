export function useObserver(elementToWatch, callback, options) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      callback(entry);
    }
  }, options);

  observer.observe(elementToWatch);

  return observer;
}
