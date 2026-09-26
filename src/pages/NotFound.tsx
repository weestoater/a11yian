import postcard404 from "../assets/404-postcard.png";

export const NotFound = () => {
  return (
    <section className="hero">
      <h1>Oops</h1>

      <img src={postcard404} alt="" className="img-full" />
      <p>
        The page you are looking for does not appear to be there. It might be on
        a well deserved vacation instead.
      </p>
      <p>If you believe this is an error, please contact support.</p>
      <p>
        <a href="/">Go back to the homepage</a>
      </p>
    </section>
  );
};
