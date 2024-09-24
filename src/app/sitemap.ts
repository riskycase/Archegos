import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://archegosventures.in",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 1,
        },
        {
            url: "https://archegosventures.in/about",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.8,
        },
        {
            url: "https://archegosventures.in/products",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.9,
        },
        {
            url: "https://archegosventures.in/careers",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.7,
        },
        {
            url: "https://archegosventures.in/contact",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.9,
        },
    ];
}
