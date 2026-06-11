# GitHub Pages Deployment

This site is configured for free GitHub Pages hosting as a static Next.js export.

## Publish Steps

1. Create a GitHub repository and push this project to the `main` branch.
2. In GitHub, open the repository settings.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to `main`.
6. The workflow `.github/workflows/deploy-github-pages.yml` will build and publish the site.

The production domain is:

```text
https://buildnestonline.in/
```

Add `buildnestonline.in` as the custom domain in GitHub Pages settings. The exported site includes `public/CNAME`, so GitHub Pages will keep the domain after deployment.

## Enquiry Collection

GitHub Pages is static and does not support a backend form database. The website forms are wired to open WhatsApp with a prefilled enquiry message to:

```text
+91 80758 15183
```

The message includes enquiry type, name, company, email, phone, requirement, and source page URL.

## Custom Domain Note

The GitHub Actions workflow is configured for the custom root domain, so it builds without `NEXT_PUBLIC_BASE_PATH`. This keeps CSS, JavaScript, images, sitemap and robots paths rooted at `https://buildnestonline.in/`.
