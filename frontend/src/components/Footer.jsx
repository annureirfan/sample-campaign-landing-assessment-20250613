export default function Footer({
  content,
  backgroundColor = "#4567b7",
  textColor = "#ffffff",
}) {
  return (
    <footer
      className="text-center py-8 px-4"
      style={{ backgroundColor: backgroundColor }}
    >
      <p style={{ color: textColor }}>{content.text}</p>
    </footer>
  );
}
