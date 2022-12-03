import { useRef, useEffect } from 'react';
import styles from './ImageBeforeAfter.module.css';
import {createImageCompareSlider} from 'mibreit-image-before-after';

type ImageBeforeAfterProps = {
  beforeImage: string;
  afterImage: string;
};

function ImageBeforeAfter(props: ImageBeforeAfterProps) {
  const beforeImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (beforeImageRef.current)
    {
      createImageCompareSlider(beforeImageRef.current);
    }
  }, []);

  return (
    <div className={styles.imageBeforeAfter}>
      <img ref={beforeImageRef} src={props.beforeImage} alt="Before" width="1280" height="853" />
      <img src={props.afterImage} alt="After" width="1280" height="853" />
    </div>
  );
}

export default ImageBeforeAfter;
