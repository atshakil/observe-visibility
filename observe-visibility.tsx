import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';

interface ObserveVisibilityProps {
  children: React.FC<{isVisible: boolean}>;
  root?: React.RefObject<HTMLElement>; // Enclosing element in which this component is being scrolled
  rootMargin?: string; // Identical to CSS margin (e.g. '10px', '0 10px 0 20px')
  threshold?: number;
  classes?: {container?: string};
}
const ObserveVisibility = ({
  children: Children,
  root,
  rootMargin,
  threshold,
  classes
}: ObserveVisibilityProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef();
  const onIntersect = (entries, observer) => {
    entries.length && setIsVisible(entries[0].isIntersecting);
  };

  useEffect(() => {
    if (IntersectionObserver) {
      const observer = new IntersectionObserver(onIntersect, {
        root: root && root.current,
        rootMargin,
        threshold,
      });

      containerRef.current && observer.observe(containerRef.current);
    }
  }, []);

  return IntersectionObserver ? (
    <div ref={containerRef} className={classNames(classes && classes.container)}>
      <Children isVisible={isVisible} />
    </div>
  ) : null;
};
ObserveVisibility.defaultProps = {
  offset: 0,
  threshold: 0.5,
};

export default ObserveVisibility;
