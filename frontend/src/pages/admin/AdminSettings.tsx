import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
    Globe,
    Mail,
    Phone,
    MapPin,
    Palette,
    ShieldCheck,
    Bell
} from "lucide-react";

const AdminSettings = () => {
    return (
        <div className="space-y-6 reveal-up reveal-visible">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Paramètres du Site</h2>
                    <p className="text-muted-foreground">Configurez les informations globales et l'apparence de la plateforme.</p>
                </div>
                <Button className="bg-primary hover:bg-cyan-dark text-primary-foreground">
                    Enregistrer les modifications
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Info Contact */}
                <Card className="border-border/50">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-primary" />
                            <CardTitle>Informations Générales</CardTitle>
                        </div>
                        <CardDescription>Coordonnées affichées sur le site et le pied de page.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="site-name">Nom du site</Label>
                            <Input id="site-name" defaultValue="Maig'Up France" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email de contact</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="email" className="pl-10" defaultValue="contact@maigup.com" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Téléphone WhatsApp</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="phone" className="pl-10" defaultValue="+33 1 23 45 67 89" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="address">Adresse du bureau</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="address" className="pl-10" defaultValue="Paris, France" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Appearance */}
                <Card className="border-border/50">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Palette className="w-5 h-5 text-primary" />
                            <CardTitle>Apparence & Thème</CardTitle>
                        </div>
                        <CardDescription>Personnalisez les couleurs et le style visuel.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Mode Sombre Automatique</Label>
                                    <p className="text-xs text-muted-foreground">Active le thème sombre selon les préférences système.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Animations de défilement</Label>
                                    <p className="text-xs text-muted-foreground">Activer les effets de "Reveal" lors du scroll.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Logo Principal</Label>
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center border border-dashed text-muted-foreground overflow-hidden p-2">
                                    <img src="/Assets/logo_maigup-removebg-preview.png" alt="Logo preview" className="object-contain" />
                                </div>
                                <Button variant="outline" size="sm">Remplacer le logo</Button>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label>Couleurs de marque</Label>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary border" title="Primaire Blue" />
                                <div className="w-8 h-8 rounded-full bg-accent border" title="Or Royal" />
                                <div className="w-8 h-8 rounded-full bg-[#1A1F2C] border" title="Dark Sidebar" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Security & Notifications */}
                <Card className="border-border/50">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <CardTitle>Sécurité & Maintenance</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Mode Maintenance</Label>
                                <p className="text-xs text-muted-foreground">Afficher une page d'attente aux visiteurs.</p>
                            </div>
                            <Switch />
                        </div>
                        <Button variant="outline" className="w-full text-xs">Changer le mot de passe admin</Button>
                    </CardContent>
                </Card>

                {/* Notifications */}
                <Card className="border-border/50">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Bell className="w-5 h-5 text-primary" />
                            <CardTitle>Notifications</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Alertes nouvelles inscriptions</Label>
                                <p className="text-xs text-muted-foreground">Recevoir un email pour chaque nouvelle demande.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Résumé hebdomadaire</Label>
                                <p className="text-xs text-muted-foreground">Envoyer un rapport hebdo des activités admin.</p>
                            </div>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminSettings;
