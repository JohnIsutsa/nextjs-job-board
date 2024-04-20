import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="max-w-5xl m-auto space-y-5 px-3 text-center">
            <H1>
                Not Found
            </H1>
            <p>
                Sorry the page you are looking for does not exist.
            </p>
            <Button asChild>
                <Link href='/'>Back to Home</Link>
            </Button>
        </main>
    )
}