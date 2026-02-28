import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Plus,
    Search,
    MoreHorizontal,
    Edit2,
    Trash2,
    FileText,
    CheckCircle2,
    AlertCircle
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialServices = [
    { id: 1, title: "Création de compte Campus France", price: "50€", category: "Administratif", active: true },
    { id: 2, title: "Constitution du dossier", price: "150€", category: "Accompagnement", active: true },
    { id: 3, title: "Choix des universités", price: "100€", category: "Conseil", active: true },
    { id: 4, title: "Lettres de motivation", price: "80€", category: "Rédaction", active: true },
    { id: 5, title: "Simulation d'entretien", price: "120€", category: "Coaching", active: true },
    { id: 6, title: "Pack complet", price: "400€", category: "Premium", active: true },
];

const AdminServices = () => {
    const [services] = useState(initialServices);
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = services.filter(s =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 reveal-up reveal-visible">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Gestion des Services</h2>
                    <p className="text-muted-foreground">Modifiez les services et packs d'accompagnement affichés sur le site.</p>
                </div>
                <Button className="bg-primary hover:bg-cyan-dark text-primary-foreground gap-2">
                    <Plus className="w-4 h-4" />
                    Ajouter un service
                </Button>
            </div>

            <Card>
                <CardHeader className="pb-3 text-foreground">
                    <CardTitle>Services Actifs</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher un service..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nom du service</TableHead>
                                    <TableHead>Catégorie</TableHead>
                                    <TableHead>Prix indicatif</TableHead>
                                    <TableHead>Statut</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filtered.map((service) => (
                                    <TableRow key={service.id}>
                                        <TableCell className="font-medium">{service.title}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{service.category}</Badge>
                                        </TableCell>
                                        <TableCell>{service.price}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-green-500/10 text-green-600 flex items-center gap-1 w-fit">
                                                <CheckCircle2 className="w-3 h-3" />
                                                Actif
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="w-4 h-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                                                    <DropdownMenuItem className="gap-2">
                                                        <Edit2 className="w-4 h-4" /> Modifier
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="gap-2 text-destructive">
                                                        <Trash2 className="w-4 h-4" /> Retirer
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminServices;
