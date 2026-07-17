import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Dancing Bears homepage without the booking badge", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Dancing Bears Detail Co\. \| Mobile Car Detailing<\/title>/i);
  assert.match(html, /IT&#x27;S BEEN A LONG, STRANGE TRIP FOR YOUR CAR/i);
  assert.match(html, /href="\/book">CONTACT<\/a>/i);
  assert.match(html, /\/mascots\/polisher-bear-cutout\.png/i);
  assert.doesNotMatch(html, /NOW TAKING BOOKINGS/i);
  assert.doesNotMatch(html, /codex-preview/i);
});

test("server-renders the curated before and after jobs", async () => {
  const response = await render("/gallery");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /BLACK SEDAN INTERIOR RESET/i);
  assert.match(html, /HIGHLANDER MAT RESCUE/i);
  assert.match(html, /KIA K5 INTERIOR RESET/i);
  assert.match(html, /LEXUS RX INTERIOR RESET/i);
  assert.match(html, /driver-before\.jpg/i);
  assert.match(html, /mat-after\.jpg/i);
  assert.match(html, /before-driver-cabin\.mp4/i);
  assert.match(html, /after-driver-seat\.mp4/i);
});
