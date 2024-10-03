import Catalog from "../components/Catalog"
import Categories from "../components/Categories"

function MainPage() {
  return (
    <main className="mx-32">
        <section><Categories/></section>
        <section><Catalog/></section>
        <section>Seccion 3</section>
        <section>Seccion 4</section>
        <section>Seccion 5</section>
        <section>Seccion 6</section>
        <section>Seccion 7</section>
        <section>Seccion 8</section>
    </main>
  )
}

export default MainPage