import styles from './container.module.css'

/**
 * Renders a container component with the specified width, containing the provided children.
 *
 * @param children - The children to be rendered within the container.
 * @param width - The width of the container.
 * @param fill - Whether the container should fill the available height
 * @return The container component with the specified width and children.
 */
export default function Container({
  children,
  width,
  fill,
}: Readonly<{ children: React.ReactNode; width: string; fill?: boolean }>) {
  return (
    <div
      className={styles.container}
      style={{
        maxWidth: width,
        minHeight: fill ? 'calc(100vh - 450px' : 'auto',
      }}
    >
      {children}
    </div>
  )
}
