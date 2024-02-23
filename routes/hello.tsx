import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Data = {
    name?: string;
};

export const handler: Handlers = {
    GET: (req : Request, ctx : FreshContext<unknown, Data>) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined;
        return ctx.render({ name });
    }
};

const Page = (props: PageProps<Data>) => {
    return (
        <main>
            <form method="GET" target="/hello">
                <input type="text" name="name" value={props.data.name || ""} />
                <button type="submit">Submit</button>
            </form>
            {props.data.name && <h1>Hello, {props.data.name}!</h1>}
        </main>
    );
}

export default Page;
