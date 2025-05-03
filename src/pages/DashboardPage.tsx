
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

export default function DashboardPage() {
  const { user, signOut } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Welcome to Your Dashboard</CardTitle>
            <CardDescription>
              {user?.email ? `Logged in as ${user.email}` : "Welcome to your personal dashboard"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This is your protected dashboard page. You can build your application features here.
            </p>
            <Button onClick={signOut} variant="outline">
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
