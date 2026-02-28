import { useState } from "react";
import {
    Plus,
    Search,
    MoreHorizontal,
    Trash2,
    CheckCircle2,
    XCircle,
    User,
    Quote,
    Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const initialTestimonials = [
    { id: 1, name: "Jean Soro", country: "Côte d'Ivoire", message: "Grâce à Maig'Up, j'ai obtenu mon visa pour mon Master à Lyon. Un accompagnement exceptionnel !", status: "Publié", date: "24 Mars 2024" },
    { id: 2, name: "Moussa Laye", country: "Sénégal", message: "L'équipe est très professionnelle. Ils m'ont aidé pour mes lettres de motivation.", status: "En attente", date: "22 Mars 2024" },
    { id: 3, name: "Aminata Koné", country: "Mali", message: "Simulation d'entretien très réaliste. Ça m'a donné confiance.", status: "Publié", date: "20 Mars 2024" },
    { id: 4, name: "Fatou Diop", country: "Sénégal", message: "Meilleur service d'accompagnement Campus France !", status: "Rejeté", date: "15 Mars 2024" },
];

const AdminTestimonials = () => {
    const [testimonials] = useState(initialTestimonials);
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = testimonials.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Publié": return "bg-green-500/10 text-green-600";
            case "En attente": return "bg-yellow-500/10 text-yellow-600";
            case "Rejeté": return "bg-destructive/10 text-destructive";
            default: return "bg-secondary text-secondary-foreground";
        }
    };

    return (
        <div className="space-y-6 reveal-up reveal-visible">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Gestion des Témoignages</h2>
                    <p className="text-muted-foreground">Approuvez ou rejetez les témoignages envoyés par les étudiants.</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Rechercher un témoin, pays..."
                        className="pl-10 shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((t) => (
                    <Card key={t.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className={`absolute top-0 left-0 w-1 h-full ${t.status === 'Publié' ? 'bg-green-500' : t.status === 'En attente' ? 'bg-yellow-500' : 'bg-red-500'
                            }`} />
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <User className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-sm font-bold">{t.name}</CardTitle>
                                        <p className="text-xs text-muted-foreground">{t.country}</p>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-3 h-3 fill-gold text-gold" />
                                ))}
                            </div>
                            <div className="relative">
                                <Quote className="w-8 h-8 text-primary/5 absolute -top-2 -left-2 rotate-180" />
                                <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10">
                                    "{t.message}"
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border/50 flex justify-between items-center text-xs text-muted-foreground">
                            <span>Envoyé le {t.date}</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-secondary">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem className="gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Publier
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="gap-2">
                                        <XCircle className="w-4 h-4 text-destructive" /> Rejeter
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="gap-2 text-destructive">
                                        <Trash2 className="w-4 h-4" /> Supprimer
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AdminTestimonials;
