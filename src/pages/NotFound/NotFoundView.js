import { NotFoundLink } from "../../navigation/components/NotFoundLink/NotFoundLink";

export function NotFoundView() {
  return (
    <>
      <section className="wrapper-404">
        <h2 className="title-huge">404</h2>
        <p>Ups!! chyba coś poszło nie tak...</p>
        <NotFoundLink />
      </section>
    </>
  );
}
