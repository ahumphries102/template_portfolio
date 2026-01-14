export default function Body({
  History,
  WineCards,
  WineTasting,
  Hero,
}: {
  History: React.ReactNode
  WineCards: React.ReactNode
  WineTasting: React.ReactNode
  Hero: React.ReactNode
}) {
  return (
    <>
      <section>{Hero}</section>
      <section className="mt-[100vh]">
        <section>{History}</section>
        <section>{WineCards}</section>
        <section>{WineTasting}</section>
      </section>
    </>
  )
}
