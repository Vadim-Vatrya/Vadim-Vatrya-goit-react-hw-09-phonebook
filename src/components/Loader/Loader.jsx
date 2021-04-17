import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.scss'

const LoaderContacts = () => {
  return(
    <div className={styles.loading}>
      <Loader
        type="ThreeDots"
        color="#FF1493"
        height={80}
        width={80}
        timeout={2000}
      />
    </div>
  )
};


export default LoaderContacts;