addEventListener('fetch', (event) => handleRequest(event as FetchEvent));

async function handleRequest(event: FetchEvent) {
    try {
        event.respondWith(new Response("Hello world"));
    } catch (err) {
        let typedErr = err as Error
        console.log(`Error: ${typedErr}\nStack: ${typedErr.stack}`);
    }
}
