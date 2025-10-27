export function ContactForm() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50 text-center">
      <h2 className="pixel-text text-xl sm:text-2xl font-bold tracking-wider mb-4">
        Get in touch
      </h2>
      <p className="text-lg text-muted-foreground">
        Email me at{" "}
        <a
          href="mailto:santoshrai3.1415@gmail.com"
          className="text-primary underline hover:text-primary/80 transition-colors"
        >
          santoshrai3.1415@gmail.com
        </a>
      </p>
    </section>
  );
}
