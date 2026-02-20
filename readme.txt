Proyecto E2E Cypress para https://www.saucedemo.com

Repositorio:  https://github.com/MarioSoler21/saucedemo-e2e-cypress.git

Requisitos:
- Node.js 18+ (o compatible)
- Conexión a internet

Instalación:
1. Abrir terminal en la carpeta del proyecto
2. Instalar dependencias:

```bash
npm install
```

Comandos útiles:
- Abrir la UI de Cypress:

```bash
npm run cypress:open
```

- Ejecutar tests headless (genera reportes mochawesome en `cypress/reports`):

```bash
npm test
```

Notas sobre reportes:
- El reporter `mochawesome` está configurado en `cypress.config.js` y generará JSON+HTML en `cypress/reports`.

Inicializar repo Git y subir a GitHub (ejemplo):

```bash
git init
git add .
git commit -m "Initial Cypress E2E for saucedemo"
# Crear repo en GitHub y luego:
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git branch -M main
git push -u origin main
```

Ejecutar solo el spec de checkout:

```bash
npx cypress run --spec "cypress/e2e/checkout.cy.js"

```

//
