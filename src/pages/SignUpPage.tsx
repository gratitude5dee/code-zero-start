
import { SignUpForm } from "@/components/Auth/SignUpForm";
import { Layout } from "@/components/layout/Layout";

export default function SignUpPage() {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 flex items-center justify-center min-h-[calc(100vh-150px)]">
        <SignUpForm />
      </div>
    </Layout>
  );
}
