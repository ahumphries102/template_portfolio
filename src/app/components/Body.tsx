export default function Body({
  BodyContent,
  Hero,
}: {
  BodyContent: React.ReactNode
  Hero: React.ReactNode
}) {
  return (
    <>
      <section>{Hero}</section>
      <section>{BodyContent}</section>
    </>
  )
}
