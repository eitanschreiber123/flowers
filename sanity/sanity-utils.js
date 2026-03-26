import { createClient, groq } from "next-sanity"

const client = createClient({
  projectId: "0lqo36oc",
  dataset: "production",
  apiVersion: "2026-02-21",
  useCdn: false
})

const getData = async () => {
  return {
    Rojo_precios: await client.fetch(groq`*[_type == "Rojo_precios"][0]`),
    Rojo_nombres: await client.fetch(groq`*[_type == "Rojo_nombres"][0]`),
    Mixto_precios: await client.fetch(groq`*[_type == "Mixto_precios"][0]`),
    Mixto_nombres: await client.fetch(groq`*[_type == "Mixto_nombres"][0]`)
  }
}

export default getData