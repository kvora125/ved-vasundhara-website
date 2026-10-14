// Renders both language versions of a piece of text; CSS shows the one that
// matches <html data-lang>, so switching language needs no re-render and works
// in the static export.
export default function L({ en, hi }: { en: string; hi: string }) {
  return (
    <>
      <span className="l-hi">{hi}</span>
      <span className="l-en" lang="en">
        {en}
      </span>
    </>
  );
}
