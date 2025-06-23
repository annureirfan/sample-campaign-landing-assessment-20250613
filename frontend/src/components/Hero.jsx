export default function Hero({
  content,
  backgroundColor = "#4567b7",
  textColor = "#ffffff",
}) {
  return (
    <section
      className="text-center py-16 px-4"
      style={{ backgroundColor: backgroundColor }}
    >
      <h1 className="text-4xl font-bold mb-4" style={{ color: textColor }}>
        {content.title}
      </h1>
      <p className="text-lg" style={{ color: textColor }}>
        {content.subtitle}
      </p>
    </section>
  );
}
