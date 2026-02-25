# WiseOn Shadcn Registry

Astro + Starlight 기반의 Shadcn 컴포넌트 레지스트리 문서 사이트.

## 새 컴포넌트 추가 체크리스트

컴포넌트를 추가할 때 반드시 아래 항목을 모두 완료해야 빌드 에러가 발생하지 않습니다.

### 1. 컴포넌트 소스

- `src/registry/new-york/items/<name>/components/<name>.tsx` — 컴포넌트 본체

### 2. 예제 파일

- `src/registry/new-york/examples/<name>/basic.tsx` — 최소 하나의 예제

### 3. 레지스트리 JSON (`public/r/<name>.json`)

- **`files[].content` 필드에 컴포넌트 소스 코드를 반드시 포함할 것** (빠뜨리면 `<Code>` 컴포넌트가 빈 문자열을 받아 빌드 실패)
- `registryDependencies`, `dependencies` 등 메타데이터 확인

### 4. 타입 등록 (2곳)

- `src/components/markdown/code-preview/_code-preview-internal.tsx` — `Demo` 타입에 `"<name>/basic"` 등 예제 경로 추가
- `src/components/markdown/installation-tabs/installation-tabs.astro` — `RegistryItem` 타입에 `"<name>"` 추가

### 5. 문서 MDX

- `src/content/docs/components/<name>.mdx` — 문서 페이지

### 6. 빌드 확인

- `npx astro build` 실행하여 에러 없는지 확인

## 프로젝트 구조

```text
public/r/               — 레지스트리 JSON (shadcn CLI가 참조)
src/content/docs/       — Starlight MDX 문서
src/registry/new-york/
  items/<name>/         — 컴포넌트 소스
  examples/<name>/      — 데모 예제
src/components/markdown/ — CodePreview, Installation 등 문서용 Astro 컴포넌트
```

## 명령어

- `npm run dev` — 개발 서버 (port 4321)
- `npx astro build` — 프로덕션 빌드
