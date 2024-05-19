import Spacing from "../spacing/Spacing";

export default function Section({
  topLg = '0',
  topMd = '0',
  bottomLg = '0',
  bottomMd = '0',
  children,
  className, 
  ...props
}) {
  return (
    <section className={`${className ? className : ''}`} {...props}>
      <Spacing lg={topLg} md={topMd} />
      {children}
      <Spacing lg={bottomLg} md={bottomMd} />
    </section>
  )
}
