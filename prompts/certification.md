# Video Plan: Sertifika Özelliği Tanıtım Videosu

> Generated: 2025-02-05

## Video Metadata

```yaml
title: "Profesyonel Sertifikalar, Tek Tıkla"
type: feature-highlight
duration: 25-27
fps: 30

variants:
  - name: "main"
    dimensions: 1920x1080
    aspectRatio: "16:9"
    use: "YouTube, Website embed"

  - name: "linkedin"
    dimensions: 1920x1080
    aspectRatio: "16:9"
    use: "LinkedIn video post"

  - name: "reels"
    dimensions: 1080x1920
    aspectRatio: "9:16"
    use: "Instagram Reels, TikTok"

  - name: "reels-cover"
    dimensions: 1080x1920
    aspectRatio: "9:16"
    type: "static-image"
    use: "Instagram Reels cover thumbnail"

audio:
  type: "background-music"
  style: "soft promotional, uplifting, modern tech"
  suggestions:
    - "Inspiring corporate ambient"
    - "Soft piano with subtle beats"
    - "Uplifting technology theme"
  volume: 0.3-0.4
  fadeIn: 1s
  fadeOut: 2s

watermark:
  asset: "teachfluence-logo-white.png"
  position: "bottom-right"
  opacity: 0.15
  size: 120px
  margin: 24px
  showDuring: "all-scenes"
```

---

## Screenshots to Capture

> **URL:** `/dijital-akademi/admin/courses/web-gelistirme-bootcamp/2025-bahar?tab=certificate`

### Sample Data (Already in Database)

| Student | Certificate | Status |
|---------|-------------|--------|
| Elif Yılmaz | CERT-2025-00847 | Aktif |
| Ahmet Kaya | CERT-2025-00832 | Aktif |
| Zeynep Demir | CERT-2025-00815 | Aktif |
| Burak Çelik | CERT-2025-00798 | İptal Edildi |
| Ayşe Şahin | No certificate | 8/9 progress |

---

### Screenshot Checklist

#### 1. Empty State
- **File:** `01-empty-state.png`
- **Used in:** Scene 4A (Editor Demo)
- **Steps:**
  1. Delete existing template temporarily (or use a new course)
  2. Navigate to certificate tab
  3. Capture: Empty state illustration + "Şablon Oluştur" button

#### 2. Editor Canvas
- **File:** `02-editor-canvas.png`
- **Used in:** Scene 4B (Editor Demo)
- **Steps:**
  1. Open template editor sheet
  2. Ensure default background image is loaded
  3. All 5 fields should be positioned on canvas
  4. Don't select any field
  5. Capture: Full editor view (canvas left, settings right)

#### 3. Field Selected with Toolbar
- **File:** `03-field-selected.png`
- **Used in:** Scene 4C (Editor Demo)
- **Steps:**
  1. In template editor, click on "Öğrenci Adı" field
  2. Floating toolbar should appear above the field
  3. Capture: Editor with selected field + visible toolbar (color, bold, alignment, font, size)

#### 4. Criteria Dropdown
- **File:** `04-criteria-dropdown.png`
- **Used in:** Scene 5 (Criteria Selection)
- **Steps:**
  1. In template editor, scroll to "Kazanım Kriterleri" section
  2. Click dropdown to expand it
  3. Capture with all 4 options visible:
     - Tüm içerikleri tamamla
     - Tamamlama yüzdesi
     - Belirli içerikleri tamamla
     - Kriter yok

#### 5. Issued Certificates Table
- **File:** `05-issued-table.png`
- **Used in:** Scene 6 (Issue Certificate)
- **Steps:**
  1. Close template editor
  2. Scroll down to "Verilen Sertifikalar" table
  3. Table should show 4 students with dates and status badges
  4. Capture: Full table with columns (Student, Date, Status, Actions)

#### 6. Issue Certificate Dialog
- **File:** `06-issue-dialog.png`
- **Used in:** Scene 6 (Issue Certificate)
- **Steps:**
  1. Click "Sertifika Ver" button
  2. In dialog, type "Ayşe" in student search
  3. Select "Ayşe Şahin" from results
  4. Select template from dropdown
  5. Capture: Dialog with student selected and template visible

#### 7. Student Claim Card
- **File:** `07-student-claim.png`
- **Used in:** Scene 7 (Student Experience)
- **Steps:**
  1. Login as Ayşe Şahin (or view course as student)
  2. Navigate to course page: `/dijital-akademi/dersler/web-gelistirme-bootcamp`
  3. Find certificate claim card section
  4. Should show: "8/9 içerik tamamlandı" with progress bar
  5. Capture: Certificate claim card with progress and button

#### 8. Public Certificate Page
- **File:** `08-public-page.png`
- **Used in:** Scene 8A (Public Sharing)
- **Steps:**
  1. Go to Elif Yılmaz's public certificate page
  2. URL: `/dijital-akademi/certificates/{certificateId}`
  3. Full certificate visible with all fields rendered
  4. Sidebar shows: Student name, Course, Term, Organization, Issue date, Certificate ID
  5. Capture: Full page (certificate + sidebar)

#### 9. Action Buttons Close-up
- **File:** `09-action-buttons.png`
- **Used in:** Scene 8B (Public Sharing)
- **Steps:**
  1. On same public certificate page
  2. Focus/zoom on the actions section
  3. Capture showing all 4 buttons clearly:
     - PNG İndir
     - PDF İndir
     - LinkedIn'de Paylaş
     - Bağlantıyı Kopyala

#### 10. Certificate Only (for Reels Cover)
- **File:** `10-certificate-only.png`
- **Used in:** Reels Cover Image
- **Steps:**
  1. On public certificate page
  2. Screenshot just the certificate (no sidebar, no header)
  3. Crop to show only the certificate with background
  4. This will be used as preview image in reels cover

---

### Quick Capture Order (Optimal Flow)

```
1. Admin Panel (logged in as admin)
   └── Certificate Tab
       ├── [1] Empty state (need to delete template first)
       ├── [2] Editor canvas (create/edit template)
       ├── [3] Field selected with toolbar
       ├── [4] Criteria dropdown expanded
       ├── [5] Issued certificates table
       └── [6] Issue dialog

2. Student View (logged in as Ayşe or incognito)
   └── Course Page
       └── [7] Claim card with progress

3. Public Page (no login needed)
   └── Certificate Page (Elif Yılmaz)
       ├── [8] Full page
       ├── [9] Action buttons close-up
       └── [10] Certificate only (cropped)
```

---

## Scene Breakdown (16:9 Main Version)

### Scene 1: Intro (3s)
**Frames:** 0-90

| Element | Animation | Timing |
|---------|-----------|--------|
| Pi Education Logo | spring-scale from center | 0-30f |
| Badge: "Yeni Özellik" | bounce-in top-right | 15-45f |
| Text: "Sertifika Sistemi" | fade-in + slide-up | 45-75f |
| Music | fade in | 0-30f |
| Watermark | fade-in bottom-right | 0-15f |

### Scene 2: Problem Hook (3s)
**Frames:** 90-180

| Element | Animation | Timing |
|---------|-----------|--------|
| Icon: 📜 Certificate | fade-in center | 0-15f |
| Text: "Öğrencilerinize profesyonel sertifikalar vermek zor mu?" | typewriter | 15-75f |
| Background | subtle gradient pulse | continuous |

### Scene 3: Solution Intro (2s)
**Frames:** 180-240

| Element | Animation | Timing |
|---------|-----------|--------|
| Text: "Artık değil." | spring-scale, bold, primary | 0-20f |
| Underline | draw-left-to-right | 20-40f |

### Scene 4: Template Editor Demo (6s)
**Frames:** 240-420

| Part | Screenshot | Elements |
|------|------------|----------|
| A (2s) | `01-empty-state.png` | Slide-in, cursor to button, highlight |
| B (2s) | `02-editor-canvas.png` | Crossfade, draw-border, callout: "Sürükle & Bırak Düzenleyici" |
| C (2s) | `03-field-selected.png` | Animated cursor drag, toolbar bounce-in, callout: "Konum, font, renk - her şey özelleştirilebilir" |

### Scene 5: Criteria Selection (3s)
**Frames:** 420-510

| Screenshot | Elements |
|------------|----------|
| `04-criteria-dropdown.png` | Slide-in-right, sequential glow, callout: "Tamamlama kriterleri ile otomatik sertifika" |

### Scene 6: Issue Certificate (3s)
**Frames:** 510-600

| Screenshot | Elements |
|------------|----------|
| `05-issued-table.png` | Slide-in-left, row highlights, callout: "Verilen sertifikaları tek yerden yönetin" |
| `06-issue-dialog.png` | (Optional B-roll) |

### Scene 7: Student Experience (3s)
**Frames:** 600-690

| Screenshot | Elements |
|------------|----------|
| `07-student-claim.png` | Slide-in-right, progress bar animation, button pulse, callout: "Öğrenciler ilerlemelerini takip eder" |

### Scene 8: Public Certificate & Sharing (4s)
**Frames:** 690-810

| Part | Screenshot | Elements |
|------|------------|----------|
| A (2s) | `08-public-page.png` | Zoom-reveal, shimmer, sidebar highlight |
| B (2s) | `09-action-buttons.png` | Button highlights, LinkedIn emphasis, callout: "LinkedIn'de paylaş, PDF olarak indir" |

### Scene 9: CTA (3s)
**Frames:** 810-900

| Element | Animation | Timing |
|---------|-----------|--------|
| Background | gradient sweep (primary → blue) | continuous |
| Text: "Sertifikalarınızı bugün oluşturun" | spring-scale | 0-30f |
| Button: "Hemen Deneyin" | bounce-in + pulse-glow | 30-60f |
| Pi Education Logo | fade-in center-bottom | 60-75f |
| Music | fade out | 60-90f |

---

## Reels Version (9:16)

### Adaptations

- Phone mockup frame instead of desktop
- Crop screenshots to key UI elements
- Text 1.5x larger, center-aligned
- Faster pacing: ~22s total
- Watermark: bottom-center, 48px margin

### Layout

```
┌─────────────────┐
│   [Callout]     │  ← Top 1/3
├─────────────────┤
│  [Screenshot    │  ← Middle
│   in phone]     │
├─────────────────┤
│  [Watermark]    │  ← Bottom
└─────────────────┘
```

---

## Reels Cover (Static)

**Dimensions:** 1080x1920
**Uses:** `10-certificate-only.png`

```
┌─────────────────┐
│  [Yeni Özellik] │
│                 │
│    SERTİFİKA    │
│    SİSTEMİ      │
│                 │
│  [Certificate   │
│   preview]      │
│                 │
│  Profesyonel    │
│  sertifikalar,  │
│  tek tıkla      │
│                 │
│  [Logo]         │
└─────────────────┘

Background: #0c0a09 → #1a1a2e
Text: #f2f2f2
Accent: #e11d48
```

---

## Technical Specs

### Audio

```typescript
{
  style: 'soft-corporate-uplifting',
  mood: ['professional', 'modern', 'hopeful'],
  tempo: '90-110 BPM',
  volume: 0.35,
  fadeIn: 30 frames,
  fadeOut: 60 frames
}
```

### File Structure

```
public/screenshots/
├── 01-empty-state.png
├── 02-editor-canvas.png
├── 03-field-selected.png
├── 04-criteria-dropdown.png
├── 05-issued-table.png
├── 06-issue-dialog.png
├── 07-student-claim.png
├── 08-public-page.png
├── 09-action-buttons.png
└── 10-certificate-only.png
```

---

## Deliverables

| Asset | Format | Dimensions | Duration |
|-------|--------|------------|----------|
| Main Video | MP4 | 1920×1080 | ~25s |
| LinkedIn Video | MP4 | 1920×1080 | ~25s |
| Instagram Reels | MP4 | 1080×1920 | ~22s |
| Reels Cover | PNG | 1080×1920 | Static |

---

## Timing Summary

| Scene | Duration | Frames |
|-------|----------|--------|
| Intro | 3s | 0-90 |
| Problem Hook | 3s | 90-180 |
| Solution | 2s | 180-240 |
| Editor Demo | 6s | 240-420 |
| Criteria | 3s | 420-510 |
| Issue | 3s | 510-600 |
| Student | 3s | 600-690 |
| Public/Share | 4s | 690-810 |
| CTA | 3s | 810-900 |

**Total: ~25-27s** (with transition overlaps)
