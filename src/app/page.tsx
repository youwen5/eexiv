import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <p className={styles.message}>
        eeXiv<sup>2</sup> is a free distribution service and an open-access
        archive for nearly 2.4 million scholarly articles in the fields of
        physics, mathematics, computer science, quantitative biology,
        quantitative finance, statistics, electrical engineering and systems
        science, and economics. Materials on this site may be published
        independently through other channels.
      </p>
    </div>
  );
}
