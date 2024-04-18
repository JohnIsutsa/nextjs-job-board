import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import Link from "next/link";

export default function Page() {
    return (
        <main className="m-auto max-w-5xl my-10 space-y-5 px-2 text-center">
            <H1>
                Job submitted
            </H1>
            <p className='text-muted-foreground text-center'>
                Your job has been submitted and is pending approval.
            </p>

            <Button asChild>
                <Link href='/'>Back to Home</Link>
            </Button>
        </main>
    )
}