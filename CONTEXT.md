# Portfolio

Conor Kemp's personal site: CV-driven home/about pages plus Contentful-authored writing and work.

## Language

**Entry**:
A piece of Contentful-authored content with its own page — either a **Blog post** or a **Project**.
_Avoid_: Article, item, content

**Blog post**:
An **Entry** of written thoughts, dated by its publish time.
_Avoid_: Blog, article

**Project**:
An **Entry** describing a piece of work Conor built.
_Avoid_: Work, case study

**Summary**:
The card-sized view of an **Entry** (title, slug, excerpt, image) — no body.
_Avoid_: Preview, card data

## Relationships

- An **Entry** has exactly one **Summary**
- `/blog` lists **Blog post** **Summaries**, newest first; `/projects` lists **Project** **Summaries**

## Example dialogue

> **Dev:** "Does the **Project** list need each **Entry**'s body?"
> **Conor:** "No — the list only shows **Summaries**; the body is for the **Entry**'s own page."

## Flagged ambiguities

- "content" was used for both the Markdown body and the **Entry** as a whole — resolved: "content" means the body only.
