# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Paige Hunter, a software engineer specializing in finance and healthcare systems. It's a single-page static site built with vanilla HTML, CSS, and JavaScript.

## Development

**Local development:** Open `index.html` directly in a browser or use any static file server.

```bash
# Python 3
python -m http.server 8000

# Node.js (if http-server is installed)
npx http-server
```

## Architecture

The entire site is contained in `index.html`:
- **CSS** (lines 8-1050): CSS custom properties define the color scheme (`--teal-accent`, `--bg-primary`, etc.). Responsive breakpoints at 1024px, 768px, and 480px.
- **HTML** (lines 1052-1449): Semantic sections for hero, about, portfolio, experience, skills, education, and contact.
- **JavaScript** (lines 1450-1496): Handles navbar scroll effect, mobile nav toggle, Intersection Observer for fade-in animations, and smooth scrolling.

## Design System

- **Fonts:** Inter (body), Playfair Display (headings) via Google Fonts
- **Color palette:** Dark teal theme with accent color `#1abc9c`
- **Animations:** `.fade-in` class with Intersection Observer for scroll reveals

## Key Sections

- Portfolio grid uses CSS Grid with a `.featured` class for spanning items
- Experience timeline uses `::before` pseudo-elements for the vertical line and dots
- Contact form is currently non-functional (just `event.preventDefault()`)
