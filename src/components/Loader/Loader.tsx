import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => (
  <div className={styles.Loader} data-testid="Loader">
    <div className="loading-container">
      <div>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
        <small>Fetching data...</small>
      </div>
    </div>
  </div>
);

export default Loader;
