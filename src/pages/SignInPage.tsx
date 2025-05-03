
import { SignInForm } from "@/components/Auth/SignInForm";
import Layout from "@/components/layout/Layout";

export default function SignInPage() {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 flex items-center justify-center min-h-[calc(100vh-150px)]">
        <SignInForm />
      </div>
    </Layout>
  );
}
