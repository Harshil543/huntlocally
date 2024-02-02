import styles from "./index.module.scss";

export default function SearchBox(props: any) {
  return <input className={styles.searchBox} placeholder={props.placeholder} />;
}
