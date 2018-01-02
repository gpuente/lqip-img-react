import 'intersection-observer';

class ViewPortIntersectionObserver {
  constructor(config = {}) {
    const options = {
      root: null,
      rootMargin: '200px 0px',
      threshold: 0.0,
      ...config,
    };

    this.observer = new IntersectionObserver(this.filterEntries, options); // eslint-disable-line
    this.observers = [];
  }

  getObserver = () => this.observer


  filterEntries = (entries, observer) => {
    entries.forEach((entrie) => {
      if (entrie.isIntersecting) this.notifySubscriber(entrie.target.dataset.id);
    });
  }

  notifySubscriber = (id) => {
    this.observers.forEach((observer) => {
      if (observer.id === id) {
        observer.fn();
      }
    });
  }

  subscribe = (observer = {}) => {
    if (!observer.id || !observer.fn || !observer.element) return;

    this.observer.observe(observer.element);
    this.observers.push(observer);
  }

  unsubscribe = (id, element) => {
    const index = this.observers.findIndex(observer => observer.id === id);

    if (index < 0) return;

    this.observers.splice(index, 1);
    this.observer.unobserve(element);

    return this.observers;
  }
}


export default ViewPortIntersectionObserver;
