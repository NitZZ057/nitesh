const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16,
  rootMargin: '0px 0px -30px 0px'
});

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
  observer.observe(item);
});

const navLinks = Array.from(document.querySelectorAll('.topnav a'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (navLinks.length && sections.length) {
  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isMatch = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', isMatch);
      link.setAttribute('aria-current', isMatch ? 'page' : 'false');
    });
  };

  const activeSectionObserver = new IntersectionObserver((entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visibleEntries.length > 0) {
      setActiveLink(visibleEntries[0].target.id);
    }
  }, {
    threshold: [0.25, 0.5, 0.75],
    rootMargin: '-20% 0px -55% 0px'
  });

  sections.forEach((section) => activeSectionObserver.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href')?.slice(1);
      if (targetId) {
        setActiveLink(targetId);
      }
    });
  });
}
