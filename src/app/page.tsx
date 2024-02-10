import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <img
          className={styles.wordmark}
          src="https://raw.githubusercontent.com/Team-1280/identity/main/assets/img/eecs/eecs-wordmark.png"
        />
        <p className={styles.contributions}>
          We gratefully acknowledge support from our volunteer peer reviewers,
          member institutions, and all{" "}
          <a href="https://github.com/Team-1280/eeXiv/graphs/contributors">
            open-source contributors
          </a>
          .
        </p>
      </div>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          eeXiv<sup>2</sup>
        </h1>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchBox}
            name="q"
            placeholder="Search..."
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </div>
      </div>
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
      <footer>
        <div className={styles.footerContent}>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/subscribe">Subscribe</a>
            </li>
            <li>
              <a href="/legal/copyright">Copyright</a>
            </li>
            <li>
              <a href="/legal/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/help/accessibility">Accessibility</a>
            </li>
            <li>
              <a href="/status">eeXiv status</a>
            </li>
            <li>
              <a href="/status/notifications">Get status notifications</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
