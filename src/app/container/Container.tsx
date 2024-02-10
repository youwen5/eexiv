import styles from './container.module.css'

/**
 * Renders a container component with the provided children. It will restrict the
 * width of the container to 90vw.
 *
 * @param {Readonly<{ children: React.ReactNode }>} children - The child components to be rendered within the container.
 * @return {React.ReactElement} The container component with the provided children.
 */
export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.container}>{children}</div>
}
