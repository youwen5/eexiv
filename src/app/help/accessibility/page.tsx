import styles from './accessibility.module.css'
export default function Page() {
    return (
        <div className={styles.content}>
            <p>
                If you encounter any accessibility-related issues related to
                your use of our site, it is likely because of our jank code
                architecture. Unfortunately, our programming team is ill
                equipped to fix these issues, even if some of them may be
                pressing Diversity, Equity, and Inclusion (DEI) concerns. We
                recommend you add any accessibility fixes yourself by submitting
                a{' '}
                <a href="https://github.com/Team-1280/eeXiv/pull/new">
                    pull request
                </a>{' '}
                on GitHub.
            </p>
        </div>
    )
}
