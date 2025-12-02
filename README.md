# 올페이즈 프론트엔드 과제 - PaysByPays 대시보드

## 프로젝트 개요
가맹점(Merchant)과 결제(Payment) 데이터를 관리하고 시각화하는 어드민 대시보드입니다.
**FSD(Feature-Sliced Design)** 아키텍처를 기반으로 설계되었으며, 확장성과 유지보수성을 고려하여 구현되었습니다.


## 설치 및 실행 방법

이 프로젝트는 **Node.js v20.11.0** 환경에서 개발되었습니다.
프로젝트 루트의 `.nvmrc` 파일을 통해 버전을 맞추실 수 있습니다.

```bash
# 1. Node 버전 설정
nvm use

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

### 환경 변수 설정

**루트에 `.env.local` 파일 생성 후 아래 코드를 입력해주세요.**

```dotenv
NEXT_PUBLIC_API_URL=https://recruit.paysbypays.com/api/v1
```

## 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (출처: https://ui.shadcn.com), Lucide Icons
- **State Management**: TanStack Query (React Query)
- **Table**: TanStack Table
- **Linter/Formatter**: Biome

### UI/UX 디자인 의도
빠른 UI 구축과 일관된 디자인 시스템 유지를 위해 `shadcn/ui`와 `Tailwind CSS`를 채택했습니다. 별도의 디자인 시스템 개발보다는 기능 구현 및 비즈니스 로직 연동에 집중하여, 깔끔하고 기능적인 대시보드 UI를 제공하는 데 중점을 두었습니다.

## 주요 기능

### 1. 대시보드 (홈)
- 전체 거래액, 거래 건수, 활성 가맹점 수 등 핵심 지표를 보여주는 **통계 위젯**
- 최근 거래 내역 및 신규 가맹점 요약 리스트 제공

### 2. 데이터 테이블 (가맹점/결제 관리)
- **TanStack Table** 기반의 고기능 테이블 구현
- **필터링 시스템**:
    - 도메인별(가맹점 상태, 결제 상태) 필터링 지원
    - 반응형 UI 적용: 데스크톱은 버튼 그룹, 모바일은 드롭다운 메뉴로 자동 전환
- **사용자 경험(UX) 최적화**:
    - `localStorage` 연동: 새로고침 후에도 사용자가 설정한 **컬럼 가시성(Visibility)** 및 **필터 상태** 유지

### 3. 참고 사항
- **UI 라이브러리 선택 이유**: 빠른 UI 구축과 일관된 디자인 시스템 유지를 위해 `shadcn/ui`와 `Tailwind CSS`를 채택했습니다. 커스텀 스타일링보다는 기능 구현과 비즈니스 로직 연동에 시간을 우선 투자했습니다.
- **데이터 테이블 구현**: `TanStack Table`을 도입하여 확장성을 확보했습니다. 현재는 로컬 데이터 필터링으로 구현되었으나, 추후 서버 데이터 연동이 용이하도록 구조를 잡았습니다.
- **아쉬운 점**: 실제 서비스라면 가맹점별 상세 결제 내역 통계 기능이 추가되면 좋을 것 같습니다.

## 폴더 구조 (FSD Architecture)
`src/` 디렉토리는 기능 단위로 분리된 FSD 패턴을 따릅니다.

```
src/
├── app/          # Next.js App Router (페이지 라우팅)
├── widgets/      # 페이지를 구성하는 독립적인 UI 블록 (DataTable, DashboardStats 등)
├── entities/     # 비즈니스 도메인 로직 (Merchant, Payment 모델 및 API)
├── shared/       # 재사용 가능한 공통 컴포넌트(UI Kit), 유틸리티, 훅
```

## 커밋 컨벤션

| 태그       | 설명            | 예시                                     |
|----------|---------------|----------------------------------------|
| feat     | 새로운 기능 추가     | `feat: 결제 리스트 api 연동`                  |
| fix      | 버그 수정         | `fix: 날짜 포맷팅 오류 수정`                    |
| refactor | 코드 리팩토링       | `refactor: 결제 내역 훅을 api 폴더로 이동`        |
| style    | 코드 포맷팅 오타 수정  | `style: 코드 포맷팅 및 세미콜론 추가`              |
| docs     | 문서 수정         | `docs: README 실행 방법 업데이트`              |
| chore    | 설정 변경/빌드      | `chore: 패키지 의존성 설치 및 .github 폴더 생성`    |
| rename   | 파일,컴포넌트 이름 변경 | `rename: Button -> AppButton 컴포넌트명 수정` |
| remove   | 파일, 코드 구문 삭제  | `remove: 미사용 임포트 구문 삭제`                 |
