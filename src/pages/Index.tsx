import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Award, Star, FileText, GraduationCap, MessageSquare, Target, Clock, Heart, Shield, Zap, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "500+", label: "Étudiants accompagnés" },
  { icon: Award, value: "95%", label: "Taux de réussite" },
  { icon: Star, value: "4.9/5", label: "Satisfaction client" },
];

const services = [
  {
    icon: FileText,
    title: "Dossier Campus France",
    description: "Création de compte et constitution complète de votre dossier Campus France avec suivi personnalisé.",
  },
  {
    icon: GraduationCap,
    title: "Choix des universités",
    description: "Sélection stratégique des formations adaptées à votre profil et vos objectifs de carrière.",
  },
  {
    icon: MessageSquare,
    title: "Lettres de motivation",
    description: "Rédaction de lettres percutantes et personnalisées pour maximiser vos chances d'admission.",
  },
  {
    icon: Target,
    title: "Simulation d'entretien",
    description: "Préparation intensive à l'entretien Campus France avec mise en situation réelle.",
  },
];

const whyUs = [
  { icon: Shield, title: "Expertise prouvée", description: "Des conseillers experts formés aux procédures Campus France" },
  { icon: Clock, title: "Gain de temps", description: "Évitez les erreurs et accélérez vos démarches administratives" },
  { icon: Heart, title: "Accompagnement humain", description: "Un conseiller dédié disponible tout au long de votre parcours" },
  { icon: Zap, title: "Stratégie personnalisée", description: "Des conseils adaptés à votre profil et vos ambitions" },
  { icon: Award, title: "Taux de réussite élevé", description: "95% de nos étudiants obtiennent leur admission" },
  { icon: Headphones, title: "Support continu", description: "Assistance par WhatsApp et email 7j/7" },
];

const testimonials = [
  {
    quote: "Grâce à Maig'Up France, j'ai pu constituer mon dossier Campus France sans stress. L'équipe m'a guidée à chaque étape et j'ai obtenu mon admission du premier coup !",
    name: "Aminata Diallo",
    origin: "Sénégal • Université Paris-Saclay",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200",
  },
  {
    quote: "La simulation d'entretien m'a été très utile. J'étais préparé à toutes les questions et j'ai réussi mon entretien avec succès. Merci infiniment !",
    name: "Kofi Mensah",
    origin: "Côte d'Ivoire • Sciences Po Bordeaux",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    quote: "L'accompagnement de Maig'Up France a fait toute la différence. Mes lettres de motivation étaient parfaitement adaptées à chaque formation. Je recommande à 100% !",
    name: "Fatou Bah",
    origin: "Guinée • Université de Lyon",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 lg:pb-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hero-lighter/50 border border-hero-lighter text-hero-muted text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Expert Campus France depuis 2025
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-hero-foreground leading-tight mb-6">
                Réussissez vos
                <br />
                <span className="text-primary">études en France</span>
                <br />
                avec <span className="text-gold">Maig'Up</span>
              </h1>

              <p className="text-hero-muted text-lg leading-relaxed mb-8 max-w-lg">
                Nous accompagnons les étudiants africains dans toutes les étapes de leur projet d'études : Campus France, choix d'université, lettres de motivation et préparation aux entretiens.
              </p>

              <div className="space-y-3 mb-8">
                {["Accompagnement personnalisé", "Experts Campus France", "Suivi jusqu'à l'obtention du visa"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-hero-muted">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-cyan-dark text-primary-foreground font-semibold px-8 rounded-full gap-2">
                    Démarrer mon projet <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-hero-lighter text-hero-foreground hover:bg-hero-lighter/30 font-semibold px-8 rounded-full">
                    Découvrir nos services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="space-y-4 animate-slide-up">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card rounded-xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-hero-foreground">{stat.value}</p>
                    <p className="text-sm text-hero-muted">{stat.label}</p>
                  </div>
                </div>
              ))}

              {/* Join us badge */}
              <div className="gold-gradient rounded-full px-6 py-3 inline-flex items-center gap-3 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gold-foreground/20 border-2 border-gold" />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gold-foreground text-sm">Rejoignez-nous</p>
                  <p className="text-xs text-gold-foreground/70">+50 ce mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Nos services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un accompagnement sur mesure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la création de votre compte Campus France jusqu'à l'obtention de votre visa, nous vous guidons à chaque étape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" className="rounded-full font-semibold px-8">
                Découvrir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image + Stats Banner */}
      <section className="section-subtle py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
                alt="Étudiants heureux"
                className="rounded-2xl shadow-xl w-full object-cover h-80 lg:h-96"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm opacity-80">Étudiants accompagnés</p>
              </div>
            </div>
            <div>
              <p className="text-primary font-semibold mb-2">Pourquoi nous choisir ?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                La différence Maig'Up France
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nous combinons expertise, disponibilité et bienveillance pour vous offrir un accompagnement d'exception dans votre projet d'études en France.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Témoignages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ils ont réussi avec Maig'Up France
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les retours de nos étudiants qui ont concrétisé leur rêve d'étudier en France.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl p-6">
                <div className="text-gold text-3xl font-serif mb-3">"</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-2 text-gold mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.origin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/temoignages">
              <Button variant="outline" className="rounded-full font-semibold px-8">
                Voir tous les témoignages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-semibold mb-2">Prêt à démarrer ?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
            Commencez votre projet d'études en France
          </h2>
          <p className="text-hero-muted max-w-2xl mx-auto mb-8">
            Obtenez une consultation gratuite et découvrez comment nous pouvons vous accompagner dans votre réussite.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-cyan-dark text-primary-foreground font-semibold px-8 rounded-full">
                Prendre rendez-vous
              </Button>
            </Link>
            <a href="https://wa.me/33123456789?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="whatsapp-btn font-semibold px-8 rounded-full">
                Discuter sur WhatsApp
              </Button>
            </a>
          </div>
          <div className="flex justify-center gap-6 text-sm text-hero-muted">
            <span>✓ Réponse sous 24h</span>
            <span>✓ Consultation gratuite</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
