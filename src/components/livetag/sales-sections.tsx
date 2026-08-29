import {
  BatteryCharging,
  Car,
  Check,
  Magnet,
  MapPin,
  Mic,
  PawPrint,
  Shield,
  Smartphone,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { PRODUCT } from "@/lib/product";
import { useOffer } from "@/components/livetag/offer-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  {
    icon: MapPin,
    title: "Localização global em tempo real",
    text: "GPS preciso no mapa do celular. Não é Bluetooth de 12 metros — acompanha carro, moto, mala ou pet a distância.",
  },
  {
    icon: Mic,
    title: "Grava áudio do ambiente",
    text: "Microfone integrado: ouça ao vivo e grave o que acontece no seu veículo ou perto do objeto. O áudio vai direto para o app.",
  },
  {
    icon: BatteryCharging,
    title: "Bateria de longa duração",
    text: "Até 1 ano de uso contínuo, sem ficar recarregando toda semana.",
  },
  {
    icon: Magnet,
    title: "Imã potente + à prova d’água",
    text: "Cola em metal em 1 segundo. Resistente a chuva e uso no chassi, porta-malas ou coleira.",
  },
  {
    icon: Smartphone,
    title: "App grátis no Android e iOS",
    text: "Instala, vincula e pronto. Sem mensalidade e sem chip extra para o básico do rastreio.",
  },
  {
    icon: Shield,
    title: "Discreto e compacto",
    text: "Tamanho de uma moeda. Preto fosco, difícil de notar — e fácil de levar no bolso.",
  },
];

const USES = [
  {
    icon: Car,
    title: "Carro e moto",
    text: "Imã no chassi ou no porta-malas. Veja no mapa se o veículo saiu do lugar e grave o áudio do ambiente em caso de furto.",
  },
  {
    icon: PawPrint,
    title: "Pet",
    text: "Encaixa no suporte da coleira. Localize o cão ou o gato se ele fugir.",
  },
  {
    icon: MapPin,
    title: "Mala, mochila e chaves",
    text: "Rastreie bens de valor em viagem, no trabalho ou em casa.",
  },
];

const STEPS = [
  { n: "01", title: "Fixa em 1 segundo", text: "Imã no metal do veículo ou suporte na coleira / alça." },
  { n: "02", title: "Abre o app", text: "Android ou iPhone. Sem mensalidade." },
  { n: "03", title: "Vê, ouve e grava", text: "Mapa em tempo real + gravação de áudio do microfone no celular." },
];

const FAQS = [
  {
    q: "Ele grava áudio?",
    a: "Sim. O LiveTag Pro tem microfone integrado: você ouve o ambiente ao vivo no app e grava o áudio. Use só em bens seus ou com autorização.",
  },
  {
    q: "O LiveTag Pro funciona em qualquer celular?",
    a: "Sim. O aplicativo é gratuito e compatível com Android e iOS.",
  },
  {
    q: "Preciso pagar mensalidade?",
    a: "Não. Você compra o aparelho uma vez. Sem taxa mensal para rastrear e gravar áudio no app.",
  },
  {
    q: "A bateria dura mesmo 1 ano?",
    a: "Em uso contínuo típico, a autonomia chega a mais de 1 ano. O tempo varia com a frequência de gravação de áudio e o sinal.",
  },
  {
    q: "É à prova d’água?",
    a: "Sim. O design é vedado para uso em veículo, chuva e ambientes externos.",
  },
  {
    q: "Como instalo no carro?",
    a: "O imã gruda em superfícies metálicas. Muitos clientes colocam no chassi, no porta-malas ou em um ponto discreto do veículo próprio.",
  },
  {
    q: "Posso rastrear ou ouvir outra pessoa sem ela saber?",
    a: "Não. Use só em bens seus ou com autorização clara. Rastrear ou escutar alguém às escondidas é crime no Brasil.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Envio para todo o Brasil com rastreio. Após a confirmação do pagamento, o pedido sai em 1 a 3 dias úteis. A entrega costuma ocorrer entre 8 e 20 dias úteis, conforme a região.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias após o recebimento para testar. Se não for o que esperava, pedimos o reembolso conforme a política de trocas.",
  },
];

export function SalesSections() {
  const { openCheckout } = useOffer();

  function buy() {
    toast.success("Produto adicionado com sucesso.");
    openCheckout();
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-white">
      <section className="border-y border-black/5 bg-[#0B0D10] text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3">
          {[
            ["Localização global", "GPS de verdade, não Bluetooth"],
            ["Grava áudio", "Microfone: ao vivo e gravação"],
            ["Sem mensalidade", "Paga uma vez e usa"],
          ].map(([title, text]) => (
            <div key={title} className="text-center sm:text-left">
              <p className="font-black text-[#C8F542]">{title}</p>
              <p className="mt-1 text-sm text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5B6B1A]">Descrição</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-tight text-[#0B0D10] sm:text-4xl">
          Localização precisa e gravação de áudio
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#0B0D10]/70">
          O {PRODUCT.name} é o mini rastreador GPS que <strong className="text-[#0B0D10]">grava áudio</strong> para
          acompanhar <strong className="text-[#0B0D10]">seu carro, moto, pet ou objeto de valor</strong>. Compacto e
          magnético: no app você vê o mapa, ouve ao vivo e grava o som do ambiente.
        </p>
      </section>

      <section className="bg-[#F6F4EF]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <item.icon className="h-6 w-6 text-[#5B6B1A]" />
              <h3 className="mt-4 text-lg font-bold text-[#0B0D10]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0B0D10]/65">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <h2 className="text-3xl font-black tracking-tight text-[#0B0D10]">Como funciona</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.n} className="rounded-3xl border border-black/8 p-6">
              <p className="text-sm font-black text-[#5B6B1A]">{step.n}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-[#0B0D10]/65">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#0B0D10]">
          <img src="/livetag/magnet.png" alt="LiveTag Pro já fixado pelo ímã no chassi do carro" className="w-full object-cover" />
        </div>
      </section>

      <section className="bg-[#0B0D10] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-black">LiveTag Pro vs. outros GPS</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-white/55">
            A maioria das tags só apita perto do celular. O LiveTag Pro localiza, ouve ao vivo e grava o áudio.
          </p>
          <img
            src="/livetag/vs.png"
            alt="LiveTag Pro versus outros GPS"
            className="mx-auto mt-8 w-full max-w-3xl rounded-3xl"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-[#C8F542] p-6 text-[#0B0D10]">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">LiveTag Pro</p>
              <ul className="mt-5 space-y-3 text-sm font-medium">
                {[
                  "Grava áudio do ambiente",
                  "Ouve ao vivo no celular",
                  "Localização global por GPS",
                  "Até 1 ano de bateria",
                  "Sem mensalidade",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Outros GPS / tags</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {[
                  "Não grava áudio",
                  "Bluetooth de até 12 metros",
                  "Bateria que acaba rápido",
                  "Muitos cobram mensalidade",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <X className="h-5 w-5 shrink-0 text-red-400" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-black text-[#0B0D10]">Para que usar</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {USES.map((item) => (
            <article key={item.title} className="rounded-3xl bg-[#F6F4EF] p-6">
              <item.icon className="h-6 w-6" />
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0B0D10]/65">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl">
          <img src="/livetag/product.png" alt="LiveTag Pro e suporte" className="w-full bg-white object-contain" />
        </div>
      </section>

      <section className="bg-[#F6F4EF] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <img
            src="/livetag/oficial.png"
            alt="Compre LiveTag Pro só no site oficial"
            className="mx-auto mb-8 w-full rounded-3xl"
          />
          <h2 className="mt-4 text-3xl font-black">Compre só no site oficial</h2>
          <p className="mt-3 text-[#0B0D10]/65">
            O {PRODUCT.name} com GPS global, gravação de áudio e 1 ano de bateria é vendido neste site. Qualquer anúncio
            fora daqui pode ser imitação.
          </p>
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm font-medium">
            {["Produto original LiveTag Pro", "GPS + gravação de áudio", "Qualidade e garantia de 7 dias"].map(
              (line) => (
                <li key={line} className="flex gap-2">
                  <Check className="h-5 w-5 text-[#5B6B1A]" />
                  {line}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-black">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-6">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-base font-semibold">{item.q}</AccordionTrigger>
              <AccordionContent className="text-[#0B0D10]/70">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-[#0B0D10] py-16 text-center text-white">
        <div className="mx-auto max-w-xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8F542]">Garanta o seu</p>
          <h2 className="mt-3 text-3xl font-black">Não deixe a segurança para depois</h2>
          <p className="mt-3 text-white/60">
            LiveTag Pro: GPS, gravação de áudio e app no celular — sem mensalidade.
          </p>
          <Button
            onClick={buy}
            className="mt-8 h-14 rounded-2xl bg-[#C8F542] px-10 text-base font-black uppercase text-[#0B0D10] hover:bg-[#d7ff63]"
          >
            Comprar agora
          </Button>
        </div>
      </section>
    </div>
  );
}
