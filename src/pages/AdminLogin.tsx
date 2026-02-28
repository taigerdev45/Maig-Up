import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { GraduationCap, Lock, User } from "lucide-react";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock authentication
        setTimeout(() => {
            if (email === "admin@maigup.com" && password === "admin123") {
                localStorage.setItem("adminAuthenticated", "true");
                toast.success("Connexion réussie");
                navigate("/admin/dashboard");
            } else {
                toast.error("Identifiants incorrects (admin@maigup.com / admin123)");
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background hero-gradient p-4">
            <div className="w-full max-w-md reveal-up reveal-visible">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <img
                            src="/Assets/logo_maigup-removebg-preview.png"
                            alt="Maig'Up France Logo"
                            className="h-16 w-auto object-contain brightness-0 invert"
                        />
                    </div>
                </div>

                <Card className="border-border/50 shadow-2xl backdrop-blur-sm bg-card/90">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center font-bold">Administration</CardTitle>
                        <CardDescription className="text-center">
                            Connectez-vous pour gérer votre plateforme
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleLogin}>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="admin@maigup.com"
                                        className="pl-10"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Mot de passe</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        className="pl-10"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-cyan-dark text-primary-foreground font-semibold h-11"
                                disabled={isLoading}
                            >
                                {isLoading ? "Connexion en cours..." : "Se connecter"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AdminLogin;
