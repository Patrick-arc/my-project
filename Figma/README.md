# Square Online - Responsive Website

A modern, responsive website built from your Figma project using HTML5, CSS3, and Bootstrap 5. This website features a scroll-based design that emphasizes different sections and pages.

## Features

✅ **Fully Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly navigation

✅ **Scroll-Based Navigation**
- Smooth scrolling between sections
- Each section takes up full viewport (100vh)
- Active navigation highlighting
- Keyboard navigation support (arrow keys)

✅ **Performance Optimizations**
- Lazy loading ready
- Smooth animations using CSS
- Optimized Bootstrap bundle

✅ **Interactive Components**
- Expandable accordion sections
- Hover effects on cards
- Animated statistics counter
- Parallax effects
- Staggered animations

✅ **9 Main Sections**
1. Hero Section - "Build a free online store that sells itself"
2. Integrated System Features
3. Brand Templates Showcase
4. Premium Shopping Experience
5. Shipping & Fulfillment Options
6. Widen Your Reach (Expandable sections)
7. Revenue Statistics & Testimonials
8. Pricing Plans
9. Learning Resources & FAQ
10. CTA Section & Footer

## File Structure

```
figma/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # Custom CSS styling and responsive design
├── script.js           # JavaScript for interactivity and animations
└── README.md          # This file
```

## Quick Start

1. **Open the website:**
   - Simply open `index.html` in any modern web browser

2. **No dependencies required:**
   - All resources are loaded from CDN (Bootstrap 5, no build step needed)

3. **Customize content:**
   - Edit text in `index.html`
   - Modify colors in `styles.css` (check the `:root` variables section)
   - Add new sections by copying the page structure

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #0066ff;
    --dark-text: #1a1a1a;
    --light-bg: #f5f5f5;
    --border-color: #e0e0e0;
    /* ... more variables */
}
```

### Add New Section
1. Copy a page section in `index.html`
2. Give it a unique `id` (e.g., `id="page11"`)
3. Add corresponding navigation link in the navbar

### Modify Navigation
Edit the navbar links in `index.html` at the top of the file to customize navigation items.

### Replace Placeholder Images
- Replace all `https://via.placeholder.com/` URLs with actual image URLs
- Update the `alt` text for accessibility

## Responsive Breakpoints

- **Desktop**: Full features and animations
- **Tablet** (≤ 768px): Optimized spacing, stacked layouts
- **Mobile** (≤ 576px): Further optimizations for small screens

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Navigation
- Fixed header with smooth transitions
- Active link highlighting based on scroll position
- Mobile hamburger menu that auto-closes on link click

### Animations
- Fade-in animations for page sections
- Smooth scroll behavior across all browsers
- Hover effects on cards and buttons
- Floating animation on hero image
- Staggered animations for resource cards

### Interactivity
- Expandable accordion sections on "Widen Your Reach"
- Pricing cards with hover effects
- Smooth scrolling to sections via navigation
- Keyboard navigation support (arrow keys to scroll)
- FAQ accordion with smooth expand/collapse

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors
- Alt text for all images

## Performance Tips

1. **Optimize Images**: Replace placeholder images with optimized formats
2. **Minify CSS/JS**: Use tools like cssnano for production
3. **Add Lazy Loading**: Implement for images below the fold
4. **Use WebP**: Convert images to WebP format where supported

## Deployment

### GitHub Pages
1. Push files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Site will be live at `https://username.github.io/repo-name`

### Netlify
1. Connect your Git repository
2. Select `index.html` as main file
3. Deploy automatically on push

### Traditional Hosting
Upload all files to your web host.

## Code Quality

- Clean, well-commented code
- BEM-like CSS naming conventions
- Modular JavaScript functions
- Semantic HTML5 structure
- Mobile-first responsive design

## Browser DevTools Tips

1. Use "Device Toolbar" to test responsive design
2. Check "Console" for smooth scroll behavior logs
3. Inspect elements to understand structure
4. Use "Lighthouse" audit for performance insights

## JavaScript Features

- Intersection Observer for scroll animations
- Bootstrap Collapse API for accordions
- Custom scroll event listeners
- Auto-hiding mobile menu
- Keyboard event handling

## Future Enhancements

Consider adding:
- Form validation
- Dark mode toggle
- Language switcher
- Search functionality
- Newsletter signup
- Live chat widget
- Analytics integration
- CMS integration

## Troubleshooting

**Scrolling not smooth?**
- Check browser support (older browsers may not support smooth scroll)
- Ensure JavaScript is enabled

**Images not loading?**
- Replace placeholder URLs with real image paths
- Check image file paths are correct

**Navigation not working?**
- Verify page IDs match href attributes
- Check browser console for errors

**Accordion not expanding?**
- Ensure Bootstrap JS bundle is loaded
- Check browser compatibility

## Support

For issues or questions:
1. Check browser console (F12)
2. Verify all files are in the same directory
3. Test in different browsers
4. Clear browser cache and reload

## License

This website is based on your Figma design. Feel free to modify and use as needed.

---

**Happy building!** 🚀

Last updated: May 2026
