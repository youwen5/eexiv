/**
 * Renders a container component with the specified width, containing the provided children.
 *
 * @param children - The children to be rendered within the container.
 * @return The container component with the specified width and children.
 */
export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`pb-10 px-5 max-w-[1200px] mx-auto`}>
      {children}
    </div>
  )
}
