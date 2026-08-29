import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero-mouthguard.jpg";
import sleepKitImage from "../assets/sleep-kit.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nocturne — Protetor Bucal Anti-Ronco | Durma em Silêncio" },
      {
        name: "description",
        content:
          "O protetor bucal anti-ronco Nocturne reduz o ronco e apoia a respiração durante a noite. 30 dias de garantia, frete grátis e ajuste confortável.",
      },
      { property: "og:title", content: "Nocturne — Protetor Bucal Anti-Ronco" },
      {
        property: "og:description",
        content:
          "Dorme em silêncio. Respira em paz. Protetor bucal anti-ronco com garantia de 30 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* Header */}
      <header className="rise sticky top-0 z-20 bg-background/85 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
          <span className="font-display text-2xl italic font-semibold tracking-tight text-foreground">
            Nocturne
          </span>
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-muted-foreground">
            <a href="#beneficios" className="hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="hover:text-foreground transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              Dúvidas
            </a>
          </nav>
          <a
            href="#comprar"
            className="text-[13px] tracking-wide text-foreground border border-foreground/40 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            Comprar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 md:pt-24 pb-16 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 max-w-[30ch]">
          <p className="rise text-[11px] uppercase tracking-[0.28em] text-mist mb-6 [animation-delay:60ms]">
            Protetor bucal anti-ronco
          </p>
          <h1 className="rise text-5xl md:text-6xl font-medium tracking-tight text-balance text-foreground [animation-delay:120ms] font-display">
            Dorme em <span className="italic font-semibold text-accent">silêncio</span>. Respira em paz.
          </h1>
          <p className="rise mt-6 text-pretty text-muted-foreground text-[15px] leading-relaxed max-w-[38ch] [animation-delay:200ms]">
            O design anatômico Nocturne reduz o ronco e apoia a respiração durante a noite — sem dor, sem barulho, sem esforço.
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:280ms]">
            <a
              href="#comprar"
              className="bg-primary text-primary-foreground text-[14px] tracking-wide px-7 py-3.5 rounded-full hover:bg-primary/85 transition-colors"
            >
              Comprar — R$ 189
            </a>
            <a
              href="#beneficios"
              className="text-[14px] tracking-wide text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              Conhecer o produto
            </a>
          </div>
          <div className="rise mt-8 flex items-center gap-3 text-[12px] text-muted-foreground [animation-delay:340ms]">
            <span className="size-1.5 rounded-full bg-accent"></span> Garantia incondicional de 30 dias
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="rise [animation-delay:200ms]">
            <img
              src={heroImage}
              alt="Protetor bucal anti-ronco Nocturne em tecido de linho creme"
              width={1200}
              height={1400}
              className="w-full aspect-[4/5] object-cover bg-secondary outline-1 -outline-offset-1 outline-black/5 rounded-[min(1vw,14px)]"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 md:sticky md:top-28">
            <p className="text-[11px] uppercase tracking-[0.28em] text-mist mb-4">Benefícios</p>
            <h2 className="text-4xl font-medium tracking-tight text-balance text-foreground font-display">
              Uma noite, <span className="italic text-accent">restaurada</span>.
            </h2>
            <p className="mt-5 text-pretty text-muted-foreground text-[15px] leading-relaxed max-w-[34ch]">
              Desenvolvido para o conforto de quem precisa dormir — e para quem dorme ao lado.
            </p>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="grid grid-cols-12 gap-5 border-b border-border pb-10">
              <div className="col-span-2 flex items-start">
                <span className="text-[13px] tracking-widest text-mist">01</span>
              </div>
              <div className="col-span-10">
                <h3 className="text-2xl font-medium tracking-tight text-foreground font-display">
                  Menos ronco, mais silêncio
                </h3>
                <p className="mt-2 text-pretty text-muted-foreground text-[15px] leading-relaxed max-w-[46ch]">
                  Mantém a mandíbula em posição ideal, abrindo as vias aéreas e reduzindo o ruído ao longo de toda a noite.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 border-b border-border pb-10">
              <div className="col-span-2 flex items-start">
                <span className="text-[13px] tracking-widest text-mist">02</span>
              </div>
              <div className="col-span-10">
                <h3 className="text-2xl font-medium tracking-tight text-foreground font-display">
                  Respiração livre
                </h3>
                <p className="mt-2 text-pretty text-muted-foreground text-[15px] leading-relaxed max-w-[46ch]">
                  Materiais de grau médico que apoiam a respiração nasal e ajudam a aliviar sintomas leves de apneia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2 flex items-start">
                <span className="text-[13px] tracking-widest text-mist">03</span>
              </div>
              <div className="col-span-10">
                <h3 className="text-2xl font-medium tracking-tight text-foreground font-display">
                  Sono que você sente
                </h3>
                <p className="mt-2 text-pretty text-muted-foreground text-[15px] leading-relaxed max-w-[46ch]">
                  Acordar mais leve, com a energia e o humor que uma noite inteira de descanso traz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="bg-secondary/60 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.28em] text-mist mb-4">Depoimentos</p>
          <h2 className="text-4xl font-medium tracking-tight text-balance text-foreground max-w-[20ch] font-display">
            Quem dorme, <span className="italic text-accent">recomeça</span>.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <figure className="bg-background border border-border rounded-[min(1vw,14px)] p-7">
              <div className="text-[11px] tracking-[0.2em] text-mist mb-4">★★★★★</div>
              <blockquote className="text-[17px] leading-relaxed text-foreground font-display">
                "Em três noites o ronco havia sumido. Meu marido dormiu como se fosse a primeira vez."
              </blockquote>
              <figcaption className="mt-5 text-[12px] text-muted-foreground">Helena R. · São Paulo</figcaption>
            </figure>
            <figure className="bg-background border border-border rounded-[min(1vw,14px)] p-7">
              <div className="text-[11px] tracking-[0.2em] text-mist mb-4">★★★★★</div>
              <blockquote className="text-[17px] leading-relaxed text-foreground font-display">
                "Leve, confortável e sem aquele gosto estranho. Pelo menos agora acordo descansado."
              </blockquote>
              <figcaption className="mt-5 text-[12px] text-muted-foreground">Marcos A. · Curitiba</figcaption>
            </figure>
            <figure className="bg-background border border-border rounded-[min(1vw,14px)] p-7">
              <div className="text-[11px] tracking-[0.2em] text-mist mb-4">★★★★★</div>
              <blockquote className="text-[17px] leading-relaxed text-foreground font-display">
                "Uso há dois meses. A respiração melhorou e a ansiedade ao deitar diminuiu."
              </blockquote>
              <figcaption className="mt-5 text-[12px] text-muted-foreground">Paulo T. · Porto Alegre</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section id="garantia" className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 max-w-[40ch]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-mist mb-4">Garantia</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance text-foreground font-display">
            30 noites, <span className="italic text-accent">sem risco</span>.
          </h2>
          <p className="mt-5 text-pretty text-muted-foreground text-[15px] leading-relaxed max-w-[44ch]">
            Se o Nocturne não devolver a sua noite de sono, devolvemos cada centavo. Sem perguntas, sem burocracia — basta escrever para a gente.
          </p>
          <a
            href="#comprar"
            className="mt-7 inline-block text-[14px] tracking-wide text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            Entender a garantia
          </a>
        </div>
        <div className="md:col-span-5">
          <img
            src={sleepKitImage}
            alt="Kit de sono Nocturne com protetor bucal em bolsa de linho"
            width={1000}
            height={1100}
            loading="lazy"
            className="w-full aspect-[10/11] object-cover bg-secondary outline-1 -outline-offset-1 outline-black/5 rounded-[min(1vw,14px)]"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-mist mb-4">Dúvidas</p>
            <h2 className="text-4xl font-medium tracking-tight text-balance text-foreground font-display">
              Antes de <span className="italic text-accent">adormecer</span>.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="border-b border-border py-6 grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 text-[16px] text-foreground font-medium tracking-tight font-display">
                Como devo higienizar o Nocturne?
              </div>
              <div className="col-span-12 md:col-span-4 text-[14px] text-muted-foreground leading-relaxed">
                Lave com água morna e sabão neutro após o uso; a cada semana, mergulhe por cinco minutos no kit de esterilização incluso.
              </div>
            </div>
            <div className="border-b border-border py-6 grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 text-[16px] text-foreground font-medium tracking-tight font-display">
                Quanto tempo leva a adaptação?
              </div>
              <div className="col-span-12 md:col-span-4 text-[14px] text-muted-foreground leading-relaxed">
                A maioria dorme com conforto já na segunda noite. No topo da caixa há um guia de adaptação de sete dias.
              </div>
            </div>
            <div className="border-b border-border py-6 grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 text-[16px] text-foreground font-medium tracking-tight font-display">
                Substitui o tratamento para apneia?
              </div>
              <div className="col-span-12 md:col-span-4 text-[14px] text-muted-foreground leading-relaxed">
                Não. Ele apoia a respiração e alivia sintomas leves. Em casos de apneia diagnosticada, siga a orientação do seu médico.
              </div>
            </div>
            <div className="py-6 grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 text-[16px] text-foreground font-medium tracking-tight font-display">
                Qual o tempo de entrega?
              </div>
              <div className="col-span-12 md:col-span-4 text-[14px] text-muted-foreground leading-relaxed">
                Postamos em até 24h úteis. O prazo médio é de 3 a 6 dias, com rastreio enviado por e-mail.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="comprar" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-mist mb-5">Nocturne</p>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-balance text-foreground max-w-[16ch] mx-auto font-display">
            Sua próxima noite, <span className="italic text-accent">em paz</span>.
          </h2>
          <p className="mt-6 text-pretty text-muted-foreground text-[15px] leading-relaxed max-w-[40ch] mx-auto">
            Envio para todo o Brasil. Garantia de 30 dias. Discrição no endereço de entrega.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="bg-primary text-primary-foreground text-[14px] tracking-wide px-8 py-4 rounded-full hover:bg-primary/85 transition-colors"
            >
              Comprar agora — R$ 189
            </a>
            <a
              href="#beneficios"
              className="text-[14px] tracking-wide text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              Voltar ao topo
            </a>
          </div>
          <p className="mt-8 text-[12px] text-muted-foreground">
            Parcele em até 3x sem juros · Pagamento seguro
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-display text-xl italic font-semibold tracking-tight text-foreground">
            Nocturne
          </span>
          <p className="text-[12px] text-muted-foreground">
            Protetor bucal anti-ronco · Feito para quem precisa de uma boa noite.
          </p>
        </div>
      </footer>
    </div>
  );
}
