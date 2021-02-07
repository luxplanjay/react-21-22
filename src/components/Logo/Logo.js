import styles from "./Logo.module.css";

export default function Logo({ imageUrl, alt = "" }) {
  return <img className={styles.logo} src={imageUrl} alt={alt} />;
}
