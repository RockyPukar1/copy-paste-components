interface ISectionProps {
  id: string;
  title: string;
  content: string;
}

export default function Section({ id, title, content }: ISectionProps) {
  return (
    <section id={id} className="content-section mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p>{content}</p>
    </section>
  );
}
