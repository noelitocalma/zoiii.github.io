import React from 'react';
import styles from './Modal.module.scss';

const Modal: React.FC = () => (
  <div className={styles.Modal} data-testid="Modal">
    Modal Component
  </div>
);

export default Modal;
