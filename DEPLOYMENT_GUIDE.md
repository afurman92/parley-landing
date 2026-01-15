# PARLEY Landing - Deployment Guide

## Pre-requisitos completados ✅
- [x] Código optimizado para Vercel
- [x] SEO meta tags configurados
- [x] robots.txt y sitemap.xml creados
- [x] Google Analytics placeholder listo
- [x] Git inicializado con commit inicial

---

## PASO 1: Crear repositorio en GitHub

### 1.1 Ve a GitHub
1. Abre https://github.com/new
2. Nombre del repositorio: `parley-landing`
3. Descripción: `PARLEY - Real-Time Political Intelligence Landing Page`
4. Selecciona **Public**
5. NO marques ninguna opción (README, gitignore, license)
6. Click **Create repository**

### 1.2 Conecta tu repositorio local
Abre terminal en la carpeta `parley-landing` y ejecuta:

```bash
git remote add origin https://github.com/alejandro-5314/parley-landing.git
git branch -M main
git push -u origin main
```

---

## PASO 2: Deploy a Vercel

### 2.1 Importar proyecto
1. Ve a https://vercel.com/new
2. Click **Import Git Repository**
3. Conecta tu cuenta de GitHub si no lo has hecho
4. Selecciona el repositorio `parley-landing`
5. Click **Import**

### 2.2 Configuración del proyecto
Vercel detectará automáticamente que es Vite. Verifica:
- **Framework Preset**: Vite
- **Build Command**: `npm run build` (default)
- **Output Directory**: `dist` (default)
- **Install Command**: `npm install` (default)

### 2.3 Deploy
1. Click **Deploy**
2. Espera 1-2 minutos
3. Vercel te dará una URL temporal como `parley-landing-xxxxx.vercel.app`
4. Verifica que funciona antes de continuar

---

## PASO 3: Conectar dominio parleytech.com

### 3.1 Agregar dominio en Vercel
1. En tu proyecto de Vercel, ve a **Settings** > **Domains**
2. Escribe `parleytech.com` y click **Add**
3. Vercel mostrará los DNS records necesarios

### 3.2 Configurar DNS Records

Ve al panel de tu proveedor de dominio (GoDaddy, Namecheap, Cloudflare, etc.) y crea estos records:

#### Para el root domain (parleytech.com):
| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |

#### Para www (opcional pero recomendado):
| Type | Name | Value |
|------|------|-------|
| CNAME | www | `cname.vercel-dns.com` |

### 3.3 Verificar en Vercel
1. Vuelve a Vercel > Settings > Domains
2. Espera que el status cambie a **Valid Configuration** (puede tomar 5-30 min)
3. Vercel configurará SSL automáticamente

---

## PASO 4: Google Analytics

### 4.1 Crear propiedad GA4
1. Ve a https://analytics.google.com
2. Click **Admin** (engranaje abajo izquierda)
3. Click **Create Property**
4. Nombre: `PARLEY Landing`
5. Sigue el wizard hasta obtener tu **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 4.2 Agregar ID a tu código
1. Abre `index.html`
2. Busca `G-XXXXXXXXXX` (aparece 2 veces)
3. Reemplaza ambos con tu Measurement ID real
4. Commit y push:

```bash
git add index.html
git commit -m "Add Google Analytics Measurement ID"
git push
```

Vercel hará re-deploy automáticamente.

---

## PASO 5: Verificaciones finales

### Checklist
- [ ] https://parleytech.com carga correctamente
- [ ] https://www.parleytech.com redirige a parleytech.com
- [ ] Candado SSL verde (HTTPS activo)
- [ ] Language toggle EN/ES funciona
- [ ] Vista mobile responsive
- [ ] Links del footer a daat.cloud/blog funcionan
- [ ] Formulario de demo abre email client

### Test de performance
1. Ve a https://pagespeed.web.dev
2. Ingresa `https://parleytech.com`
3. Verifica score 90+ en mobile y desktop

### Test de SEO
1. Ve a https://parleytech.com/robots.txt - debe mostrar el contenido
2. Ve a https://parleytech.com/sitemap.xml - debe mostrar el XML

---

## Troubleshooting común

### DNS no propaga
- Puede tomar hasta 48 horas (usualmente 5-30 min)
- Verifica en https://dnschecker.org

### Error "Invalid Configuration" en Vercel
- Asegúrate de que el record A apunta a `76.76.21.21`
- Elimina cualquier record A o AAAA existente para el root domain

### Vercel dice "Too many redirects"
- Desactiva cualquier redirección HTTPS en tu proveedor de DNS
- Vercel maneja SSL automáticamente

### Build falla en Vercel
- Ve a **Deployments** > click en el deploy fallido > **View Logs**
- Común: falta dependencia en package.json

---

## Comandos útiles

```bash
# Ver status de git
git status

# Hacer cambios y deploy
git add .
git commit -m "Tu mensaje"
git push

# Ver logs localmente
npm run dev
```

---

## URLs finales

- **Producción**: https://parleytech.com
- **GitHub**: https://github.com/alejandro-5314/parley-landing
- **Vercel Dashboard**: https://vercel.com/dashboard

---

*Guía generada el 14 de enero de 2026*
