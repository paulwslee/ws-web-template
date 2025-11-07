# 🌐 GTIRI Web Template v4.5  
> **Next.js 16 + Tailwind v4 + shadcn/ui + Animate + Header/Footer**

---

### 🧭 개요
GTIRI.ORG 웹사이트 프로젝트를 위한 **표준 템플릿(Boilerplate)** 입니다.  
최신 Next.js 16과 Tailwind v4, shadcn/ui 조합으로 즉시 실행 가능한 환경을 제공합니다.  
**팀 개발용** 또는 **새 프로젝트 시작용**으로 바로 복제해 사용하세요.

---

## 🧱 Stack
| 기술 | 설명 |
|------|------|
| **Next.js 16 (App Router + Turbopack)** | SSR/CSR 통합 프레임워크 |
| **Tailwind CSS v4** | 새로운 PostCSS 기반 스타일 시스템 |
| **shadcn/ui** | 모던 UI 컴포넌트 세트 (button, card, input, select 등) |
| **tailwindcss-animate** | 애니메이션 프리셋 (모달, 드롭다운, 토스트 등) |
| **TypeScript + ESLint + Prettier + Husky** | 품질 관리 및 커밋 자동 포맷팅 |

---

## 🚀 시작하기

### 새 프로젝트 복제
```bash
git clone https://github.com/paulwslee/ws-web-template.git my-site
cd my-site
git checkout template/v4.5-shadcn
npm install
npm run dev
# http://localhost:3000
app/
 ├─ layout.tsx        # 전역 레이아웃 (Header/Footer 포함)
 ├─ globals.css       # Tailwind v4 스타일 진입점
 ├─ page.tsx          # 데모 UI (Card/Form/Button)
components/
 ├─ layout/
 │   ├─ header.tsx
 │   └─ footer.tsx
 └─ ui/               # shadcn/ui 컴포넌트
lib/
 └─ utils.ts          # cn() helper
npx shadcn@latest add accordion alert-dialog badge dropdown-menu form sonner
🧠 다음 버전 예고
버전	기능
v5.0	디자인 토큰 + 다크모드 토글 + ThemeProvider
v5.5	토스트 알림(sonner) + 폼/UX 개선
v6.0	GTIRI 공식 페이지 구조 통합 (홈/소개/연락)
🪪 라이선스

MIT © 2025 GTIRI.ORG

Maintained by @paulwslee
